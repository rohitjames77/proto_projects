import { useState } from "react";
import FormForwardButton from "./changeForm";
import PersonalForm from "./personalForm";
import EducationForm from "./educationForm";
import WorkExperienceForm from "./workExperienceForm";

export default function MainForm() {
  const idArr = ["Education", "Work experience", "Summary", "Save"];
  const [formId, setFormId] = useState(0);
  console.log(formId);
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
    university2: "",
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
  console.log(workExperience);

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
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        idArr={idArr}
        workExperience={workExperience}
        setWorkexp={setWorkexp}
        educationInfo={educationInfo}
      />
      </>
    );
  }


  return (
    <div>
      {/* <PersonalForm
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
      /> */}
      <EducationForm
        personalInfo={personalInfo}
        formId={formId}
        setFormId={setFormId}
        idArr={idArr}
        educationInfo={educationInfo}
        setEducationInfo={setEducationInfo}
      />
      <WorkExperienceForm
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        idArr={idArr}
        workExperience={workExperience}
        setWorkexp={setWorkexp}
        educationInfo={educationInfo}
      />
      {/* <Test
        personalInfo={personalInfo}
        educationInfo={educationInfo}
        workExperience={workExperience}
      /> */}
      <FormForwardButton formId={formId} setFormId={setFormId} idArr={idArr} />
    </div>
  );
}

// Remove this component after use ................................
export function Test({ personalInfo, educationInfo, workExperience}) {
  console.log(personalInfo.firstName);

  return (
    <>
      <h1 className="text-green-500">
        Personal details: {personalInfo.firstName}
      </h1>
      <h1 className="text-red-400">Education details:{educationInfo.school}</h1>
     <h1 className="text-blue-500">Experience:{workExperience.jobTitle}</h1>
    </>
  );
}
