import { useContext } from "react";
import logo from "../../assets/img/logo-small.png";
import robot from "../../assets/img/robot_api_header.png";
import { AppCont } from "../../App";

import big_burger from "../../assets/img/header/hamburguesa_big.png";
import med_burger from "../../assets/img/header/hamburguesa_medium.png";
import small_burger from "../../assets/img/header/hamburguesa_small.png";
<<<<<<< HEAD
=======
import patron from '../../assets/img/header/patron_comida_small.png';
>>>>>>> f849b6981dc41ce65d4493d47f32248404396edb

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

<<<<<<< HEAD
export default function Header({ handlerSearchValue }: HeaderProps) {
  const { breakpoint, deviceType } = useContext(AppCont);

  const styleBackground = {
    // @ts-ignore
    backgroundImage: images[deviceType],
    backgroundRepeat: "no-repeat",
=======
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
>>>>>>> f849b6981dc41ce65d4493d47f32248404396edb
    backgroundPosition: "right bottom",
    backgroundSize: breakpoint / 2,
  };

  return (
    <header
      className="header"
<<<<<<< HEAD
=======
      // @ts-ignored
>>>>>>> f849b6981dc41ce65d4493d47f32248404396edb
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
