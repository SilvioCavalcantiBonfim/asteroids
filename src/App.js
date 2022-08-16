import bullet_svg from './svg-components/bullet.svg';
import rocket_svg from './svg-components/rocket.svg';
import './App.css';
import { useEffect, useState } from 'react';
import ViewPort from './ViewPort';
import {Vector2} from './vector';
import Rocket, {RocketClass, GenericalBullet} from './components/rocket';

function App() {
  const window = ViewPort();
  
  const rocket = new RocketClass({position: {x: window.width/2,y:window.height/2}, rotate:0},window.vmin*0.05, {}, {spawn: 15});
  
  const [rocketRotation, setRocketRotation] = useState(90);
  
  const [bullet,setBullet] = useState([]);

  rocket.model = rocket_svg;
  useEffect(() => {
    const interval = setInterval(() => {
      setBullet((l) => {
        return l.map((e) => {
          return {...e,position: [e.position[0]+e.velocity.x,e.position[1]+e.velocity.y]}
        }).filter((e) => {
          return e.position[0] > 0 && e.position[0] < window.width && e.position[1] > 0 && e.position[1] < window.height}
        )});
    },10);
    return () => clearInterval(interval);
  },[window]);

  const rotation = (e) => {
    setRocketRotation(Math.atan2(e.clientY - (window.height - rocket.size) / 2, e.clientX - (window.width - rocket.size) / 2))
  };

  const shot = (e) => {
    let newBullet = {...GenericalBullet};
    const v = new Vector2(e.clientX-rocket.transform.position.x,e.clientY-rocket.transform.position.y);
    newBullet.velocity = new Vector2(2*v.x/v.magnitude,2*v.y/v.magnitude);
    newBullet.position = [rocket.transform.position.x+ rocket.bullet.spawn*Math.cos(rocketRotation),rocket.transform.position.y+rocket.bullet.spawn*Math.sin(rocketRotation)];
    setBullet((l) => {return l.concat([newBullet])});
  }

  return (
    <div className="App"  style={{width: window.width, height: window.height}} onMouseMove={rotation} onClick={shot}>
      <Rocket rocket={rocket} rotate={rocketRotation}/>
      {bullet.map((e,i) => {return <img src={bullet_svg} style={{position: 'absolute', left: e.position[0] - e.size/2, top: e.position[1] - e.size/2, width: e.size, height: e.size}} alt='' key={i}/>})}
    </div>
  );
}

export default App;
