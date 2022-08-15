import rocket_svg from './svg-components/rocket.svg';
import bullet_svg from './svg-components/bullet.svg';
import './App.css';
import { useEffect, useState } from 'react';
import ViewPort from './ViewPort';
import {Vector2} from './vector';


function App() {

  const [rocketRotation, setRocketRotation] = useState(90);
  const [bullet,setBullet] = useState([]);

  const GenericalBullet = {
    velocity: new Vector2(),
    position: [0,0],
    size: 10
  };

  const viewport = ViewPort();

  useEffect(() => {
    const interval = setInterval(() => {
      setBullet((l) => {console.log(l); return l.map((e) => {return {...e,position: [e.position[0]+e.velocity.x,e.position[1]+e.velocity.y]}})})
    },100);
    return () => clearInterval(interval);
  },[]);

  const board_style = {
    position: 'absolute',
    width: viewport.vmin * 0.9,
    height: viewport.vmin * 0.9,
    left: (viewport.width - viewport.vmin * 0.9) / 2,
    top: (viewport.height - viewport.vmin * 0.9) / 2
  };

  const Rocket = {
    position: {x: board_style.width/2, y: board_style.height/2},
    size: viewport.vmin * 0.045,
    bullet: {
      spawn: 25
    }
  }

  const rocket_style = {
    position: 'absolute',
    width: Rocket.size,
    height: Rocket.size,
    left: (Rocket.position.x - Rocket.size/2),
    top: (Rocket.position.y - Rocket.size/2)
  };

  const rotation = (e) => {
    setRocketRotation(Math.atan2(e.clientY - (viewport.height - rocket_style.height) / 2, e.clientX - (viewport.width - rocket_style.width) / 2))
  };

  const shot = (e) => {
    let newBullet = {...GenericalBullet};
    newBullet.velocity = new Vector2(e.clientX-Rocket.position.x,e.clientY-Rocket.position.y).normalize;
    newBullet.position = [Rocket.position.x+Rocket.bullet.spawn*Math.cos(rocketRotation),Rocket.position.y+Rocket.bullet.spawn*Math.sin(rocketRotation)];
    setBullet((l) => {return l.concat([newBullet])})
  }
 
  return (
    <div className="App" style={board_style} onMouseMove={rotation} onClick={shot}>
      <img src={rocket_svg} alt='' style={{ ...rocket_style, transform: 'rotate(' + (rocketRotation * (180 / Math.PI) + 90) + 'deg)'}} />
      {bullet.map((e,i) => {return <img src={bullet_svg} style={{position: 'absolute', left: e.position[0] - e.size/2, top: e.position[1] - e.size/2, width: e.size, height: e.size}} alt='' key={i}/>})}
    </div>
  );
}

export default App;
