import PlatformIconList from "@/components/PlatformIconList/PlatformIconList";
import { Game } from "@/hooks/useGames";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
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
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
        </Card.Body>
      </Card.Root>
    </>
  );
}

export default GameCard;
