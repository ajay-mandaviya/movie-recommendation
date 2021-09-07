import "./styles.css";
import { movieDictionary } from "./movies";
import { useState } from "react";
export default function App() {
  let { Drama } = movieDictionary;
  const [movie, setMovie] = useState(Drama);
  let btn = Object.keys(movieDictionary);
  // console.log(Drama);

  const handleMovie = (btns) => {
    // console.log(btns);
    setMovie(movieDictionary[btns]);
  };
  return (
    <div className="App">
      <h2>Movie Recommendation App 🎬</h2>
      {btn.map((btns, index) => {
        return (
          <button
            key={index}
            className="btns"
            onClick={() => handleMovie(btns)}
          >
            {btns}
          </button>
        );
      })}
      <hr />

      <ul
        style={{
          marginTop: "30px"
        }}
      >
        {movie.map((movie, index) => {
          return (
            <li
              key={index}
              style={{
                width: "90%",
                padding: "1rem",
                margin: "1rem 0rem",
                backgroundColor: "#E5E7EB",
                listStyle: "none",
                border: "2px solid gray",
                borderRadius: "20px"
              }}
            >
              <p>Name: {movie.name}</p>
              <p>Description: {movie.description.substr(0, 50)}...</p>
              <p>Rating: {movie.rating}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
