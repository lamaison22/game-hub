import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button, Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./components/ui/NavBar/NavBar";
import GameGrid from "./components/GameGrid/GameGrid";
import GenreList from "./GenreList/GenreList";
import { Genre } from "./hooks/useGenre";
import PlatFormSelector from "./PlatFormSelector/PlatFormSelector";
import { Platform } from "./hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav " "main"`,
        lg: `"nav nav " "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "minmax(200px , 300px) 1fr",
      }}
      p={4}
    >
      <GridItem area={"nav"}>
        <NavBar />
        <PlatFormSelector
          selectedPlatform={gameQuery.platform}
          onSelectPlatform={(platform) =>
            setGameQuery({ ...gameQuery, platform })
          }
        />
      </GridItem>
      <GridItem
        area={"aside"}
        display={{ base: "none", lg: "block" }}
        paddingX={5}
      >
        <GenreList
          selectedGenre={gameQuery.genre}
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
      </GridItem>
      <GridItem area={"main"}>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
