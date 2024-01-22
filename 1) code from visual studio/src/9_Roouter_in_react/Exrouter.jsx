
import "../App.css";
import "../index.css";
import React from "react";
import { Children, useEffect, useRef, useState } from "react";

import {} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";

import Home from "./Home";
import Page1 from "./Page1";
import Page2 from "./Page2";




export default function Exrouter() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/Home'> Home </Route>
        <Route path='/Page1'> Page1 </Route>
        <Route path='/Page2'> Page2 </Route>
    </Routes>
    </BrowserRouter>
      
  );
}

