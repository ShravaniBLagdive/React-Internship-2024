import { Children, useEffect, useRef } from "react";
import "./styles.css";

export default function App() {
  return (
    <>
      <Wrapper></Wrapper>
    </>
  );
}
const Wrapper = ({ children }) => {
  return (
    <>
      <header className="header">
        <h6>LOGO</h6>
        <div className="flex">
          <h6>Page1</h6>
          <h6>Page2</h6>
        </div>
      </header>
      {children}
      <footer className="footer">
        <h5>Footer</h5>
      </footer>
    </>
  );
};
