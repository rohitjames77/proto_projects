export default function ProgressBar({
  personalInfo,
  educationInfo,
  workExperience,
}) {
  console.log(personalInfo);

  const progressPercentCalc = (stateObject) => {
    const nonEmptyVal = Object.values(stateObject).filter(
      (index) => index.trim() !== ""
    ).length;
    const percent = nonEmptyVal /Object.values(stateObject).length  *100
 return percent ; 
  }

const personalInfoProgPrecent= progressPercentCalc(personalInfo);
  console.log(personalInfoProgPrecent);
  const educationInfoprogressPercent =progressPercentCalc(educationInfo);
  const workExpProgressPrecent = progressPercentCalc(workExperience);


  return (
    <div
      id="progress-bar"
      className="w-full h-[10vh] bg-gray-200 text-9x1 text-gray-900 border-2 border-solid border-black-500 col-start-1 col-end-1 row-start-1"
    >
      progress bar
    </div>
  );






  }


