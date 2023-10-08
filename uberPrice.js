console.log("UBER PRICE CALCULATION!!:");


class Uber{
    constructor(distance,rate,waitingPeriod){
        this.place=distance;
        this.cost=rate;
        this.hours=waitingPeriod;
    }
    getPrice(){
        let price=(this.place*this.cost)+(6*this.hours);
return(`Distance of your "ride" :"${this.place}".
Charges add for "waiting period" :"${this.hours} minutes"
The amount Charges for your ride :${price}.`)
    }
    setTrip(changeDistance){
        this.place=changeDistance
    }

}

let trip1=new Uber(55,25,30);


console.log(trip1.getPrice());


let trip2=new Uber(90,25,15);
trip2.setTrip(75);


console.log(trip2.getPrice());
