import "./SearchBar.scss";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface SearchBarProps {
  handlerSearchValue: (param: string) => void;
}

export default function SearchBar({ handlerSearchValue }: SearchBarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <label htmlFor="search">
      <FontAwesomeIcon icon={faSearch} id="icon-search" />
      <input
        id="search"
        type="text"
        onChange={(e) => {
          handlerSearchValue(e.target.value);
          // prevent re-render when change value
          if (e.target.value.length && location.pathname !== "/search") {
            navigate("/search");
          }
        }}
      ></input>
    </label>
  );
}
