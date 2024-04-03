const person = {
  name: "Ahmed",
  age: 30,
  country: "Egypt",
};

const handler = {
  get(target, prop) {
    console.log(`The value of ${prop} is ${Reflect.get(target, prop)}`);
  },
  set(target, prop, value) {
    console.log(
      `Changed ${prop} from ${Reflect.get(target, prop)} to ${value}`
    );
    return Reflect.get(target, prop, value);
  },
};

// Exotic object
const personProxy = new Proxy(person, handler);

export { person, personProxy };
