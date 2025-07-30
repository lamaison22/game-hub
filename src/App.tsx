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

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
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
          selectedPlatform={selectedPlatform}
          onSelectPlatform={(plat) => setSelectedPlatform(plat)}
        />
      </GridItem>
      <GridItem
        area={"aside"}
        display={{ base: "none", lg: "block" }}
        paddingX={5}
      >
        <GenreList
          selectedGenre={selectedGenre}
          onSelectGenre={(genre) => setSelectedGenre(genre)}
        />
      </GridItem>
      <GridItem area={"main"}>
        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
