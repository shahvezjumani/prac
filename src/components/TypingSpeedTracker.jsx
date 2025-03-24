import React, { useEffect, useState } from "react";

const TypingSpeedTracker = () => {
  const [text, setText] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [speed, setSpeed] = useState(0);
  useEffect(() => {
    if (text.length === 1) {
      setStartTime(Date.now());
    }

    if (text.length > 1) {
      const elapsedTime = (Date.now() - startTime) / 1000;
      setSpeed((text.length / elapsedTime).toFixed(2));
    }
  }, [text]);
  return (
    <>
      <div className="w-screen h-screen bg-zinc-500">
        <h1>Typing Speed</h1>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <h1>{speed}</h1>
      </div>
    </>
  );
};

export default TypingSpeedTracker;
