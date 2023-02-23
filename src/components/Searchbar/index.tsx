import { useRef, KeyboardEvent, Dispatch, SetStateAction } from "react";
import { FaTimes } from "react-icons/fa";
import { SearchSection, Label } from "./style";

// A variable to set the number of unique searchvalues => separate variable = easy to change.
const searches: number = 4;

type SearchProps = {
  setSearch: Dispatch<SetStateAction<string>>;
};

export const Searchbar = ({ setSearch }: SearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  let searchArray = JSON.parse(localStorage.getItem("searches")!) || [];

  const searchedArray = () => {
    let uniqueArr = new Set(searchArray);
    uniqueArr.add(String(inputRef.current?.value));
    const toArr = Array.from(uniqueArr);
    localStorage.setItem("searches", JSON.stringify(toArr));
  };

  const handleSearch = () => {
    setSearch(String(inputRef.current?.value.toLowerCase()));

    if (searchArray.length >= searches) {
      searchArray.shift();
      searchedArray();
    } else {
      searchedArray();
    }
  };

  const onEnter = (e: KeyboardEvent): void => {
    e.key == "Enter" ? handleSearch() : null;
  };

  const handleClear = () => {
    setSearch(String(""));
    if (inputRef?.current?.value != null) {
      inputRef.current.value = "";
    }
  };

  return (
    <SearchSection>
      <div>
        <form onSubmit={(e) => e.preventDefault()} role="search">
          <Label htmlFor="text">
            <input
              type="text"
              autoComplete="off"
              placeholder="Search Product..."
              list="searches"
              ref={inputRef}
              onKeyDown={onEnter}
            />
            <datalist id="searches">
              {searchArray.map((item: string, idx: number) => {
                return (
                  <option id="option" key={idx}>
                    {item}
                  </option>
                );
              })}
            </datalist>
          </Label>
        </form>
        <button
          className="clear"
          onClick={() => handleClear()}
          aria-label="clear searchbar"
        >
          <FaTimes />
        </button>
      </div>
      <button onClick={handleSearch} aria-label="search product">
        search
      </button>
    </SearchSection>
  );
};
