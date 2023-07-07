abstract class Animal {
  eat() {
    console.log("eat something");
  }
  abstract fight(): void;
}

class Dog extends Animal {
  fight() {
    console.log("fight something");
  }
  static food: string = "bones";
  constructor(public name: string) {
    super();
    this.name = name;
  }
  run(): void {}
}
let dog = new Dog("tik tik");
console.log(Dog.food);
dog.fight();

class Cat extends Animal {
    fight(): void {
        console.log("miao miao");
        
    }
}

let cat = new Cat();

let animals : Animal[] = [dog,cat];

animals.forEach( animal => {
    animal.fight();
});
