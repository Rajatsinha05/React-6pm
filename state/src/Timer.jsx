import React, { useEffect, useState } from "react";

const Timer = () => {
  let [flag, setFlag] = useState(false);
  let [hour, setHour] = useState(0);
  let [minute, setMinute] = useState(0);
  let [second, setSecond] = useState(0);

  let [time, setTime] = useState(0);
  let id;
  // useEffect(() => {
  //   id = setInterval(() => {
  //     setSecond(second + 1);

  //     if (second == 59) {
  //       setSecond(0);
  //       setMinute(minute + 1);
  //     }

  //     if (minute == 59) {
  //       setMinute(0);
  //       setHour(hour + 1);
  //     }
  //   }, 1);

  //   return () => {
  //     clearInterval(id);
  //   };
  // }, [second]);

  useEffect(() => {
    id = setInterval(() => {
      if (time > 0) {
        if (flag) {
          setSecond(second - 1);
        }
        if (second == 0) {
          setSecond(59);
          setMinute(minute - 1);
        }

        if (minute == 0) {
          setMinute(59);
          setHour(hour - 1);
        }
      }
    }, 1);

    return () => clearInterval(id);
  }, [second, flag]);

  const divide = () => {
    let newTime = time / 60;
    setHour(Math.floor(newTime));
    setMinute(time - Math.floor(newTime) * 60 - 1);
    setSecond(59);
    setFlag(true);
  };

  return (
    <div>
      <h1>
        Timer : {hour}:{minute}:{second}
      </h1>

      <input type="number" onChange={(e) => setTime(e.target.value)} />
      <button onClick={divide}>{flag ? "stop" : "start"} </button>
      <h1>{time}</h1>
    </div>
  );
};

export default Timer;
