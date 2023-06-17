import React from "react";
import { Breakpoints, DeviceSize } from "../types/breackpoints.d";

function setDevice(windowWidth: number) {
  let width: DeviceSize = DeviceSize['small'];
  switch (true) {
    case windowWidth <= Breakpoints.Mobile:
      width = DeviceSize['small'];
      break;
    case windowWidth > Breakpoints.Mobile && windowWidth < Breakpoints.Desktop:
      width = DeviceSize['medium'];
      break;
    case windowWidth >= Breakpoints.Desktop:
      width = DeviceSize['large'];
      break;
    default:
      break;
  }
  return width;
}

export default function useWindow() {
  const [windowWidth, setWindowWidth] = React.useState<number>(window.innerWidth);
  const [deviceType, setDeviceType] = React.useState<DeviceSize>(
    setDevice(window.innerWidth)
  );

  React.useEffect(() => {
    function handleResize(breakpoint: number) {
      const device = setDevice(breakpoint);
      setWindowWidth(window.innerWidth);
      setDeviceType(device);
    }

    window.addEventListener("resize", () => handleResize(window.innerWidth));
    return () =>
      window.removeEventListener("resize", () =>
        handleResize(window.innerWidth)
      );
  }, []);

  return { windowWidth, deviceType };
}
