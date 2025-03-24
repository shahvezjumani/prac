import React, { useEffect, useState } from "react";

const SmartHome = () => {
  const [isInside, setIsInside] = useState(false);
  const [isFanOn, setIsFanOn] = useState(false);
  const [isDoorLooked, setIsDoorLooked] = useState(true);
  const [temperature, setTemperature] = useState(24);

  useEffect(() => {
    if (isInside) {
      document.title = "Welcome Home";
      setTemperature(20);
    } else {
      document.title = "Away Home";
      setTemperature(28);
    }
  }, [isInside]);
  return (
    <>
      <div></div>
    </>
  );
};

export default SmartHome;
