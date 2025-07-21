import GameCard from "@/GameCard/GameCard";
import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";

function GameGrid() {
  const { games, error } = useGames();
  return (
    <>
      {error && <Text color={"red"}>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} gap={2}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
