import "./style.css";

import { personProxy } from "src/ProxyPattern/proxy";

function ProxyPattern() {
  console.log("=====");
  const a = personProxy.age;
  personProxy.age = 9;
  console.log("=====");

  return <div className="proxy">ProxyPattern</div>;
}

export default ProxyPattern;
