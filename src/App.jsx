import SingletonPattern from "src/SingletonPattern/SingletonPattern";
import ProxyPattern from "src/ProxyPattern/ProxyPattern";
import ProviderPattern from "src/ProviderPattern/ProviderPattern";
import PrototypePattern from "src/PrototypePattern/PrototypePattern";
import ContainerPresentationalPattern from "src/ContainerPresentationalPattern/ContainerPresentationalPattern";
import ObserverPattern from "src/ObserverPattern/ObserverPattern";
import ModulePattern from "src/ModulePattern/ModulePattern";
import MixinPattern from "src/MixinPattern/MixinPattern";
import MediatorMiddlewarePattern from "src/MediatorMiddlewarePattern/MediatorMiddlewarePattern";

import "./App.css";

function App() {
  return (
    <>
      <SingletonPattern />

      <hr />

      <ProxyPattern />

      <hr />

      <ProviderPattern />

      <hr />

      <PrototypePattern />

      <hr />

      <ContainerPresentationalPattern />

      <hr />

      <ObserverPattern />

      <hr />

      <ModulePattern />

      <hr />

      <MixinPattern />

      <hr />

      <MediatorMiddlewarePattern />
    </>
  );
}

export default App;
