import { useState } from "react";
import MainForm from "./form";
import ProgressBar from "./progressBar";
import ShowCasePage from "./showCasePage";
import FormForwardButton from "./changeForm";

export default function MainPage() {
  const [formId, setFormId] = useState(0);
  const idArr = ["Education", "Work experience", "Summary","Go Back"];

  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
  });

  const [educationInfo, setEducationInfo] = useState({
    school: "",
    degree: "",
    university: "",
    city: "",
    startDate: "",
    endDate: "",
    location: "",
  });
  console.log(educationInfo);

  const [workExperience, setWorkexp] = useState({
    jobTitle: "",
    employer: "",
    startDate: "",
    endDate: "",
    city: "",
    description: "",
  });

  const [summary, setSummary] = useState("");
  const [addEduFields,setAddEduFields]=useState(false);
  const [addWorkExp, setAddWorkExp] = useState(false);

  return (
    <div id="main-page-container" className="bg-indigo-300 h-screen w-screen flex flex-row ">
      <div id="progess-form-container" className="  flex flex-col h-[99vh] mt-1 w-1/2 ">
        <ProgressBar
          personalInfo={personalInfo}
          educationInfo={educationInfo}
          workExperience={workExperience}
          summary={summary}
        />
        <MainForm
          formId={formId}
          setFormId={setFormId}
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
          educationInfo={educationInfo}
          setEducationInfo={setEducationInfo}
          workExperience={workExperience}
          setWorkexp={setWorkexp}
          summary={summary}
          setSummary={setSummary}
          addWorkExp={addWorkExp}
          setAddWorkExp={setAddWorkExp}
          addEduFields={addEduFields}
          setAddEduFields={setAddEduFields}
        />
        <FormForwardButton
          formId={formId}
          setFormId={setFormId}
          idArr={idArr}
        />
      </div>
      <ShowCasePage personalInfo={personalInfo}
          educationInfo={educationInfo}
          workExperience={workExperience}
          summary={summary}
           addWorkExp={addWorkExp}
           addEduFields={addEduFields}
         />
    </div>
  );
}
