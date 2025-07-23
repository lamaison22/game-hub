import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

function GameCardSkeleton() {
  console.log("GameCardSkeleton renderizando!");
  return (
    <Card.Root borderWidth="2px" borderColor="red.500">
      {" "}
      {/* Debug visual */}
      <Skeleton height={"200px"} bg="gray.300" />
      <Card.Body>
        <SkeletonText noOfLines={3} gap="4" />
      </Card.Body>
    </Card.Root>
  );
}

export default GameCardSkeleton;
