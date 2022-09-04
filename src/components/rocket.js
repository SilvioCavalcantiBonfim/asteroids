import { Vector2 } from '../vector';
import bulletdefault_svg from '../svg-components/bullet.svg';

export const GenericalBullet = [{
    velocity: new Vector2(),
    position: new Vector2(),
    size: 10,
    life: 1,
    scaleVelocity: 0.5,
    mash: bulletdefault_svg,
    damage: 2,
    describe: {
        title: 'disparo padrão',
        body: 'disparo padrão usado pelas naves da terra.'
    }
},
{
    velocity: new Vector2(),
    position: new Vector2(),
    size: 5,
    life: 1,
    scaleVelocity: 1,
    mash: bulletdefault_svg,
    damage: 1,
    describe: {
        title: 'disparo rapido',
        body: 'disparo rapido usado pelas naves da terra.'
    }
},
{
    velocity: new Vector2(),
    position: new Vector2(),
    size: 20,
    life: 1,
    scaleVelocity: 0.25,
    mash: bulletdefault_svg,
    damage: 2,
    describe: {
        title: 'disparo grande',
        body: 'disparo grande usado pelas naves da terra.'
    }
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
        <img src={props.bullet.mash} style={{ width: props.bullet.size, height: props.bullet.size }} alt='' />
    </div>
}
