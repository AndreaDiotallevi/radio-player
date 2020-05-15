import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import streams from "../utils/streams";

const socket = socketIOClient.connect("http://localhost:5000");

const App = () => {
  const [selectedStreamIndex, setSelectedStreamIndex] = useState(0);

  useEffect(() => {
    socket.on("streamSelected", (data) => {
      setSelectedStreamIndex(data);
    });
  }, [selectedStreamIndex]);

  const handleStreamClick = (e) => {
    e.preventDefault();
    socket.emit("streamSelected", e.target.value);
  };

  return (
    <div>
      <img
        data-test="stream-image"
        src={streams[selectedStreamIndex].image}
        alt="radio"
        height="500"
      ></img>
      <p data-test="stream-name">{streams[selectedStreamIndex].name}</p>
      <ul data-test="stream-button-list">
        {streams.map((stream) => (
          <li key={stream.id}>
            <button value={stream.id} onClick={handleStreamClick}>
              {stream.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
