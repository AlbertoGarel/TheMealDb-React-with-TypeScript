import { useState, useEffect } from "react";
import "./CustomSelector.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faPalette } from "@fortawesome/free-solid-svg-icons";
import { ThemesApp } from "../../types/themes.d";

interface CustomSelectorProps {
  handlerSelectedTheme: (param: string) => void;
  themeSelected: string;
}

export default function CustomSelector({
  handlerSelectedTheme,
  themeSelected,
}: CustomSelectorProps) {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      const target: HTMLElement = event.target as HTMLElement;
      if (!target.closest("#theme-selected")) {
        setVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handlerVisible = () => {
    setVisible(!visible);
  };

  return (
    <section id="theme-selector">
      <div id="theme-selected" onClick={handlerVisible}>
        <FontAwesomeIcon icon={faPalette} />
        <span>{themeSelected}</span>
        <span className="square" data-theme={themeSelected}></span>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
      {visible && (
        <div id="theme-list">
          {Object.values(ThemesApp).map((i: string) => {
            return (
              <span
                key={i}
                onClick={() => handlerSelectedTheme(i)}
                data-theme={i}
              >
                {i}
              </span>
            );
          })}
        </div>
      )}
    </section>
  );
}
