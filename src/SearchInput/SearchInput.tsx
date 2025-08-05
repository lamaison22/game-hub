import { Input, InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
interface Props {
  onGameSearch: (game: string) => void;
}

const SearchInput = ({ onGameSearch }: Props) => {
  return (
    <InputGroup startElement={<BsSearch />}>
      <Input
        onChange={(e) => onGameSearch(e.target.value)}
        borderRadius={20}
        placeholder="Search Games"
      ></Input>
    </InputGroup>
  );
};

export default SearchInput;
