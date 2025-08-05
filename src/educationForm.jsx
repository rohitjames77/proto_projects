import { useState } from "react";



export default function EducationForm({ personalInfo,formId,setFormId,idArr,educationInfo, setEducationInfo }) {
  const [addfield, setAddField] = useState(false);


  const handleOnclick = function () {
    setAddField(true);
  };

  if (addfield) {
      <ExtraEducationField
      educationInfo= {educationInfo} 
      setEducationInfo={setEducationInfo}
      />
    setAddField(false);
  }

  return (
    <div className="" id="education-form-container">
      <ExtraEducationField
      educationInfo= {educationInfo} 
      setEducationInfo={setEducationInfo}
      />
      <button
        type="button"
        className=""
        id="add-education-field"
        onClick={handleOnclick}
      >Extra</button>

        <FormForwardButton formId ={formId}
      setFormId={setFormId}
      idArr={idArr}
    
       />
        <Test personalInfo={personalInfo} 
      educationInfo={educationInfo}
      />
    </div>
  );
}

function ExtraEducationField({educationInfo,setEducationInfo}) {
const handleOnChange = function (event) {
    const { id, value } = event.target;
    setEducationInfo({ ...educationInfo, [id]: value });
    
  };
  
  console.log(educationInfo.school);


  return (
    <div className="bg-gray-200 flex-row flex-auto 10v h-40v w-2/3 ">
      <label htmlFor="school" className="text-gray-800">School </label>
      <input
        type="text"
        className="bg-gray-400 text-gray-800"
        id="school"
        value={educationInfo.school}
        maxLength={50}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="university" className="text-gray-800" >University </label>
      <input
        type="text"
        className="bg-gray-400 text-gray-800"
        id="university"
        value={educationInfo.university}
        maxLength={50}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="degree-name" className="text-gray-800">Degree</label>
      <input
        type="text"
        className="bg-gray-400 text-gray-800"
        id="degreeName"
        value={educationInfo.degree}
        maxLength={50}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="start-date" className="text-gray-800">Start Date</label>
      <input type="date" className="bg-gray-200" id="startDate" value={educationInfo.startDate} onChange={handleOnChange} required></input>
      <label htmlFor="end-date" className="text-gray-800">End Date</label>
      <input type="date" className="bg-gray-200" id="endDate" value={educationInfo.endDate}  onChange={handleOnChange}required></input>
      <label htmlFor="location" className="text-gray-800">Location</label>
      <input
        type="text"
        className="bg-gray-200"
        id="location"
        value={educationInfo.location}
        maxLength={40}
        onChange={handleOnChange}
        required
      ></input>
     
    </div>
  );
}
