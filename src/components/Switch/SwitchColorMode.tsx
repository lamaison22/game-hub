import { HStack } from "@chakra-ui/react";
import { Icon, Switch } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useColorMode } from "@/components/ui/color-mode";

function SwitchColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch.Root
        colorPalette="blue"
        size="lg"
        checked={colorMode === "dark"}
        onChange={toggleColorMode}
      >
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb />
          <Switch.Indicator fallback={<Icon as={FaMoon} color="gray.400" />}>
            <Icon as={FaSun} color="yellow.400" />
          </Switch.Indicator>
        </Switch.Control>
        <Switch.Label></Switch.Label>
      </Switch.Root>
    </HStack>
  );
}

export default SwitchColorMode;
