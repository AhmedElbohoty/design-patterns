import { useEffect } from "react";
import { add, subtract as sub } from "src/ModulePattern/math";

function ModulePattern() {
  useEffect(() => {
    // Dynamic import
    import("src/ModulePattern/math").then((module) => {
      console.log(module);
    });
  }, []);

  return (
    <div className="pattern">
      <p>ModulePattern</p>
      <p>Split up your code into smaller, reusable pieces</p>

      {add(5, 9)}
      <br />
      {sub(5, 9)}
    </div>
  );
}

export default ModulePattern;
