import { HStack, Image } from "@chakra-ui/react";
import logo from "../../../assets/logo.webp";

import SwitchColorMode from "@/components/Switch/SwitchColorMode";
import SearchInput from "@/SearchInput/SearchInput";
interface Props {
  onSearch: (search: string) => void;
}
function NavBar({ onSearch }: Props) {
  return (
    <HStack justifyContent={"space-between"} p="4">
      <Image src={logo} boxSize={"60px"}></Image>
      <SearchInput onGameSearch={onSearch} />
      <SwitchColorMode />
    </HStack>
  );
}

export default NavBar;
