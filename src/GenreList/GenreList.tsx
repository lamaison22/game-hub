import useGenre, { Genre } from "@/hooks/useGenre";
import getCroppedImage from "@/services/crop-image";
import { HStack, Image, List, Spinner, Button, VStack } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({ selectedGenre, onSelectGenre }: Props) {
  const { data, isLoading, error } = useGenre();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List.Root unstyled={true}>
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY={2}>
          <HStack gap={3} width="100%">
            {" "}
            {/* gap ao invés de spacing */}
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImage(genre.image_background)}
              flexShrink={0}
            />
            <Button
              variant="ghost"
              fontSize="lg"
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              justifyContent="flex-start"
              onClick={() => onSelectGenre(genre)}
              flex={1}
              minWidth={0}
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              textAlign="left"
              px={2}
              height="auto"
              minHeight="40px"
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
