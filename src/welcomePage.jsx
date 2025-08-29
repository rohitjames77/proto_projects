import { useState } from "react";
import MainPage from "./mainPage";

export default function WelcomePage() {
  const [showMainPage, setShowMainPage] = useState(false);

  const handleOnclick = () => {
    setShowMainPage(true);
  };
  if (showMainPage) {
    return (
      <>
        <MainPage />
      </>
    );
  }

  return (
    <div id="welcome-page-container" className=" w-screen h-screen bg-gradient-to-r from-indigo-400 to-violet-400">
     <div id="intro-container" className="absolute top-100 left-60 h-[30vh] w-[70vw] ">
      <p className="text-gray-50 text-5xl">Welcome to Resume Maker</p>
      <p className="text-gray-50 text-6xl"> Your first Step to Dream Career</p>
      <button type="button" className="h-[5vh] w-[10vh ]text-gray-50 bg-gradient-to-r from-red-400 to-orange-400 shadow-red-500 " onClick={handleOnclick}>
        Let's Get Started
      </button>
      </div>
    </div>
  );
}
