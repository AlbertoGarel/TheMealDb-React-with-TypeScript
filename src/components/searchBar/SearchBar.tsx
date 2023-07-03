import "./SearchBar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface SearchBarProps {
  handlerSearchValue: (param: string | number) => void;
}


export default function SearchBar({ handlerSearchValue }: SearchBarProps) {
  return (
    <label htmlFor="search">
      <FontAwesomeIcon icon={faSearch} id="icon-search"/>
      <input
        id="search"
        type="text"
        onChange={(e) => handlerSearchValue(e.target.value)}
      ></input>
    </label>
  );
}
