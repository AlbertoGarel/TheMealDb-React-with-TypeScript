import { useContext } from "react";
import logo from "../../assets/img/logo-small.png";
import robot from "../../assets/img/robot_api_header.png";
import { AppCont } from "../../App";

import big_burger from "../../assets/img/header/hamburguesa_big.png";
import med_burger from "../../assets/img/header/hamburguesa_medium.png";
import small_burger from "../../assets/img/header/hamburguesa_small.png";
import patron from '../../assets/img/header/patron_comida_small.png';

import "./Header.scss";
import SearchBar from "../searchBar/SearchBar";

const images: { large: any; medium: any; small: any } = {
  large: `url(${big_burger})`,
  medium: `url(${med_burger})`,
  small: `url(${small_burger})`,
};

interface HeaderProps {
  handlerSearchValue: (param: number | string) => void;
}

interface StyleTypes{
  backgroundImage: string[]
  backgroundRepeat: string[]
  backgroundPosition: string
  backgroundSize: number
}

export default function Header({ handlerSearchValue }: HeaderProps) {
  const { breakpoint, deviceType } = useContext(AppCont);

  const styleBackground: StyleTypes = {
    // @ts-ignore
    backgroundImage: [images[deviceType], `url("${patron}")`],
    backgroundRepeat: ["no-repeat", 'repeat'],
    backgroundPosition: "right bottom",
    backgroundSize: breakpoint / 2,
  };

  return (
    <header
      className="header"
      // @ts-ignored
      style={{
        ...styleBackground,
        height: deviceType === "small" ? "50vh" : "100vh",
      }}
    >
      <nav>
        <div
          id="container-logo"
          style={{ width: deviceType === "small" ? "100%" : "30%" }}
        >
          <img src={logo} alt="Logo TheMealDb" id="header-logo" />
          <img src={robot} alt="Api word with robot" id="header-robot" />
        </div>
        <div
          id="container-search"
          style={{ width: deviceType === "small" ? "100%" : "60%" }}
        >
          <SearchBar handlerSearchValue={handlerSearchValue} />
        </div>
      </nav>
      <div id="title">
        <h1>Cómete la vida...</h1>
      </div>
      <div className="velo"/>
    </header>
  );
}
