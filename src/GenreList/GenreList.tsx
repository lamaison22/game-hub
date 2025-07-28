import useGenre, { Genre } from "@/hooks/useGenre";
import getCroppedImage from "@/services/crop-image";
import { HStack, Image, List, Spinner, Button } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

function GenreList({ onSelectGenre }: Props) {
  const { data, isLoading, error } = useGenre();
  if (error) return null;
  if (isLoading) return <Spinner />;
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
            <Button
              variant="ghost"
              fontSize={"lg"}
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
}

export default GenreList;
