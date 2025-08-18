import PersonalForm from "./personalForm";
import EducationForm from "./educationForm";
import WorkExperienceForm from "./workExperienceForm";
import SummaryForm from "./summary";




export default function MainForm({formId, setFormId, personalInfo,setPersonalInfo,educationInfo,setEducationInfo,workExperience,setWorkexp,summary,setSummary}) {
  
  
  
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
