import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import useData from "./useData";
import { Genre } from "./useGenre";
import { GameQuery } from "@/App";


export interface Platform{
  id:number,
  name:string,
  slug:string
}

export interface Game {
  id: number;
  name: string;
  background_image:string,
  parent_platforms: {platform:Platform}[], //isso pq o cara que fez foi burro e fez q cada parent tenha um tipo platform que por si só é uma interface com nome, id etc
  metacritic:number
}


const  useGames = (gameQuery:GameQuery) => useData<Game>("/games", 
  {params:{
    genres:gameQuery.genre?.id, 
    platforms:gameQuery.platform?.id,
    ordering:gameQuery?.sortOrder
  }
},
[gameQuery])
 

export default useGames;