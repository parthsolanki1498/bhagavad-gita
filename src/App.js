import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Sparkle from 'react-sparkle'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        <Parallax pages={2} style={{top: '0', left: '0'}} class="animation">
          <ParallaxLayer offset={0} speed={0.25}>
            <div class="animation_layer parallax" id="artback"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.5}>
            <div class="animation_layer parallax" id="man1"></div>
          </ParallaxLayer>
        </Parallax>
        {/* <Sparkle /> */}
        <Home/>
      </header>
    </div>
  );
}

export default App;
