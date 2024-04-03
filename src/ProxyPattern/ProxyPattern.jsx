import { personProxy } from "src/ProxyPattern/proxy";

import "./style.css";

function ProxyPattern() {
  personProxy.age;
  personProxy.age = 9;

  return (
    <div className="proxy">
      <p>ProxyPattern</p>
      <p>Share a single global instance throughout our application</p>
    </div>
  );
}

export default ProxyPattern;
