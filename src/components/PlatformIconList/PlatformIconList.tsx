import { Platform } from "@/hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  //index signature, com isso cada coisa dentro do array é uma key nao precisando especificar
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
    linux: FaLinux,
    apple: FaApple,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((plat) => {
        const IconComponent = iconMap[plat.slug];
        return IconComponent ? (
          <Icon key={plat.id} as={IconComponent} color={"gray.500"} />
        ) : null;
      })}
    </HStack>
  );
};

export default PlatformIconList;
