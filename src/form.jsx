import { useState } from "react";
import FormForwardButton from "./changeForm";
import PersonalForm from "./personalForm";
import EducationForm from "./educationForm";
import WorkExperienceForm from "./workExperienceForm";
import SummaryForm from "./summary";




export default function MainForm({formId, setFormId}) {
  
  
  
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
console.log('formId in Form: '+formId);

  if (formId === 1 ) {
    return (
  
        <EducationForm
          personalInfo={personalInfo}
          formId={formId}
          setFormId={setFormId}
          educationInfo={educationInfo}
          setEducationInfo={setEducationInfo}
        />
      
    );
  }

  if (formId ===2 ) {
    return (
  
       <WorkExperienceForm
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        workExperience={workExperience}
        setWorkexp={setWorkexp}
       
      />
    
    );
    
  }

  if(formId ===3 ){
    return (
      <SummaryForm summary ={summary} setSummary={setSummary} />
    )
  }



  console.log("formId is :" ,formId>1);


  return (
    <div className="flex flex-col" id="personal-form-container">
      <PersonalForm
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
      />
    <div id="button-container">
    </div>
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
