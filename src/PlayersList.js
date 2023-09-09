// src/PlayersList.js
import React from "react";
import Player from "./Player";
import players from "./players";

function PlayersList() {
  return (
    <div className="player-list">
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
}

export default PlayersList;
