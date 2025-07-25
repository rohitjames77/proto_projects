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
    <>
      <p className="text-red-500">Welcome to Resume Maker</p>
      <p className="text-red-500"> Your first Step to Dream Career</p>
      <button type="button" className="text-red-500" onClick={handleOnclick}>
        Let's Get Started
      </button>
    </>
  );
}
