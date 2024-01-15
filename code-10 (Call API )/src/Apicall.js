import React from "react";
import { useEffect } from "react";

const Apicall = () => {
  let api = "https://hn.algolia.com/api/v1/search?query=html";

  const fetchApidata = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApidata();
  }, [api]);
  return (
    <div>
      <h2> My first API calling code </h2>
    </div>
  );
};

export default Apicall;
