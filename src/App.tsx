import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button, HStack } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <HStack>
      <Button colorScheme="blue">Click me</Button>
      <Button>Click me</Button>
    </HStack>
  );
}

export default App;
