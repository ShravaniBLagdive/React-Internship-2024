import "./styles.css";
import Header from "./header1.js";

export default function App() {
  const x = 10;

  return (
    <div className="App">
      <h1 className="x"> Hello World !</h1>
      <Header name="Shravani" /> //transfer data from one component to another
      <Header name="Lagdive" /> //component using props.
      <p>{x < 15 ? "Greater" : "Smaller"}</p>
    </div>
  );
}

// export default App;
