import React from "react";
import { actors } from "../data";

function Actors() {
  const actorData = actors.map((actor, index) => {
    return (
      <div key={index}>
        <h3>Name: {actor.name}</h3>
        <p>Movies:</p>
        <ul>
          {actor.movies.map((movie, index) => {
            return <li key={index}>{movie}</li>;
          })}
        </ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Actors Page</h1>
      {actorData}
    </div>
  );
}

export default Actors;
