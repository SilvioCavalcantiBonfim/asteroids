import { Vector2 } from '../vector';
import bulletdefault_svg from '../svg-components/bulletdefault.svg';
import bullet1_svg from '../svg-components/bullet1.svg';
import bullet2_svg from '../svg-components/bullet2.svg';

export const GenericalBullet = [{
    velocity: new Vector2(),
    position: new Vector2(),
    size: 15,
    life: 1,
    scaleVelocity: 0.5,
    mash: bulletdefault_svg,
    damage: 2
},
{
    velocity: new Vector2(),
    position: new Vector2(),
    size: 15,
    life: 1,
    scaleVelocity: 1,
    mash: bullet1_svg,
    damage: 1
},
{
    velocity: new Vector2(),
    position: new Vector2(),
    size: 20,
    life: 1,
    scaleVelocity: 0.35,
    mash: bullet2_svg,
    damage: 3
}];


export class RocketClass {
    constructor(position = { x: 0, y: 0 }, size = 24, style = {}, bullet = { spawn: 10 }, model = null) {
        this.position = new Vector2(position.x, position.y);
        this.size = size;
        this.style = style;
        this.bullet = bullet;
        this.model = model;
    }
};
export const Rocket = (props) => {
    return <img src={props.rocket.model} alt='' style={{
        ...props.rocket.style,
        position: 'absolute',
        width: props.rocket.size,
        height: props.rocket.size,
        top: props.rocket.position.y - (props.rocket.size) / 2,
        left: props.rocket.position.x - (props.rocket.size) / 2,
        transform: "rotate(" + (props.rotate * (180 / Math.PI) + 90) + "DEG)",
        opacity: props.state,
        transition: 'opacity 1s',
    }} />
};

export const BulletDrawn = (props) => {
    return <div style={{
        position: 'absolute',
        left: props.bullet.position.x - props.bullet.size / 2,
        top: props.bullet.position.y - props.bullet.size / 2
    }}>
        <img src={props.bullet.mash} className="bullet" style={{ width: props.bullet.size, height: props.bullet.size }} alt='' />
    </div>
}
