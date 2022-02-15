import React from "react";
import { directors } from "../data";

function Directors() {
  console.log(directors);

  const director = directors.map((director, index) => {
    console.log(director);
    return (
      <div key={index}>
        <h3>Name: {director.name}</h3>
        Movies:
        <ul>
          {director.movies.map((movie, index) => {
            return <li key={index}>{movie}</li>;
          })}
        </ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Directors Page</h1>
      {director}
    </div>
  );
}

export default Directors;
