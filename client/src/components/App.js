import React, { useState } from "react";
import streams from "../utils/streams";

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
    </div>
  );
};

export default App;
