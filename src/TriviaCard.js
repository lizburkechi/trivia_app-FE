import React, { useState, useEffect, useRef } from "react";

export default function TriviaCard({ triviaCard }) {
  const [flip, setFlip] = useState(false);
  const [height, setHeight] = useState('initial')

  const frontEl = useRef()
  const backEl = useRef()

  function setMaxHeight() {
    const frontHeight = frontEl.current.getBoundingClientRect().height
    const backHeight = backEl.current.getBoundingClientRect().height
    setHeight(Math.max(frontHeight, backHeight, 100));
  }

  useEffect(setMaxHeight, [triviaCard.question, triviaCard.answer, triviaCard.options])
  useEffect(() => {
    window.addEventListener('resize', setMaxHeight)
    return () => window.removeEventListener('resize', setMaxHeight)
  }, [])


  return (
    <div
      className={`card ${flip ? "flip" : ""}`}
      style={{ height: height }}
      onClick={() => setFlip(!flip)}
    >
      <div className="front" ref={frontEl} >
        {triviaCard.question}
        <div className="triviaCard-options">
          {triviaCard.options.map((option) => {
            return <div className="triviaCard-option" key={option}>{option}</div>;
          })}
        </div>
      </div>
      <div className="back" ref={backEl}>{triviaCard.answer}</div>
    </div>
  );
}
