import React, { useEffect, useState } from "react";

export interface ICountdown {
    onTimeout: Function
}

export default function Countdown(props: ICountdown) {
    const end = new Date(Date.UTC(2023, 5, 22, 18, 0, 0));
    const [time, days, hours, minutes, seconds] = useCountdown(end);
    if (time <= 0) {
        props.onTimeout();
        return <></>
    }
    const endHours = end.getHours();
    const endHour = endHours > 12 ? [endHours-12, "PM"] : [endHours, "AM"];
    return <div className="countdown"> 
        <span className="days">{days.toString().padStart(2, "0")}d</span>
        <span className="separator">:</span>
        <span className="hours">{hours.toString().padStart(2, "0")}h</span>
        <span className="separator">:</span>
        <span className="minutes">{minutes.toString().padStart(2, "0")}m</span>
        <span className="separator">:</span>
        <span className="seconds">{seconds.toString().padStart(2, "0")}s</span>
    </div>
}

const useCountdown = (targetDate: Date) => {
    const countDownDate = new Date(targetDate).getTime();
  
    const [countDown, setCountDown] = useState(
      countDownDate - new Date().getTime()
    );
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCountDown(countDownDate - new Date().getTime());
      }, 1000);
  
      return () => clearInterval(interval);
    }, [countDownDate]);
  
    return getReturnValues(countDown);
  };
  
  const getReturnValues = (countDown: number) => {
    // calculate time left
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  
    return [countDown, days, hours, minutes, seconds];
  };
  
  export { useCountdown };