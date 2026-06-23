"use client";

import { useEffect, useState } from "react";

const Countdown = ({ departureTime }) => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const diff =
        new Date(departureTime).getTime() - new Date().getTime();

      if (diff <= 0) {
        setTimeLeft("Trip Started");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) /
          (1000 * 60 * 60)
      );

      const mins = Math.floor(
        (diff % (1000 * 60 * 60)) /
          (1000 * 60)
      );

      const secs = Math.floor(
        (diff % (1000 * 60)) /
          1000
      );

      setTimeLeft(
        `${days}d ${hours}h ${mins}m ${secs}s`
      );
    }, 1000);

    return () => clearInterval(timer);
  }, [departureTime]);

  return (
    <div className="bg-purple-100 dark:bg-zinc-800 rounded-xl p-4">
      <p className="text-sm opacity-70">
        Departure Countdown
      </p>

      <h3 className="font-bold text-xl text-purple-600">
        {timeLeft}
      </h3>
    </div>
  );
};

export default Countdown;