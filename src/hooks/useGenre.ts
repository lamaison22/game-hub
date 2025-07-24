import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";


interface Genre {
    id:number,
    name:string
}

interface FetchGenresResponse {
    cont :number,
    results:Genre[]
}

const useGenre = () =>{

  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true); // ← Começa como true

  useEffect(() => {
    const controller = new AbortController();
    
    apiClient
      .get<FetchGenresResponse>("/genres", {signal: controller.signal})
      .then((res) => {
        setGenres(res.data.results)
        
      })
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message);
        
      }).finally(()=>setTimeout(()=>setLoading(false),2000))
      
    return () => controller.abort();
  }, []);

  return {genres, error, isLoading};
}

export default useGenre