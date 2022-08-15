export class Vector2{
    constructor(x=0,y=0){
        this.x = x;
        this.y = y;
    }
    get magnitude(){
        return Math.sqrt(this.x**2+this.y**2);
    }
    get normalize(){
        if(this.magnitude !== 0)
            return new Vector2(this.x/this.magnitude,this.y/this.magnitude)
        else
            return new Vector2()
    }
}