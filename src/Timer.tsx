import React, { FunctionComponent, useEffect, useState} from 'react';
import './App.css';
const NUMBER_0F_SECONDS = 60;
type Props = {
  timeLeft: number;
  timeOver: boolean;
};

const Timer: FunctionComponent<Props> = ({timeLeft, timeOver}) => {
  const [time, setTime] = useState(timeLeft)
  useEffect(() => {
    setTime(timeLeft)
  }, [timeLeft]); 

  return (
    <></>
  );
}

export default Timer;
