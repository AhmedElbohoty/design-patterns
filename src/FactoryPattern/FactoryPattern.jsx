function FactoryPattern() {
  return (
    <div>
      <p>Factory Pattern</p>
      <p>Use a factory function in order to create objects</p>
    </div>
  );
}

function createUser({ firstName, lastName, age }) {
  return {
    firstName,
    lastName,
    age,
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  };
}

createUser({ firstName: "a", lastName: "b", age: 33 });

export default FactoryPattern;
