import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button, Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./components/ui/NavBar/NavBar";
import GameGrid from "./components/GameGrid/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav " "main"`,
        lg: `"nav nav " "aside main"`,
      }}
      p={4}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem area={"aside"} display={{ base: "none", lg: "block" }}>
        Aside
      </GridItem>
      <GridItem area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
