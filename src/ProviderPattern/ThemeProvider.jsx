import { ThemeContext } from "src/ProviderPattern/context";

function ThemeProvider({ children }) {
  const contextValue = { theme: "Light" };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
