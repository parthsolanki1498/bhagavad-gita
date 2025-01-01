import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import TextBlock from './textBlock';
import './App.css';

function App(){
  return (
    <div className="App">
      <Parallax pages={2} style={{ top: "0", left: "0" }} class="animation">
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="animation_layer parallax" id="artback">

          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.7}>
          <div className="animation_layer parallax" id="whitepalacegreenary">

          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="animation_layer parallax" id="whitepalace">

          </div>
        </ParallaxLayer>
        
      </Parallax>
    </div>
  );
}

export default App;