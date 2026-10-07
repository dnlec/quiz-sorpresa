import { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime.seconds === 59) {
          return { minutes: prevTime.minutes + 1, seconds: 0 };
        }

        return { ...prevTime, seconds: prevTime.seconds + 1 };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div>
      <h2>Timer</h2>
      <p>{time.minutes} mins {time.seconds} secs</p>
      <div className="flex gap-2">
        <button
          className="bg-green-800 w-15 h-10 cursor-pointer"
          onClick={() => setIsRunning(true)}
        >
          Start
        </button>
        <button
          className="bg-red-500 w-15 h-10 cursor-pointer"
          onClick={() => setIsRunning(false)}
        >
          Pause
        </button>
        <button
          className="bg-yellow-300 w-15 h-10 cursor-pointer"
          onClick={() => {
            setIsRunning(false);
            setTime({ minutes: 0, seconds: 0 });
          }}
        >
          Reset
        </button>
      </div>
    </div>
  )
}