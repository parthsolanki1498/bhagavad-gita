"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import TextBlock from "./textBlock";
import "./App.css";

import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";

function App() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <div className="App">
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={ZoomInScrollOut}>
            <span></span>
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={ZoomInScrollOut}>
            <span style={{ fontSize: "40px" }}>BHAGWAD GITA</span>
          </Animator>
        </ScrollPage>
        </ScrollContainer>
        <Parallax pages={2} style={{ top: "0", left: "0" }} class="animation">
          <ParallaxLayer offset={0} speed={0.3}>
            <div className="animation_layer parallax" id="layer5"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.4}>
            <div className="animation_layer parallax" id="layer4"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.5}>
            <div className="animation_layer parallax" id="layer2"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.8}>
            <div className="animation_layer parallax" id="layer3"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={1}>
            <div className="animation_layer parallax" id="artback"></div>
          </ParallaxLayer>
        </Parallax>
    </div>
  );
}

export default App;
