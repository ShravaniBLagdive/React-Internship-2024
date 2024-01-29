import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { addNumber } from "./redux/counterReducer";

export default function App() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.couter.value);
  //SUBSCRIPT TO STORE AND GRAB STATE

  const addFun = () => {
    dispatch(addNumber());
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{value}</h2>
      <button onClick={addFun}>ADD</button>
    </div>
  );
}
