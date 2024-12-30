import React from "react";
import "./Home.css";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';


function Home() {
  return (
    <div className="home">
      <Parallax pages={2} style={{ top: "0", left: "0" }} className="animation">
        {/* Background Layer */}
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="animation_layer parallax" id="artback1"></div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Home;
