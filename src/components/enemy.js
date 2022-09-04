import { Vector2 } from "../vector";
import "./enemy.css";

export class EnemyClass extends Vector2 {
    constructor(transform = { x: 0, y: 0 }, size = 24, style = {}, model = null, life = 2,rotatespeed=10,action=()=>{}) {
        super(transform.x, transform.y);
        this.size = size;
        this.style = style;
        this.model = model;
        this.life = life;
        this.score = life;
        this.rotatespeed = rotatespeed;
        this.action = action;
    }
}

const Meteor = (props) => {
    const scaleLife = [1,1.5,2];
    return <div style={{
        position: 'absolute',
        left: props.enemy.x - props.enemy.size*scaleLife[props.enemy.life-1] / 2,
        top: props.enemy.y - props.enemy.size*scaleLife[props.enemy.life-1] / 2
    }}>
        <img src={props.enemy.model} className='imgMeteor' alt='' style={{
            width: props.enemy.size*scaleLife[props.enemy.life-1],
            height: props.enemy.size*scaleLife[props.enemy.life-1],
            animationDuration: props.enemy.rotatespeed+'s'
        }} />
    </div>
};

export default Meteor;