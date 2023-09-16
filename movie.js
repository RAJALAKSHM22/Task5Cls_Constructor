console.log(" OOPs-CLASS:MOVIE ");

class Movie{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
        
    }
}

let firstDay= new Movie("A DAY","Film Line","R")

console.log("a)",firstDay);

let secondDay= new Movie("A DAY","Film Line")

console.log( "b)",secondDay);

let thirdDay= new Movie("")

console.log("c)",thirdDay);


let fourthDay= new Movie("Casino Royale","Eon Productions","PG 13")

console.log("d)", fourthDay);

