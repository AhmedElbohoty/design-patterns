function RenderPropsPattern() {
  return (
    <div className="pattern">
      <p>Render Props Pattern</p>
      <p>Pass JSX elements to components through props</p>

      <Title render={() => <h3>Prop</h3>} />
      <SubTitle render={(text) => <h2>{text}</h2>} />
    </div>
  );
}

function Title({ render }) {
  return render();
}

function SubTitle({ render }) {
  return render("Sub title 1");
}

export default RenderPropsPattern;
