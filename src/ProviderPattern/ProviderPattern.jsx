import ThemeProvider from "src/ProviderPattern/ThemeProvider";
import { useThemeContext } from "src/ProviderPattern/context";

import "./style.css";

function ProviderPattern() {
  return (
    <ThemeProvider>
      <div className="provider">
        <p>ProviderPattern</p>
        <p>Make data available to multiple child components</p>
        <Child />
      </div>
    </ThemeProvider>
  );
}

function Child() {
  const themeContext = useThemeContext();

  return <p>{themeContext.theme}</p>;
}

export default ProviderPattern;
