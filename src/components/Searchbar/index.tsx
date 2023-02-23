import { useRef, KeyboardEvent, Dispatch, SetStateAction } from "react";

// A variable to set the number of unique searchvalues => separate variable = easy to change.
const searches: number = 4;

type SearchProps = {
  setSearch: Dispatch<SetStateAction<string>>;
};

export const Searchbar = ({ setSearch }: SearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  let searchArray = JSON.parse(localStorage.getItem("searches")!) || [];

  const handleSearch = () => {
    setSearch(String(inputRef.current?.value.toLowerCase()));

    if (searchArray.length >= searches) {
      searchArray.shift();
    } else {
    }
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()} role="search">
        <label htmlFor="text">
          <input
            type="text"
            autoComplete="off"
            placeholder="Search Product..."
            list="searches"
            ref={inputRef}
          />
        </label>
      </form>
      <button onClick={handleSearch} aria-label="search product">
        search
      </button>
    </div>
  );
};
