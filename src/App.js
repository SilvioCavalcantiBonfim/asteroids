import rocket_svg from './svg-components/rocket.svg';
import bullet_svg from './svg-components/bullet.svg';
import './App.css';
import { useState } from 'react';
import ViewPort from './ViewPort';

function App() {

  const [rocketRotation, setRocketRotation] = useState(90);
  const [bullet,setBullet] = useState([]);

  const GenericalBullet = {
    velocity: [0,0],
    position: [0,0],
    size: 10
  };

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
    let newBullet = {...GenericalBullet};
    newBullet.position = [e.clientX,e.clientY];
    setBullet((l) => {return bullet.concat([newBullet])})
    console.log(bullet)
  }

  return (
    <div className="App" style={board_style} onMouseMove={rotation} onClick={shot}>
      <img src={rocket_svg} alt='' style={{ ...rocket_style, transform: 'rotate(' + rocketRotation + 'deg)' }} />
      {bullet.map((e,i) => {return <img src={bullet_svg} style={{position: 'absolute', left: e.position[0] - board_style.left - e.size, top: e.position[1] - board_style.top - e.size, width: e.size, height: e.size}} alt='' key={i}/>})}
    </div>
  );
}

export default App;
