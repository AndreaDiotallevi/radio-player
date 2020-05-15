import React, { useState } from "react";
import socketIOClient from "socket.io-client";
import streams from "../utils/streams";

const socket = socketIOClient.connect("http://localhost:5000");

const App = () => {
  const [selectedStreamIndex, setSelectedStreamIndex] = useState(0);

  return (
    <div>
      <img
        data-test="stream-image"
        src={streams[selectedStreamIndex].image}
        alt="radio"
        height="500"
      ></img>
      <p data-test="stream-name">{streams[selectedStreamIndex].name}</p>
      <button data-test="stream-button">Play</button>
      <ul data-test="stream-button-list">
        {streams.map((stream) => (
          <li key={stream.id}>
            <button value={stream.id}>{stream.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
