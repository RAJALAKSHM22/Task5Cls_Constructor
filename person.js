
console.log("PERSON DETAILS:");

class Person{
    constructor(Fname,Lname,year,age,gender,city,state){
        this.firstName=Fname;
        this.lastName=Lname;
        this.dOb=year;
        this.Age=age;
        this.Gender=gender;
        this.district=city;
        this.native=state;
    }
    getDetails(){
        return(`I'm ${this.firstName} ${this.lastName},
coming from ${this.district}.
Born on ${this.dOb} at ${this.native}.`)
    }
    setArea(town){
        this.district=town;
    }

}

let fst=new Person('Raj','Kumar',1995,28,'male','Cuddlaore','Tamil Nadu');

console.log(fst);
console.log(fst.getDetails());

let snd=new Person('Raji','Raj',1999,23,'female','Cuddlaore','Tamil Nadu');
snd.setArea(mumbai);

console.log(snd);
console.log(snd.getDetails());



