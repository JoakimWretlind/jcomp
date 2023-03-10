import {
  useRef,
  KeyboardEvent,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { Button, Dropdown, Form, SearchContainer } from "./style";
import { BiSearch } from "react-icons/bi";
import { FilterButtons } from "../FilterButtons";

// A variable to set the number of unique searchvalues => separate variable = easy to change.
const searches: number = 4;

type SearchProps = {
  setSearch: Dispatch<SetStateAction<string>>;
};

const Searchbar = ({ setSearch }: SearchProps) => {
  const [category, setCategory] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  let searchArray = JSON.parse(localStorage.getItem("searches")!) || [];

  // Handle the array of previous searches
  const searchedArray = () => {
    let uniqueArr = new Set(searchArray);
    uniqueArr.add(String(inputRef.current?.value));
    const toArr = Array.from(uniqueArr);
    localStorage.setItem("searches", JSON.stringify(toArr));
  };

  // Handle search when search-button is used
  const handleSearch = () => {
    setSearch(String(inputRef.current?.value.toLowerCase()));

    if (searchArray.length >= searches) {
      searchArray.shift();
      searchedArray();
    } else {
      searchedArray();
    }
  };

  // Handle search when enter-key is used
  const onEnter = (e: KeyboardEvent): void => {
    e.key == "Enter" ? handleSearch() : null;
  };

  return (
    <>
      <SearchContainer>
        <Form onSubmit={(e) => e.preventDefault()} role="search">
          <label htmlFor="text">
            <input
              type="search"
              autoComplete="off"
              placeholder="Search Product..."
              list="searches"
              ref={inputRef}
              onKeyDown={onEnter}
              defaultValue={category}
            />
          </label>
          <Dropdown>
            {searchArray.map((search: string, idx: number) => {
              return (
                <li
                  key={idx}
                  onClick={() => setSearch(`${search}`.toLowerCase())}
                  aria-label={`filter ${search}`}
                >
                  {search}
                </li>
              );
            })}
          </Dropdown>
        </Form>
        <Button
          onClick={handleSearch}
          aria-label="search product"
          className="search"
        >
          <BiSearch />
        </Button>
      </SearchContainer>
      <FilterButtons setCategory={setCategory} setSearch={setSearch} />
    </>
  );
};

export default Searchbar;
