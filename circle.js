console.log(" OOPs-class:CIRCLE");

class Circle{
    constructor(val,stng){
        this.radius=val;
        this.color=stng;
       
    }
    getRadius(){
        return (`Radius of the Circle : ${this.radius}`);

    }
    setRadius(rad){
        let radius=rad;

    }
    getColor(){
        return (`Color of the Circle : ${this.color}`);

    }
    setColor(col){
        let color=col;

    }
    getArea(){
        let area= 3.141*(this.radius*this.radius);
        return (`Area of the Circle : ${area}`);

    }
    getCircumfrance(){
        let circumfrance=2*3.141*(this.radius);
        return (`Circumfrance of the Circle : ${circumfrance}`);

    }

}


let radi=new Circle(1.5,"red");

console.log(radi);
console.log(radi.getRadius());
console.log(radi.getColor());
console.log(radi.getArea());
console.log(radi.getCircumfrance());


let radi1=new Circle(2.8,"violet");
radi1.setRadius(3.5);
radi1.setColor("Purple");

console.log(radi1);
console.log(radi1.getRadius());
console.log(radi1.getColor());
console.log(radi1.getArea());
console.log(radi1.getCircumfrance());

