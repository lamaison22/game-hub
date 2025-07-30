import { Platform } from "@/hooks/useGames";
import usePlatform from "@/hooks/usePlatForm";
import { Button, Menu, Portal } from "@chakra-ui/react";
import React from "react";
interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

function PlatFormSelector({ onSelectPlatform, selectedPlatform }: Props) {
  const { data, isLoading, error } = usePlatform();
  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          {selectedPlatform?.name || "Platforms"}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map((plat) => (
              <Menu.Item
                key={plat.id}
                value={plat.name}
                onClick={() => onSelectPlatform(plat)}
              >
                {" "}
                {plat.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}

export default PlatFormSelector;
