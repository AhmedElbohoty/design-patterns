// import singletonCounter from "src/SingletonPattern/singletonCounterClass";
import { counter } from "src/SingletonPattern/singletonCounterObj";

import "./style.css";

function SingletonPattern() {
  function onCLickInc() {
    // singletonCounter.increment();
    // console.log(singletonCounter.getCount());

    counter.increment();
    console.log(counter.getCount());
  }

  function onClickDec() {
    // singletonCounter.decrement();
    // console.log(singletonCounter.getCount());

    counter.decrement();
    console.log(counter.getCount());
  }

  return (
    <div className="singleton">
      <div>
        <button onClick={onCLickInc}>Increment</button>

        <button onClick={onClickDec}>Decrement</button>
      </div>
    </div>
  );
}

export default SingletonPattern;
