import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";



interface FetchResponse<T> {
    cont :number,
    results:T[]
}

const useData = <T>(endpoint:string) =>{

  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true); // ← Começa como true

  useEffect(() => {
    const controller = new AbortController();
    
    apiClient
      .get<FetchResponse<T>>(endpoint, {signal: controller.signal})
      .then((res) => {
        setData(res.data.results)
        
      })
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message);
        
      }).finally(()=>setTimeout(()=>setLoading(false),2000))
      
    return () => controller.abort();
  }, []);

  return {data, error, isLoading};
}

export default useData