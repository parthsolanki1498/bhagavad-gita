import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated, useScroll } from "@react-spring/web";
import "./App.css";
import TextBlock from "./textBlock";


function App() {
  // Track the scroll position to trigger the zoom effect
  const { scrollYProgress } = useScroll();
  
  // Define the zoom effect based on scroll position
  const zoomStyle = useSpring({
    transform: scrollYProgress.to(
      [0, 0.2, 1], 
      ["scale(1)", "scale(1.1)", "scale(1.5)"]
    ), // Zoom from scale(1) to scale(1.5) as user scrolls
    config: { mass: 1, tension: 30, friction: 50 }, // Make the zoom smooth
  });

  return (
    <div className="App">
      <Parallax pages={2} style={{ top: "0", left: "0" }} className="animation">
        {/* Parallax Layers */}
        <ParallaxLayer offset={0} speed={0.1}>
          <animated.div
            className="animation_layer parallax"
            id="layer6"
            style={zoomStyle} // Apply zoom effect on scroll
          ></animated.div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <animated.div
            className="animation_layer parallax"
            id="layer5"
            style={zoomStyle} // Apply zoom effect on scroll
          ></animated.div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.4}>
          <animated.div
            className="animation_layer parallax"
            id="layer4"
            style={zoomStyle} // Apply zoom effect on scroll
          ></animated.div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.5}>
          <animated.div
            className="animation_layer parallax"
            id="layer2"
            style={zoomStyle} // Apply zoom effect on scroll
          ></animated.div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.8}>
          <animated.div
            className="animation_layer parallax"
            id="layer3"
            style={zoomStyle} // Apply zoom effect on scroll
          ></animated.div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={1}>
          <animated.div
            className="animation_layer parallax"
            id="artback"
            style={zoomStyle} // Apply zoom effect on scroll
          ></animated.div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.25}>
         <TextBlock />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
