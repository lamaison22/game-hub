import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

function GameCardSkeleton() {
  console.log("GameCardSkeleton renderizando!");
  return (
    <Card.Root>
      <Skeleton height={"200px"} bg="gray.300" />
      <Card.Body>
        <SkeletonText noOfLines={3} gap="4" />
      </Card.Body>
    </Card.Root>
  );
}

export default GameCardSkeleton;
