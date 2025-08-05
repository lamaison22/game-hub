import CriticScore from "@/components/CriticScore.tsx/CriticScore";
import Emojis from "@/components/Emojis/Emojis";
import PlatformIconList from "@/components/PlatformIconList/PlatformIconList";
import { Game } from "@/hooks/useGames";
import getCroppedImage from "@/services/crop-image";
import { Card, Heading, HStack, Image } from "@chakra-ui/react";
interface Props {
  game: Game;
}
function GameCard({ game }: Props) {
  return (
    <>
      <Card.Root borderRadius="10px" overflow={"hidden"}>
        <Image src={getCroppedImage(game.background_image)} />
        <Card.Body
          gap="2"
          p={3}
          height={"100px"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Heading
            size={"md"}
            overflow={"hidden"}
            textOverflow={"ellipsis"}
            whiteSpace={"nowrap"}
            title={game.name}
          >
            {game.name}
          </Heading>
          <HStack justifyContent={"space-between"}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Emojis rating={game.rating_top} />
        </Card.Body>
      </Card.Root>
    </>
  );
}

export default GameCard;
