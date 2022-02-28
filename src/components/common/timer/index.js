import React from "react";
import { useState, useEffect } from "react";

const Timer = (props) => {
  const { initialMinute = 0, initialSeconds = 0 } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div
      style={{
        backgroundColor: "#ef6d2227",
        width: 67,
        height: 41,
        borderRadius: 5,
      }}
      className="d-flex justify-content-center align-items-center"
    >
      <div>
        {minutes === 0 && seconds === 0 ? (
          <h5 style={{ color: "#ef6d22", margin: 0 }}>
           {"00:00"}
          </h5>
        ) : (
          <h5 style={{ color: "#ef6d22", margin: 0 }}>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </h5>
        )}
      </div>
    </div>
  );
};

export default Timer;
