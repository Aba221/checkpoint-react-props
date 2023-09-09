// src/Player.js
import React from "react";
import Card from "react-bootstrap/Card";
import "./App.css"; 

function Player({ name, team, nationality, jerseyNumber, age, imageUrl }) {
  return (
    <Card className="player-card">
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team}
          <br />
          <strong>Nationality:</strong> {nationality}
          <br />
          <strong>Jersey Number:</strong> {jerseyNumber}
          <br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Player;


