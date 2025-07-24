import useData from "@/hooks/useData";
import useGenre, { Genre } from "@/hooks/useGenre";
import React from "react";

function GenreList() {
  const { data } = useGenre();
  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
}

export default GenreList;
