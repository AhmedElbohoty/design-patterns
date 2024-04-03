function CommandPattern() {
  return (
    <div className="pattern">
      <p>Command Pattern</p>
      <p>
        Decouple methods that execute tasks by sending commands to a commander
      </p>
      <p>
        The command pattern allows us to decouple methods from the object that
        executes the operation. It gives you more control if you're dealing with
        commands that have a certain lifespan, or commands that should be queued
        and executed at specific times.
      </p>
      <p>
        The use cases for the command pattern are quite limited, and often adds
        unnecessary boilerplate to an application.
      </p>
    </div>
  );
}

export default CommandPattern;
