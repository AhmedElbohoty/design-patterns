import { ToastContainer, toast } from "react-toastify";

import observable from "./observable";

function logger(data) {
  console.log(`${Date.now()} ${data}`);
}

function toastify(data) {
  toast(data, { autoClose: 2000 });
}

observable.subscribe(logger);
observable.subscribe(toastify);

function ObserverPattern() {
  function handleClick() {
    observable.notify("User clicked button!");
  }

  return (
    <div className="pattern">
      <p>Observer Pattern</p>
      <p>Use observables to notify subscribers when an event occurs</p>

      <ul>
        <li>
          subscribe(): a method in order to add observers to the observers list
        </li>
        <li>
          unsubscribe(): a method in order to remove observers from the
          observers list
        </li>
        <li>
          notify(): a method to notify all observers whenever a specific event
          occurs
        </li>
      </ul>

      <br />

      <button onClick={handleClick}>Click me</button>

      <ToastContainer />
    </div>
  );
}

export default ObserverPattern;
