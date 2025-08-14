import { useState } from "react";
import FormForwardButton from "./changeForm";
import ExtraEducationField2 from "./extraEduField2";
import ExtraEducationField3 from "./extraEduField3";

export default function EducationForm({

  formId,
  setFormId,
  idArr,
  educationInfo,
  setEducationInfo,
}) {

  const [clickstatus,setClickStatus]=useState(false);
  const handleOnChange = function (event) {
    const { id, value } = event.target;
    setEducationInfo({ ...educationInfo, [id]: value });
  };

  const handleOnclick = function () {
    setClickStatus(!clickstatus)
    console.log(clickstatus);
    
    if (!clickstatus){
    setEducationInfo(
      Object.defineProperties(educationInfo, {
        school2: { value: "" },
        school3: { value: "" },
        university2: { value: "" },
        university3: { value: "" },
        city2: { value: "" },
        city3: { value: "" },
        startDate2: { value: "" },
        startDate3: { value: "" },
        endDate2: { value: "" },
        endDate3: { value: "" },
        location2: { value: "" },
        location3: { value: "" },
        degree2: { value: "" },
        degree3: { value: "" },
      })
    );
  }
  
};
console.log('educationInfo:'+ educationInfo);

    if (clickstatus){
      return (
      <div className="" id="education-form-container">
        <label htmlFor="school" className="text-gray-800">
          School
        </label>
        <input
          type="text"
          className="bg-gray-400 text-gray-800"
          id="school"
          value={educationInfo.school}
          maxLength={50}
          onChange={handleOnChange}
          required
        ></input>
        <label htmlFor="university" className="text-gray-800">
          University
        </label>
        <input
          type="text"
          className="bg-gray-400 text-gray-800"
          id="university"
          value={educationInfo.university}
          maxLength={50}
          onChange={handleOnChange}
          required
        ></input>
        <label htmlFor="degree-name" className="text-gray-800">
          Degree
        </label>
        <input
          type="text"
          className="bg-gray-400 text-gray-800"
          id="degreeName"
          value={educationInfo.degree}
          maxLength={50}
          onChange={handleOnChange}
          required
        ></input>
        <label htmlFor="start-date" className="text-gray-800">
          Start Date
        </label>
        <input
          type="date"
          className="bg-gray-200"
          id="startDate"
          value={educationInfo.startDate}
          onChange={handleOnChange}
          required
        ></input>
        <label htmlFor="end-date" className="text-gray-800">
          End Date
        </label>
        <input
          type="date"
          className="bg-gray-200"
          id="endDate"
          value={educationInfo.endDate}
          onChange={handleOnChange}
          required
        ></input>
        <label htmlFor="location" className="text-gray-800">
          Location
        </label>
        <input
          type="text"
          className="bg-gray-200"
          id="location"
          value={educationInfo.location}
          maxLength={40}
          onChange={handleOnChange}
          required
        ></input>
        <button
          type="button"
          className=""
          id="add-education-field"
          onClick={handleOnclick}
        >{clickstatus?"Back":"Extra"}
        </button>

        <FormForwardButton
          formId={formId}
          setFormId={setFormId}
          idArr={idArr}
        />
        <ExtraEducationField2
          educationInfo={educationInfo}
          setEducationInfo={setEducationInfo}
        />
        <ExtraEducationField3
          educationInfo={educationInfo}
          setEducationInfo={setEducationInfo}
        />
      </div>
     )
    }

  return (
    <div className="bg-gray-50 w-full h-[90vh] border-3 border-solid border-black-500 text-black text-2xl flex flex-col" id="education-parent-container">
     <div id="education-form-container">
      <label htmlFor="school" className="text-gray-50">
        School
      </label>
      <input
        type="text"
        className="bg-gray-400 text-gray-800"
        id="school"
        value={educationInfo.school}
        maxLength={50}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="university" className="text-gray-50">
        University
      </label>
      <input
        type="text"
        className="bg-gray-400 text-gray-50"
        id="university"
        value={educationInfo.university}
        maxLength={50}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="degree-name" className="text-gray-50">
        Degree
      </label>
      <input
        type="text"
        className="bg-gray-400 text-gray-800"
        id="degreeName"
        value={educationInfo.degree}
        maxLength={50}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="start-date" className="text-gray-50">
        Start Date
      </label>
      <input
        type="date"
        className="bg-gray-200"
        id="startDate"
        value={educationInfo.startDate}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="end-date" className="text-gray-50">
        End Date
      </label>
      <input
        type="date"
        className="bg-gray-200"
        id="endDate"
        value={educationInfo.endDate}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="location" className="text-gray-50">
        Location
      </label>
      <input
        type="text"
        className="bg-gray-200"
        id="location"
        value={educationInfo.location}
        maxLength={40}
        onChange={handleOnChange}
        required
      ></input>
      <button
        type="button"
        className=""
        id="add-education-field"
        onClick={handleOnclick}
      >
        Extra
      </button>
      </div>
      <div id="button-container" className="flex flex-row absolute inset-x-0 bottom-0 w-1/2 h-auto items-stretch">
      
    </div>
    </div>
  );
}
