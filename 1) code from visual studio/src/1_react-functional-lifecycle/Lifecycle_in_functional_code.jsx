import "../App.css";
import "../index.css"
import { useEffect, useState } from "react";

export default function Lifecycle_in_functional_code(props) {
  const timer = 0;
  const [state, setState] = useState([]);
  const Key = "40e69753bd296dc12ea20d6da2d5636f";
  const API = "https://api.themoviedb.org/3/movie/";
  const endpoint = "now_playing";
  const ASSET_EndPoint = "https://image.tmdb.org/t/p/w500";

  const fetchAPI = async () => {
    const res = await fetch(
      `${API}${endpoint}?api_key=40e69753bd296dc12ea20d6da2d5636f`
    );
    const json = await res.json();
    console.log(json.results);
    setTimeout(() => {
      setState(json.results); // 20 rec => array format
    }, 2000);
  };
  useEffect(() => {
    // will mount
    fetchAPI();
  }, []);
  useEffect(() => {
    // willupdate
    if (state.length > 0) {
      // alert();
    }
  }, [state]);
  return (
    <div>
      {state.map(({ original_title, poster_path }, index) => {
        return (
          <div key={poster_path}>
            <p>{original_title}</p>
            <img src={ASSET_EndPoint + poster_path} width={64} />
          </div>
        );
      })}
    </div>
  );
}
