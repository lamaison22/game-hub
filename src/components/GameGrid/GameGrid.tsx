import GameCard from "@/GameCard/GameCard";
import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCardSkeleton from "../GameCardSkeleton/GameCardSkeleton";

function GameGrid() {
  const { games, error, isLoading } = useGames();
  const skeleton = [1, 2, 3, 4, 5, 6];

  console.log("=== DEBUG ===");
  console.log("isLoading:", isLoading);
  console.log("games.length:", games.length);
  console.log("skeleton será renderizado?", isLoading);
  console.log("===============");

  return (
    <>
      {error && <Text color={"red"}>{error}</Text>}

      {/* Debug visual */}
      {isLoading && (
        <Text color="blue">LOADING... Skeleton deveria aparecer</Text>
      )}
      {!isLoading && <Text color="green">LOADED! Cards deveriam aparecer</Text>}

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} gap={2}>
        {isLoading && skeleton.map((skel) => <GameCardSkeleton key={skel} />)}
        {!isLoading &&
          games.map((game) => <GameCard key={game.id} game={game} />)}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
