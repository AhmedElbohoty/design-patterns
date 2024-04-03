import SingletonPattern from "src/SingletonPattern/SingletonPattern";
import ProxyPattern from "src/ProxyPattern/ProxyPattern";
import ProviderPattern from "src/ProviderPattern/ProviderPattern";
import PrototypePattern from "src/PrototypePattern/PrototypePattern";
import ContainerPresentationalPattern from "src/ContainerPresentationalPattern/ContainerPresentationalPattern";
import ObserverPattern from "src/ObserverPattern/ObserverPattern";

import "./App.css";

function App() {
  return (
    <>
      <SingletonPattern />

      <ProxyPattern />

      <ProviderPattern />

      <PrototypePattern />

      <ContainerPresentationalPattern />

      <ObserverPattern />
    </>
  );
}

export default App;
