import { ButtonWrapper, FilteredButton } from "./style";
import buttonData from "./buttonData.json";
import { Dispatch, SetStateAction, useState } from "react";

type ButtonProps = {
  id: number;
  title: string;
  path: string;
};

type CategoryProps = {
  setCategory: Dispatch<SetStateAction<string>>;
  setSearch: Dispatch<SetStateAction<string>>;
};

export const FilterButtons = ({ setCategory, setSearch }: CategoryProps) => {
  const [isFiltered, setIsFiltered] = useState<SetStateAction<number>>(0);

  const handleClick = (path: string, index: number) => {
    setSearch(`${path}`);
    setIsFiltered(index);
    setCategory(`${path}`);
  };

  return (
    <ButtonWrapper>
      {buttonData.map((btn: ButtonProps, index) => {
        const { id, title, path } = btn;
        return (
          <FilteredButton
            key={id}
            onClick={() => handleClick(path, index)}
            className={`${index === isFiltered && "filtered"}`}
          >
            {title}
          </FilteredButton>
        );
      })}
    </ButtonWrapper>
  );
};
