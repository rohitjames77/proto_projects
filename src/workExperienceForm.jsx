import { useState } from "react";
import ExtraExperienceForm2 from "./extraWorkExp2";
import ExtraExperienceForm3 from "./extraWorkExp3";

export default function WorkExperienceForm({
  workExperience,
  setWorkexp,
  idArr,
  formId,
  setFormId,
}) {
  const [clickstatus, setClickStatus] = useState(false);
  
  const handleOnChange = function (event) {
    const { id, value } = event.target;
    setWorkexp({ ...workExperience, [id]: value });
  };
  
  const handleOnClick = function () {
    setClickStatus(!clickstatus);
    console.log('Click status :'+clickstatus);

    if (!clickstatus) {
      setWorkexp(
        Object.defineProperties(workExperience, {
          jobTitle2: { value: "" },
          jobTitle3: { value: "" },
          employer2: { value: "" },
          employer3: { value: "" },
          startDate2: { value: "" },
          startDate3: { value: "" },
          endDate2: { value: "" },
          endDate3: { value: "" },
          city2: { value: "" },
          city3: { value: "" },
          description2: { value: "" },
          description3: { value: "" },
        })
      );
      console.log('work experience :'+workExperience);
    }
  };

  if (clickstatus) {
    return (
      <div id="experience-form-container">
        <div id="extraExperienceForm" className="">
          <label htmlFor="" className="">
            Job Title
          </label>
          <input
            type="text"
            maxLength={40}
            id="jobTitle"
            className=""
            value={workExperience.jobTitle}
            onChange={handleOnChange}
            required
          ></input>

          <label htmlFor="Employer" className="">
            Employer
          </label>
          <input
            type="text"
            id="employer"
            className=""
            value={workExperience.employer}
            onChange={handleOnChange}
            required
          ></input>
          <label htmlFor="startDate" className="">
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            className=""
            value={workExperience.startDate}
            onChange={handleOnChange}
            required
          ></input>
          <label htmlFor="endDate" className="">
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            className=""
            value={workExperience.endDate}
            onChange={handleOnChange}
            required
          ></input>
          <label htmlFor="city">City </label>
          <input
            type="text"
            id="city"
            className=""
            value={workExperience.city}
            onChange={handleOnChange}
          ></input>
          <label htmlFor="description">Description </label>
          <input
            type="text"
            id="description"
            className=""
            value={workExperience.description}
            onChange={handleOnChange}
          ></input>

          <button
            type="button"
            className=""
            id="add-work-exp"
            onClick={handleOnClick}
          >
            {clickstatus ? "Back" : "ADD"}
          </button>
          <ExtraExperienceForm2
            workExperience={workExperience}
            setWorkexp={setWorkexp}
          />
          <ExtraExperienceForm3
            workExperience={workExperience}
            setWorkexp={setWorkexp}
          />

         
        </div>
      </div>
    );
  }

  return (
    <div id="experience-form-container" className="bg-gray-100 w-full h-[80vh] text-gray-400 text-2xl rounded-r-lg">
      <div id="extraExperienceForm" className="">
        <label htmlFor="" className="">
          Job Title
        </label>
        <input
          type="text"
          maxLength={40}
          id="jobTitle"
          className=""
          value={workExperience.jobTitle}
          onChange={handleOnChange}
          required
        ></input>

        <label htmlFor="Employer" className="">
          Employer
        </label>
        <input
          type="text"
          id="employer"
          className=""
          value={workExperience.employer}
          onChange={handleOnChange}
          required
        ></input>
        <label htmlFor="startDate" className="">
          Start Date
        </label>
        <input
          type="date"
          id="startDate"
          className=""
          value={workExperience.startDate}
          onChange={handleOnChange}
          required
        ></input>
        <label htmlFor="endDate" className="">
          End Date
        </label>
        <input
          type="date"
          id="endDate"
          className=""
          value={workExperience.endDate}
          onChange={handleOnChange}
          required
        ></input>
        <label htmlFor="city">City </label>
        <input
          type="text"
          id="city"
          className=""
          value={workExperience.city}
          onChange={handleOnChange}
        ></input>
        <label htmlFor="description">Description </label>
        <input
          type="text"
          id="description"
          className=""
          value={workExperience.description}
          onChange={handleOnChange}
        ></input>

        <button
          type="button"
          className=""
          id="add-work-exp"
          onClick={handleOnClick}
        >
          Add
        </button>
      </div>
    </div>
  );
}
