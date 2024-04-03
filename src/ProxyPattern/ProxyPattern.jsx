import { personProxy } from "src/ProxyPattern/proxy";

import "./style.css";

function ProxyPattern() {
  personProxy.age;
  personProxy.age = 9;

  return <div className="proxy">ProxyPattern</div>;
}

export default ProxyPattern;
