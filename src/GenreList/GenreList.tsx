import useData from "@/hooks/useData";
import useGenre, { Genre } from "@/hooks/useGenre";
import getCroppedImage from "@/services/crop-image";
import { HStack, Image, List, Text } from "@chakra-ui/react";
import React from "react";

function GenreList() {
  const { data } = useGenre();
  return (
    <List.Root unstyled={true}>
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY={2}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImage(genre.image_background)}
            ></Image>
            <Text fontSize={"lg"}>{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
}

export default GenreList;
