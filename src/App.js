import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Parallax pages={2} style={{ top: '0', left: '0' }} className="animation">
          {/* Background Layer */}
          <ParallaxLayer offset={0} speed={0.25}>
            <div className="animation_layer parallax" id="artback"></div>
          </ParallaxLayer>

          {/* Foreground Layer */}
          <ParallaxLayer offset={0} speed={0.5}>
            <div className="animation_layer parallax" id="man1"></div>
          </ParallaxLayer>

          {/* Sticky Text Block */}
          <ParallaxLayer
            sticky={{ start: 0, end: 1 }} // Stick from page 0 to 1
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <div id="textblock">
              <div id="textblock-container">
                <div id="textblock-title">Welcome to Gita</div>
              </div>
            </div>
          </ParallaxLayer>

          {/* Home Page */}
          <ParallaxLayer offset={2} speed={0.5}>
            <div className="home">
              <Home />
            </div>
          </ParallaxLayer>
        </Parallax>
      </header>
    </div>
  );
}

export default App;
