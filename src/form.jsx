import PersonalForm from "./personalForm";
import EducationForm from "./educationForm";
import WorkExperienceForm from "./workExperienceForm";
import SummaryForm from "./summary";

export default function MainForm({
  formId,
  setFormId,
  personalInfo,
  setPersonalInfo,
  educationInfo,
  setEducationInfo,
  workExperience,
  setWorkexp,
  summary,
  setSummary,
  addWorkExp,
  setAddWorkExp,
  addEduFields,
  setAddEduFields,
}) {
  if (formId === 1) {
    return (
      <EducationForm
        personalInfo={personalInfo}
        formId={formId}
        setFormId={setFormId}
        educationInfo={educationInfo}
        setEducationInfo={setEducationInfo}
        addEduFields={addEduFields}
        setAddEduFields={setAddEduFields}
      />
    );
  }

  if (formId === 2) {
    return (
      <WorkExperienceForm
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        workExperience={workExperience}
        setWorkexp={setWorkexp}
        addWorkExp={addWorkExp}
        setAddWorkExp={setAddWorkExp}
      />
    );
  }

  if (formId === 3) {
    return <SummaryForm summary={summary} setSummary={setSummary} />;
  }

  return (
    <div className="flex flex-col" id="personal-form-container">
      <PersonalForm
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
      />
    </div>
  );
}
