import { Vector2 } from "../vector";

export class EnemyClass extends Vector2{
    constructor(transform = {x: 0, y: 0}, size = 24, style={}, model = null, life = 1){
        super(transform.x, transform.y);
        this.size = size;
        this.style = style;
        this.model = model;
        this.life = life;
    }
}

const Enemy = (props) => {
    return <img src={props.enemy.model} alt='' style={{ 
        width: props.enemy.size, 
        height: props.enemy.size,
        position: 'absolute',
        left: props.enemy.x - props.enemy.size/2,
        top: props.enemy.y - props.enemy.size/2,
    }}/>
};

export default Enemy;