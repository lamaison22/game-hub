import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button, Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./components/ui/NavBar/NavBar";
import GameGrid from "./components/GameGrid/GameGrid";
import GenreList from "./GenreList/GenreList";
import { Genre } from "./hooks/useGenre";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav " "main"`,
        lg: `"nav nav " "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
      p={4}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem
        area={"aside"}
        display={{ base: "none", lg: "block" }}
        paddingX={5}
      >
        <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
      </GridItem>
      <GridItem area={"main"}>
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
