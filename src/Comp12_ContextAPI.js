import { createContext, useContext } from "react";

const themDefault = { border: "10px solid red" };
const themContext = createContext(themDefault);

function Sub1() {
  const theme = useContext(themContext);
  return (
    <themContext.Provider Value={{ border: "10px solod blue" }}>
      <div style={theme}>
        <h1>sub1</h1>
        <Sub2 />
      </div>
    </themContext.Provider>
  );
}

function Sub2() {
  return (
    <div>
      <h1>sub2</h1>
      <Sub3 />
    </div>
  );
}

function Sub3() {
  return (
    <div>
      <h1>sub3</h1>
    </div>
  );
}

export default function App() {
  const theme = useContext(themContext);
  return (
    <div className="root" style={theme}>
      <h1>Hello</h1>
      <Sub1 />
    </div>
  );
}
