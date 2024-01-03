
import './App.css';

import {useState,useEffect} from 'react';

function App() {

const [windowWidth, setWindowWidth] = useState(window.innerWidth);
const [windowHeight, setWindowHeight] = useState(window.innerHeight);

//useState hook use
const setWindowDimensions = () => {
  setWindowWidth(window.innerWidth)
  setWindowHeight(window.innerHeight)
}

//useEffect hook use
useEffect(() => {
  window.addEventListener('resize', setWindowDimensions);
  return () => {
    window.removeEventListener('resize', setWindowDimensions)
  }
}, []);


return(
  <div>
    Width: <input type='number' value={windowWidth}></input>

    Height: <input type='number' value={windowHeight}></input>
    </div>
 )
}


export default App;
