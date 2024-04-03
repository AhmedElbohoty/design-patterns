import { personProxy } from "src/ProxyPattern/proxy";

function ProxyPattern() {
  personProxy.age;
  personProxy.age = 9;

  return (
    <div className="pattern">
      <p>ProxyPattern</p>
      <p>Share a single global instance throughout our application</p>
    </div>
  );
}

export default ProxyPattern;
