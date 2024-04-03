class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return "Wooof!";
  }
}

Dog.prototype.play = () => console.log("Play");

class SuperDog extends Dog {
  constructor(name) {
    super(name);
  }

  fly() {
    console.log("Flying");
  }
}

const dog1 = new SuperDog("Dog 1");
const dog2 = new Dog("Dog 2");

dog1.bark();
dog1.fly();

dog2.bark();

//

const person = { name: "Ahmed" };

const p1 = Object.create(person);

console.log(Object.keys(p1));
console.log(p1.__proto__);
