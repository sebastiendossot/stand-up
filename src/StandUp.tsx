import React, { FunctionComponent, useState, useEffect} from 'react';
import './App.css';
import config from "./config/people-names.json"

const NUMBER_0F_SECONDS = 90;

type Props = {};



function shuffle(array: string[]): string[] {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const StandUp: FunctionComponent<Props> = () => {
  const [currentSpeaker, setCurrentSpeaker] = useState("chicken");
  const [seconds, setSeconds] = useState(NUMBER_0F_SECONDS);
  const [isFinished, setIsFinished] = useState(false);
  const [timeOver, setTimeOver] = useState(false);
  const [animation, setAnimation] = useState(`countdown-animation ${NUMBER_0F_SECONDS}s linear`);
  
  const shuffledArray = shuffle(config.people);

  function changeSpeaker() {
    const element = shuffledArray.pop();
    if (element) {
      setCurrentSpeaker(element);
      setSeconds(NUMBER_0F_SECONDS);
      setTimeOver(false);
      // easiest way I found to restart animation. Fancier ones exist but overkilled.
      setAnimation("")
      setTimeout(function(){ setAnimation(`countdown-animation ${NUMBER_0F_SECONDS}s linear`); }, 100);
    } else {
      setIsFinished(true)
    }
  }

  useEffect(() => {
    changeSpeaker();
    const interval = setInterval(() => {
      console.log(seconds)
      setSeconds(seconds => {
        if (seconds > 0) {
          return seconds - 1;
        }
        setTimeOver(true);
        return 0;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function getName(current:string) {
    if(current === "anais") {
      return "Anaïs";
    }
    return currentSpeaker.charAt(0).toUpperCase()+ currentSpeaker.slice(1)
  }

  return (
    <div>
      { !isFinished ? 
        <>
        <div style={{textAlign: "center"}}>
          <div className="countdown-timer">
            <div className="countdown-timer__circle">
              <svg>
                <circle
                  r="24"
                  cx="26"
                  cy="26"
                  style={{
                    animation: animation
                  }}
                />
              </svg>
            </div>
            <div className="countdown-timer__text">
              {seconds}s
            </div>
          </div>
        </div>
          
          <h1>{getName(currentSpeaker)}</h1>
          <ul>
            <img 
              className={`img-responsive people-photo ${timeOver? "get-out" : ""}`} src={`./images/${currentSpeaker}.png`} 
                style={{
                  height: '60%', 
                  width: '60%', 
                  border: `2px solid ${ timeOver ? "red" : "white"}`
                  }} alt={currentSpeaker}/>
          </ul>
          <img onClick={() => changeSpeaker()} className="next-button img-responsive" src={`./shared-images/next.png`} style={{height: '40px', width: "auto"}} alt={"next"}/>
        </>
      :
        <>
          <h1>See you next Stand up ! 🚀</h1>
          <img className="img-responsive" src={`./shared-images/chicken.png`} style={{height: '200px', width: 'auto'}} alt={currentSpeaker}/>
        </>
    }
  </div>
  );
}

export default StandUp;
