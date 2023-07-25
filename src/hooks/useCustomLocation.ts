import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HeaderConf } from "../types/customLocation.d";

export default function useCustomlocation() {
  const { pathname } = useLocation();
  const [headerConf, setHeaderConf] = useState<HeaderConf>({
    isHidden: false,
    height: "100%",
  });

  useEffect(() => {
    const pathRouter = (param: string): void => {
      switch (true) {
        case "/" === param:
          setHeaderConf({
            ...headerConf,
            isHidden: false,
            height: "100vh",
          });
          break;
        case param.includes("/meal"):
          setHeaderConf({
            ...headerConf,
            isHidden: false,
            height: "auto",
          });
          break;
        case param.includes("/search"):
          setHeaderConf({
            ...headerConf,
            isHidden: false,
            height: "auto",
          });
          break;
        case param.includes("/category"):
          setHeaderConf({
            ...headerConf,
            isHidden: false,
            height: "auto",
          });
          break;
        default:
          setHeaderConf({
            ...headerConf,
            isHidden: true,
            height: "auto",
          });
      }
    };

    pathRouter(pathname);
  }, [pathname]);

  return headerConf;
}
