class Vechicle {
    constructor(make, model, year){
        this.make = make;
        this.model =model;
        this.year = year;
    }
    honk(){
        return "BEEP"
    }
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`
    }

}

class Car extends Vechicle{
    constructor(make, model, year){
        super(make, model,year)
    }
    numWheels(){
        return 4;
    }
}
    
class Motorcycle extends Vechicle{
    constructor(make, model, year){
        super(make, model,year)
    }
    numWheels () {
        console.log (2);
    }
    revEngine(){
        return "VROOM!!!"
    }
}

class Garage{
    constructor(capacity){
        this.capacity = capacity;
        if (this.vechicles > capacity){
            throw new error("Sorry, we're full.");
        }
        this.vechicles = [];
    }
   
    add(vechicle){
        this.vechicles.push(vechicle)

    }

}