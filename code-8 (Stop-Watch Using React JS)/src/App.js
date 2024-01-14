import { useEffect } from "react";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [timer, setTimer] = useState(0);
  const [control, setControl] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      //console.log(timer);

      setTimer((prev) => prev + 1);
    }, 1000);

    if (!control) clearInterval(timer);

    // unmounting
    return () => clearInterval(timer);
  }, [control]);

  const startfunc = () => {
    setControl(true);
  };

  const stopfunc = () => {
    setControl(false);
  };

  return (
    <div className="App">
      <h1>First mini Project </h1>
      <h2>*... Let's Develop Stop-Watch ...*</h2>
      <h1> {timer} </h1>
      <button onClick={startfunc}>Start</button>
      <br />
      <br />
      <button onClick={stopfunc}>Stop</button>
    </div>
  );
}
