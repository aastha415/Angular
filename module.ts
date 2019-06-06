
export class Point{
    _y:number; //field

    constructor(private _x?: number, y?: number) {
        this._x = x;
        this._y = y;
    }

    //method
    draw(){
        console.log('X: ' + this._x + ', Y: ' + this._y);
    }

    get x(){
        return this._x;
    }

    set x(value){
        if(value<0)
            throw new Error('Value cannot be less than 0');

        this._x = value;
    }
}