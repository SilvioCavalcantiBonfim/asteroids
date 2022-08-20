import { Vector2 } from "../vector";

export const genericalEnemy = {

};

export class EnemyClass extends Vector2{
    constructor(transform = {x: 0, y: 0}, size = 24, style={}, model = null, life = 1){
        super(transform);
        this.size = size;
        this.style = style;
        this.model = model;
        this.life = life;
    }
}