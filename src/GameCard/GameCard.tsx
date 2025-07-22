import CriticScore from "@/components/CriticScore.tsx/CriticScore";
import PlatformIconList from "@/components/PlatformIconList/PlatformIconList";
import { Game } from "@/hooks/useGames";
import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
interface Props {
  game: Game;
}
function GameCard({ game }: Props) {
  return (
    <>
      <Card.Root borderRadius="10px" overflow={"hidden"}>
        <Image src={game.background_image} />
        <Card.Body gap="2">
          <Heading>{game.name}</Heading>
          <HStack justifyContent={"space-between"}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
        </Card.Body>
      </Card.Root>
    </>
  );
}

export default GameCard;
