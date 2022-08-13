import rocket_svg from './svg-components/rocket.svg';
import './App.css';
import { useState } from 'react';
import ViewPort from './ViewPort';

function App() {

  const [rocketRotation, setRocketRotation] = useState(90);

  const viewport = ViewPort();

  const board_style = {
    position: 'absolute',
    width: viewport.vmin * 0.9,
    height: viewport.vmin * 0.9,
    left: (viewport.width - viewport.vmin * 0.9) / 2,
    top: (viewport.height - viewport.vmin * 0.9) / 2
  };

  const rocket_size = viewport.vmin * 0.045;

  const rocket_style = {
    position: 'absolute',
    width: rocket_size,
    height: rocket_size,
    left: (board_style.width - rocket_size) / 2,
    top: (board_style.height - rocket_size) / 2
  };

  const rotation = (e) => {
    setRocketRotation(Math.atan2(e.clientY - (viewport.height - rocket_style.height) / 2, e.clientX - (viewport.width - rocket_style.width) / 2) * (180 / Math.PI) + 90)
  };

  const shot = (e) => {
    
  }

  return (
    <div className="App" style={board_style} onMouseMove={rotation} onClick={shot}>
      <img src={rocket_svg} alt='' style={{ ...rocket_style, transform: 'rotate(' + rocketRotation + 'deg)' }} />
    </div>
  );
}

export default App;
