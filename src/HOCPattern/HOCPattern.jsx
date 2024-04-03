const StyledButton = withStyles(Button);

function HOCPattern() {
  return (
    <div className="pattern">
      <p>HOC Pattern</p>
      <p>
        Pass reusable logic down as props to components throughout your
        application
      </p>

      <StyledButton />
    </div>
  );
}

function withStyles(Component) {
  const Comp = (props) => {
    const style = { background: "red" };
    return <Component style={style} {...props} />;
  };
  return Comp;
}

function Button({ style }) {
  return <button style={style}>Button</button>;
}

export default HOCPattern;
