import './App.css';
import bullet_svg from './svg-components/bullet.svg';
import rocket_svg from './svg-components/rocket.svg';
import { useEffect, useState } from 'react';
import { Vector2 } from './vector';
import Rocket, { RocketClass, GenericalBullet } from './components/rocket';
import ViewPort from './ViewPort';
import ScoreBoard from './components/Score';
import Life from './components/Life';
import Title from './components/Title';
import Footer1 from './components/Footer/Footer1';
import Footer2 from './components/Footer/Footer2';

const startFace = Math.floor(Math.random() * 4);
function App() {
  const window = ViewPort();

  const rocket = new RocketClass({ x: window.width / 2, y: window.height / 2 }, window.vmin * 0.05, {}, { spawn: 15 });

  const [rocketRotation, setRocketRotation] = useState(0);

  const [bullet, setBullet] = useState([]);

  const [state, setState] = useState(false);

  // const [enemy, setEnemy] = useState([]);

  rocket.model = rocket_svg;
  
  useEffect(() => {
    const interval = setInterval(() => {
      setBullet((l) => {
        return l.map((e) => {
          return { ...e, position: [e.position[0] + e.velocity.x, e.position[1] + e.velocity.y] }
        }).filter((e) => {
          return e.position[0] > 0 && e.position[0] < window.width && e.position[1] > 0 && e.position[1] < window.height
        }
        )
      });
    }, 10);
    return () => clearInterval(interval);
  }, [window]);

  const rotation = (e) => {
    setRocketRotation(Math.atan2(e.clientY - (window.height - rocket.size) / 2, e.clientX - (window.width - rocket.size) / 2))
  };

  const shot = (e) => {
    let newBullet = { ...GenericalBullet };
    const v = new Vector2(e.clientX - rocket.position.x, e.clientY - rocket.position.y);
    newBullet.velocity = new Vector2(2 * v.x / v.magnitude, 2 * v.y / v.magnitude);
    newBullet.position = [rocket.position.x + rocket.bullet.spawn * Math.cos(rocketRotation), rocket.position.y + rocket.bullet.spawn * Math.sin(rocketRotation)];
    setBullet((l) => { return l.concat([newBullet]) });
  }

  let StartPosition = {x: 0, y: 0};
  switch (startFace) {
    case 0:
      StartPosition.x = Math.random() * window.height;
      StartPosition.y = -rocket.size;
      break;
    case 1:
      StartPosition.x = -rocket.size;
      StartPosition.y = Math.random() * window.width;
      break;
    case 2:
      StartPosition.x = Math.random() * window.height;
      StartPosition.y = window.width + rocket.size;
      break;
    case 3:
      StartPosition.x = window.width + rocket.size;
      StartPosition.y = Math.random() * window.width;
      break;

    default:
      break;
  }
  
  return (
    <div className="App" style={{ width: window.width, height: window.height }} onMouseMove={(!state) ? () => { } : rotation} onClick={(!state) ? () => { } : shot}>
      <Rocket rocket={rocket} StartPosition={StartPosition} rotate={rocketRotation} state={state} window={window} />
      <ScoreBoard score={0} state={state} window={window} />
      <Title submitHandle={(e) => { setState((l) => { return !l }) }} state={state} window={window} />
      <Life life={3} state={state} window={window} />
      {bullet.map((e, i) => { return <img src={bullet_svg} style={{ position: 'absolute', left: e.position[0] - e.size / 2, top: e.position[1] - e.size / 2, width: e.size, height: e.size }} alt='' key={i} /> })}
      <Footer1 state={state}/>
      <Footer2 state={state}/>
    </div>
  );
}

export default App;
