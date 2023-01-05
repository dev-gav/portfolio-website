import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './particlebackground.css'


function ParticleBackground() {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
      }, []);
    
      const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
      }, []);

  return (
    <Particles
      className="particles"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      
      options={{
        "fullScreen":{
            "enable": false,
            "zIndex": -1
        },
        background: {
          color: {
            value: "#192841",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          number:{
            value:130,
            density:{
              enable: true,
              value_area: 1200
            }
          },
          color:{
            value: '#8B939E'
          },
          shape:{
            type: 'circle',
            stroke: {
              width: 0
            },
            polygon:{
              nb_sides: 6
            }
          },
          line_linked: {
            enable: false,
            distance: 150,
            opacity: 0.9,
            width: 1,
            shadow: {
              enable: true,
              color: "#e74c3c",
              blur: 5
            }
          },
          move:{
            enable: true,
            random: true,
            speed: .6,
            attract:{
              rotateX: 600,
              rotateY: 1200
            }
          },
          size: {
            value: 6,
            random: true,
            anim:{
              speed: 40,
              size_min: 0.1
            }
          },
          opacity: {
            value: 0.8,
            anim: {
              speed: 1,
              opacity_min: 0.1
            }
          }
        }
      }}

    />
  )
}

export default ParticleBackground