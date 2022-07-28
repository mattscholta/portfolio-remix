import * as React from "react";
import { fireworks } from "~/esm-modules";

export const SectionFireworks = () => {
  // Hooks
  const [Component, setComponent] = React.useState<any>();
  const [loaded, setLoaded] = React.useState(false);

  // Life Cycle
  React.useEffect(() => {
    fireworks().then((module) => {
      setComponent(module);
      setLoaded(true);
    });
  }, []);

  // 🔌 Short Circuit
  if (!loaded) return null;

  return (
    <Component.Fireworks
      options={{
        autoresize: true,
        boundaries: {
          visible: process.env.NODE_ENV !== "production"
        },
        intensity: 0,
        mouse: {
          click: true
        }
      }}
      style={{
        bottom: 0,
        cursor: "crosshair",
        inset: 0,
        height: "100%",
        left: 0,
        position: "absolute",
        top: 0,
        right: 0,
        zIndex: 1
      }}
    />
  );
};

export default SectionFireworks;
