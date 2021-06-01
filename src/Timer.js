import React, { useState, useEffect } from "react";
import "./styles.css";

const Timer = () => {

  const timerPresets = {
    seconds: "00",
    minutes: "02",
    active: false,
    counter: 120
  }

  const [second, setSecond] = useState(timerPresets.seconds);
  const [minute, setMinute] = useState(timerPresets.minutes);

  const [isActive, setIsActive] = useState(timerPresets.active);
  const [counter, setCounter] = useState(timerPresets.counter);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        let computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        let computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter((counter) => counter - 1);
      }, 1000);
    }


    // build conditional form here
console.log(counter)
if (counter === 0) {
  console.log("alert")
}

    return () => clearInterval(intervalId);
  }, [isActive, counter]);

  function stopTimer() {
    setIsActive(timerPresets.active);
    setCounter(timerPresets.counter);
    setSecond(timerPresets.seconds);
    setMinute(timerPresets.minutes);
  }

  return (
    <div class="clock-container">
      <div class="time">
        <span class="minute">{minute}</span>
        <span>:</span>
        <span class="second">{second}</span>
      </div>
      <div class="buttons">
        <button onClick={() => setIsActive(!isActive)} class="start">
          {isActive ? "Pause" : "Start"}
        </button>
        <button onClick={stopTimer} class="reset">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;

