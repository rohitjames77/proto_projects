import { useState } from "react";
import FormForwardButton from "./changeForm";
import PersonalForm from "./personalForm";
import EducationForm from "./educationForm";
import workExperienceForm from "./workExperienceForm";
import WorkExperienceForm from "./workExperienceForm";

export default function MainForm() {
  const idArr = ["Education", "Work experience", "Summary", "Save"];
  const [formId, setFormId] = useState(0);
  console.log(formId);
  const [personalInfo, setPersonalInfo] = useState({
    jobTitle: "",
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
    description:"",
  });

  const [summary, setSummary] = useState("");

  if (formId === 1) {
    return (
      <>
        <EducationForm
          personalInfo={personalInfo}
          formId={formId}
          setFormId={setFormId}
          idArr={idArr}
          educationInfo={educationInfo}
          setEducationInfo={setEducationInfo}
        />
      </>
    );
  }

  if (formId === 2) {
    return (
      <>
        <WorkExperienceForm
          workExperience={workExperience}
          setWorkexp={setWorkexp}
        />
      </>
    );
  }
  return (
    <div>
      <PersonalForm
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
      />
      <Test personalInfo={personalInfo} educationInfo={educationInfo} />
      <FormForwardButton formId={formId} setFormId={setFormId} idArr={idArr} />
    </div>
  );
}

// Remove this component after use ................................
function Test({ personalInfo, educationInfo }) {
  return (
    <>
      <h1 className="text-green-500">
        Personal details: {personalInfo.jobTitle}
      </h1>
      <h1 className="text-red-400">Education details:{educationInfo.school}</h1>
    </>
  );
}
