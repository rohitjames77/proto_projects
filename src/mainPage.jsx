import { useState } from "react";
import MainForm from "./form";
import ProgressBar from "./progressBar";
import ShowCasePage from "./showCasePage";
import FormForwardButton from "./changeForm";

export default function MainPage() {
  const [formId, setFormId] = useState(0);
  const idArr = ["Education", "Work experience", "Summary", "Save"];

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

  return (
    <div id="main-page-container" className=" h-screen w-screen flex flex-row ">
      <div id="progess-form-container" className="flex flex-col h-screen w-1/2">
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
        />
        <FormForwardButton
          formId={formId}
          setFormId={setFormId}
          idArr={idArr}
        />
      </div>
      <ShowCasePage />
    </div>
  );
}
