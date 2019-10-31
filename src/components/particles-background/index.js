import React from "react";
import Particles from "react-particles-js";

export const ParticlesBackground = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800
            }
          }
        }
      }}
      className="particles-override"
    />
  );
};
