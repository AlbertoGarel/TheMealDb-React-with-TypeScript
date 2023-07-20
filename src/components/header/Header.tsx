import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo-small.png";
import robot from "../../assets/img/robot_api_header.png";
import { AppCont } from "../../App";
import { DeviceSize } from "../../types/breackpoints.d";

import big_burger from "../../assets/img/header/hamburguesa_big.png";
import med_burger from "../../assets/img/header/hamburguesa_medium.png";
import small_burger from "../../assets/img/header/hamburguesa_small.png";
import patron from "../../assets/img/header/patron_comida_small.png";

import "./Header.scss";
import SearchBar from "../searchBar/SearchBar";
import CustomSelector from "../customSelector/CustomSelector";

const images: { large: string; medium: string; small: string } = {
  large: `url(${big_burger})`,
  medium: `url(${med_burger})`,
  small: `url(${small_burger})`,
};

interface HeaderProps {
  handlerSearchValue: (param: string) => void;
  headerSettings: { isHidden: boolean; height: string };
  handlerSelectedTheme: (param: string) => void;
  themeSelected: string;
}

export default function Header({
  handlerSearchValue,
  headerSettings,
  handlerSelectedTheme,
  themeSelected,
}: HeaderProps) {
  const navigate = useNavigate();
  const { breakpoint, deviceType } = useContext(AppCont);
  const { isHidden, height } = headerSettings;
  const styleBackground: { [key: string]: string | number | {} | string[] } = {
    backgroundImage: [images[deviceType as DeviceSize], `url("${patron}")`],
    backgroundRepeat: ["no-repeat", "repeat"],
    backgroundPosition: "right bottom",
    backgroundSize: breakpoint / 2,
  };

  return (
    <header
      data-testid="header"
      className="header"
      style={{
        ...styleBackground,
        height:
          height === "auto"
            ? "auto"
            : deviceType === "small"
            ? "50vh"
            : "100vh",
        display: isHidden ? "none" : "visible",
      }}
    >
      <nav>
        <div
          id="container-logo"
          style={{ width: deviceType === "small" ? "100%" : "30%" }}
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="Logo TheMealDb" id="header-logo" />
          <img src={robot} alt="Api word with robot" id="header-robot" />
        </div>
        <div
          id="container-search"
          style={{
            width: deviceType === "small" ? "100%" : "60%",
            marginBottom: deviceType === "small" ? "5px" : "0px",
          }}
        >
          <CustomSelector
            handlerSelectedTheme={handlerSelectedTheme}
            themeSelected={themeSelected}
          />
          <SearchBar handlerSearchValue={handlerSearchValue} />
        </div>
      </nav>
      <div id="title">
        <h1>Delicious meals for you...</h1>
      </div>
      <div className="velo" />
    </header>
  );
}
