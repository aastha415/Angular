
class Point1{
    x:number;
    y:number;

    draw(){
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

    getDistance(another: Point) {
        // ...
    }
}

let point = new Point1();
point.x =1;
point.y =2;
point.draw();