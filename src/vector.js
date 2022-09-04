export class Vector2{
    constructor(x=0,y=0){
        this.x = x;
        this.y = y;
    }
    get magnitude(){
        return Math.sqrt(this.x**2+this.y**2);
    }
    dotScalar(b){
        return new Vector2(this.x*b,this.y*b);
    }
    get normalize(){
        if(this.magnitude !== 0)
            return new Vector2(this.x/this.magnitude,this.y/this.magnitude)
        else
            return new Vector2()
    }
    static sum(a, b){
        return new Vector2(a.x+b.x, a.y+b.y);
    }
    static distance(a,b){
        return new Vector2(a.x-b.x,a.y-b.y).magnitude;
    }
}