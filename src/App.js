import './App.css';
import { useEffect, useState } from 'react';
import rocket_svg from './svg-components/rocket.svg';
import meteor_svg from './svg-components/meteor.svg';
import satellite_svg from './svg-components/satellite.svg';
import life_svg from './svg-components/life.svg';
import enemyBdefault_svg from './svg-components/enemyBulletdefault.svg';
import enemyBullet1_svg from './svg-components/enemyBullet1.svg';
import enemyBullet2_svg from './svg-components/enemyBullet2.svg';
import { Vector2 } from './vector';
import { Rocket, RocketClass, GenericalBullet, BulletDrawn } from './components/rocket';
import ViewPort from './ViewPort';
import ScoreBoard from './components/Score';
import BulletBar from './components/Bullets';
import Title from './components/Title';
import Footer1 from './components/Footer/Footer1';
import Footer2 from './components/Footer/Footer2';
import Meteor, { EnemyClass } from './components/enemy';
import Life from './components/Life';
import { BulletDescription } from './components/BulletDescription';

function App() {

  document.title = "ASTEROIDS";

  const window = ViewPort();

  const rocket = new RocketClass({ x: window.width / 2, y: window.height / 2 }, window.vmin * 0.05, {}, { spawn: 15 }, rocket_svg);

  const [rocketLife, setRocketLife] = useState(4);

  const [rocketRotation, setRocketRotation] = useState(0);

  const [score, setScore] = useState(0);

  const [entity, setEntity] = useState([[], []]);

  // 0 - balas, 1 - pedras

  const [bulletType, setBulletType] = useState(0);

  const [state, setState] = useState(0);

  const [amountBullet, setAmountBullet] = useState(100);

  //processamento do movimento dos inimigos

  //reset de variaveis
  const reset = () => {
    setAmountBullet(100);
    setRocketLife(4);
    setScore(0);
    setBulletType(0);
  };

  //processamento do movimento das balas
  useEffect(() => {
    const interval = setInterval(() => {
      let aux = [];
      if (Number(Math.random()) < 0.001 && entity[1].length < 5 && state === 1) {
        const FaceRandom = Math.floor(Math.random() * 4);
        let positionEnemy = { x: [Math.random() * window.width, 0, Math.random() * window.width, window.width][FaceRandom], y: [0, Math.random() * window.height, window.height, Math.random() * window.height][FaceRandom] };
        if (Number(Math.random()) < 0.01) {
          aux = [
            [new EnemyClass(
              positionEnemy,
              32,
              {},
              life_svg,
              1,
              7 + Math.floor(Math.random() * 5),
              () => {
                setRocketLife((b) => {
                  if (b + 1 > 4)
                    return 4;
                  else
                    return b + 1;
                })
              })
              , new Vector2([0, 1, 0, -1][FaceRandom], [1, 0, -1, 0][FaceRandom]).normalize.dotScalar(1 / 10 + Math.random() * (1 / 5 - 1 / 10))]
          ];
        } else if (Number(Math.random()) < 0.11) {
          aux = [
            [new EnemyClass(
              positionEnemy,
              32,
              {},
              satellite_svg,
              1,
              7 + Math.floor(Math.random() * 5),
              () => {
                setAmountBullet((b) => {
                  if (b + 10 > 100)
                    return 100;
                  else
                    return b + 10;
                })
              })
              , new Vector2([0, 1, 0, -1][FaceRandom], [1, 0, -1, 0][FaceRandom]).normalize.dotScalar(1 / 10 + Math.random() * (1 / 5 - 1 / 10))]
          ];
        } else if (Number(Math.random()) < 0.16) {
          const setBullet = Number(Math.random());
          let bulletCurrent = 0;
          for (let i = 0; i < GenericalBullet.length; i++)
            bulletCurrent += Number(i / GenericalBullet.length <= setBullet);
          aux = [
            [new EnemyClass(
              positionEnemy,
              32,
              {},
              [enemyBdefault_svg, enemyBullet1_svg, enemyBullet2_svg][bulletCurrent - 1],
              1,
              7 + Math.floor(Math.random() * 5),
              () => {
                setBulletType((l) => {
                  if (l === bulletCurrent - 1) {
                    setAmountBullet(100);
                  }
                  return bulletCurrent - 1;
                })
              })
              , new Vector2([0, 1, 0, -1][FaceRandom], [1, 0, -1, 0][FaceRandom]).normalize.dotScalar(1 / 10 + Math.random() * (1 / 5 - 1 / 10))]
          ];
        } else {
          aux = [
            [new EnemyClass(
              positionEnemy,
              32,
              {},
              meteor_svg,
              1 + Math.floor(Math.random() * 3),
              7 + Math.floor(Math.random() * 5),
              () => { })
              , new Vector2(window.width / 2 - positionEnemy.x, window.height / 2 - positionEnemy.y).normalize.dotScalar(1 / 10 + Math.random() * (1 / 5 - 1 / 10))]
          ];
        }
      }
      let aux_ = entity;
      for (let i = 0; i < aux_[0].length; i++) {//bala
        for (let j = 0; j < aux_[1].length; j++) {//inimigo
          if (Vector2.distance(aux_[0][i].position, aux_[1][j][0]) <= aux_[1][j][0].size * [0.25, 0.7, 1.15][aux_[1][j][0].life - 1]) {
            aux_[0][i].life = 0;
            aux_[1][j][0].life -= aux_[0][i].damage;
            if (aux_[1][j][0].life <= 0) {
              setScore((s) => {
                if (s + aux_[1][j][0].score > localStorage.getItem("Score"))
                  localStorage.setItem("Score", s + aux_[1][j][0].score);
                return s + aux_[1][j][0].score; });
              aux_[1][j][0].action();
              aux_[1][j][0].action = () => { };
            }
          }
        }
      }

      setEntity((aa) => {
        let e = aux_;
        return [e[0].map((b) => {
          return { ...b, position: Vector2.sum(b.position, b.velocity) }
        }).filter((b) => {
          return b.position.x > 0 && b.position.x < window.width && b.position.y > 0 && b.position.y < window.height && b.life > 0
        }), e[1].map((enemy) => {
          enemy[0].x += enemy[1].x;
          enemy[0].y += enemy[1].y;
          if (new Vector2(enemy[0].x - window.width / 2, enemy[0].y - window.height / 2).magnitude < enemy[0].size * 0.75 && state !== 0) {
            enemy[0].life = 0;
            setRocketLife((l) => {
              if (l - 1 === 0) {
                setState(0);
                setEntity([[], []]);
              }
              return l - 1;
            });
          }
          return enemy;
        }).filter((enemy) => {
          return enemy[0].x > 0 && enemy[0].x < window.width && enemy[0].y > 0 && enemy[0].y < window.height && enemy[0].life > 0
        }).concat(aux)]
      })
    }, 1);
    return () => clearInterval(interval);
  }, [window, state, entity]);

  //rotação da nave
  const rotation = (e) => {
    setRocketRotation(Math.atan2(e.clientY - window.height / 2, e.clientX - window.width / 2))
  };
  //Mecanica de tiro
  const shot = (e) => {
    if (amountBullet === 0 || entity[0].length >= 7) return;
    let newBullet = { ...GenericalBullet[bulletType] };
    const v = new Vector2(e.clientX - rocket.position.x, e.clientY - rocket.position.y);
    newBullet.velocity = v.normalize.dotScalar(newBullet.scaleVelocity);
    newBullet.position = new Vector2(rocket.position.x + rocket.bullet.spawn * Math.cos(rocketRotation), rocket.position.y + rocket.bullet.spawn * Math.sin(rocketRotation));

    setEntity((e) => [e[0].concat([newBullet]), e[1]]);
    setAmountBullet((l) => { return l - 1 });
  }

  return (
    <div className="App" style={{ width: window.width, height: window.height }} onMouseMove={(!state) ? () => { } : rotation} onClick={(!state) ? () => { } : shot}>
      <Rocket rocket={rocket} rotate={rocketRotation} state={state} window={window} />
      <ScoreBoard score={score} state={state} window={window} />
      <Title submitHandle={(e) => { setState((l) => { reset(); return l + 1; }) }} state={state} window={window} />
      <Life state={state} life={rocketLife} window={window} />
      <BulletBar state={state} window={window} amountBullet={amountBullet} />
      <BulletDescription window={window} bullettype={bulletType} state={state} />
      {entity[0].map((e, i) => { return <BulletDrawn bullet={e} key={i} /> })}
      {entity[1].map((e, i) => { return <Meteor enemy={e[0]} key={i} /> })}
      <Footer1 state={state} />
      <Footer2 state={state} />
    </div>
  );
}

export default App;
