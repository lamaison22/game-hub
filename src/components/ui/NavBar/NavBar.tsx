import { HStack, Icon, Image, Text, Theme } from "@chakra-ui/react";
import logo from "../../../assets/logo.webp";

import SwitchColorMode from "@/components/Switch/SwitchColorMode";
function NavBar() {
  return (
    <HStack justifyContent={"space-between"} p="4">
      <Image src={logo} boxSize={"60px"}></Image>
      <Text>Navzera</Text>
      <SwitchColorMode />
    </HStack>
  );
}

export default NavBar;
