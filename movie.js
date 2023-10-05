console.log(" OOPs-CLASS:MOVIE ");

class Movie{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    getPg(){
        return(`[(${this.title},${this.studio},${this.rating='PG'})]`)
    }
}

let firstDay= new Movie("A DAY","Film_Line","R")
console.log("a)",firstDay);


let secondDay= new Movie("A DAY","Film Line")
console.log( "b)",secondDay);


let fourthDay= new Movie("Casino Royale","Eon Productions","PG 13")
console.log("d)", fourthDay);


let thirdDay= new Movie(["A DAY","Film-Line"],["A DAY","FilmLine"],["Casino Royale","Eon Productions","PG-13"]  )
console.log("c)",thirdDay.getPg());

