import Container from "src/ContainerPresentationalPattern/Container";
import Presentational from "src/ContainerPresentationalPattern/Presentational";

function ContainerPresentationalPattern() {
  return (
    <div className="pattern">
      <p>ContainerPresentationalPattern</p>
      <p>
        Enforce separation of concerns by separating the view from the
        application logic
      </p>

      <br />
      <p>
        In many cases, the Container/Presentational pattern can be replaced with
        React Hooks. The introduction of Hooks made it easy for developers to
        add statefulness without needing a container component to provide that
        state.
      </p>
      <br />

      <Container />
      <Presentational />
    </div>
  );
}

export default ContainerPresentationalPattern;
