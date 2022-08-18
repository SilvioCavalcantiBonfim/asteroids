import { Vector2 } from '../vector';

export const GenericalBullet = {
    velocity: new Vector2(),
    position: [0, 0],
    size: 10
};


export class RocketClass {
    constructor(transform = { position: { x: 0, y: 0 } }, size = 24, style = {}, bullet = { spawn: 10 }, model = null) {
        this.transform = transform;
        this.size = size;
        this.style = style;
        this.bullet = bullet;
        this.model = model;
    }
};
const Rocket = (props) => {
    //0 - top
    //1 - left
    return <img src={props.rocket.model} alt='' style={{
        ...props.rocket.style,
        position: 'absolute',
        width: props.rocket.size,
        height: props.rocket.size,
        top: (!props.state)? props.StartPosition[0] :props.rocket.transform.position.y - (props.rocket.size) / 2,
        left: (!props.state) ? props.StartPosition[1] : props.rocket.transform.position.x - (props.rocket.size) / 2,
        transform: "rotate(" + (props.rotate * (180 / Math.PI) + 90) + "DEG)",
        transition: 'left 3s, top 3s',
    }} />
};

export default Rocket;
