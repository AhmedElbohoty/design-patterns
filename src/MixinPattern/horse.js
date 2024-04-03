class Horse {
  constructor(name) {
    this.name = name;
  }
}

// Mixins
const horseFunctions = {
  voice: () => console.log("Voice!"),
  play: () => console.log("Play"),
};

Object.assign(Horse.prototype, horseFunctions);

const horse = new Horse();

horse.play();
