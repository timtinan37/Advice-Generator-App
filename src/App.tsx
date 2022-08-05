import React, { useState } from 'react';
import pattern_divider_desktop from "./images/pattern-divider-desktop.svg";
import pattern_divider_mobile from "./images/pattern-divider-mobile.svg";
import icon_dice from "./images/icon-dice.svg";


function App() {
  const [id, setId] = useState(117);
  const [advice, setAdvise] = useState("It's easy to sit up and take notice. What's difficult is getting up and taking action.");

  const fetchAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => {
        try {
          setId(data.slip.id);
          setAdvise(data.slip.advice);
        } catch ($e) {
          console.log($e);
        }
      });
  };

  return (
    <div className="bg-gray-800 grid place-items-center h-screen text-center">
      <div>
        <div className="bg-slate-700 rounded-xl font-['Manrope'] py-16 mx-5 md:mx-60">
          <div className="flex flex-col mx-10 gap-y-8 font-bold">
            <h6 className="text-green-300 text-sm uppercase tracking-[.25em]">
              Advice #{id}
            </h6>
            <blockquote className="text-2xl text-white">
              "{advice}"
            </blockquote>
            <img src={pattern_divider_desktop} alt="pattern_divider_desktop" />
          </div>
        </div>
        <div className="flex justify-center items-center bg-green-300 hover:shadow-green-400 hover:shadow-[0_0_30px] hover:cursor-pointer rounded-[50%] h-16 w-16 mx-auto relative bottom-8" onClick={fetchAdvice}>
          <img src={icon_dice} alt="icon_dice" />
        </div>
      </div>
    </div>
  );
}

export default App;
