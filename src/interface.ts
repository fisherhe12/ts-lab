interface Human {
   name: string;
  eat(): void;
}

class Asian implements Human {
  name: string;
  eat(): void {
    throw new Error("Method not implemented.");
  }
}

interface Man extends Human {
  run(): void;
}

interface Child {
  cry(): void;
}

interface Boy extends Man, Child {}

let boy: Boy = {
  run: function (): void {
    throw new Error("Function not implemented.");
  },
  name: "",
  eat: function (): void {
    throw new Error("Function not implemented.");
  },
  cry: function (): void {
    throw new Error("Function not implemented.");
  },
};

class Auto {
  protected state = 1;

}

interface AutoInterface extends Auto {}


class Car extends Auto implements AutoInterface{
  constructor(){
    super();
    console.log(this.state);
    
  }
}

let car= new Car();

class Bus extends Auto implements AutoInterface{

}