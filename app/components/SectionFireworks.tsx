import { Fireworks, useFireworks } from "fireworks-js/dist/react";
import * as React from "react";

export const SectionFireworks = () => {
  // Hooks
  const { enabled, options, setEnabled } = useFireworks({
    initialStart: false,
    initialOptions: {
      intensity: 0,
      hue: {
        min: 0,
        max: 345
      },
      delay: {
        min: 15,
        max: 15
      },
      traceSpeed: 10,
      rocketsPoint: {
        max: 2,
        min: 2
      },
      acceleration: 1.2,
      friction: 0.96,
      gravity: 1,
      particles: 150,
      trace: 13,
      explosion: 3,
      autoresize: true,
      brightness: {
        min: 50,
        max: 80,
        decay: {
          min: 0.015,
          max: 0.03
        }
      },
      boundaries: {
        visible: process.env.NODE_ENV !== "production"
      },
      sound: {
        enabled: false,
        files: [
          "https://fireworks.js.org/sounds/explosion0.mp3",
          "https://fireworks.js.org/sounds/explosion1.mp3",
          "https://fireworks.js.org/sounds/explosion2.mp3"
        ],
        volume: {
          min: 1,
          max: 2
        }
      },
      mouse: {
        click: true,
        move: true,
        max: 1
      }
    }
  });

  // Setup
  const style: React.CSSProperties = {
    bottom: 0,
    inset: 0,
    height: "100%",
    left: 0,
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 1
  };

  // Life Cycle
  React.useEffect(() => {
    setEnabled(true);
  }, []);

  return (
    <Fireworks
      className="hidden md:block"
      style={style}
      enabled={enabled}
      options={options}
    />
  );
};

export default SectionFireworks;
