import GameCard from "@/GameCard/GameCard";
import useGames, { Platform } from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCardSkeleton from "../GameCardSkeleton/GameCardSkeleton";
import GameCardContainer from "../GameCardContainer/GameCardContainer";
import { Genre } from "@/hooks/useGenre";
interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}
function GameGrid({ selectedGenre, selectedPlatform }: Props) {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skeleton = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text color={"red"}>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} gap={2}>
        {isLoading &&
          skeleton.map((skel) => (
            <GameCardContainer key={skel}>
              {" "}
              <GameCardSkeleton />{" "}
            </GameCardContainer>
          ))}
        {!isLoading &&
          data.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
