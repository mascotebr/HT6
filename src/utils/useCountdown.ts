import { useEffect, useState } from 'react';

const useCountdown = (targetDate: any) => {
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

const getReturnValues = (countDown: any) => {
    // calculate time left
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const daysS = days < 10 ? `0${days}` : days;
    const hours = Math.floor(
        (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const hoursS = hours < 10 ? `0${hours}` : hours;
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const minutesS = minutes < 10 ? `0${minutes}` : minutes;
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
    const secondsS = seconds < 10 ? `0${seconds}` : seconds;

    return [daysS, hoursS, minutesS, secondsS];
};

export { useCountdown };
