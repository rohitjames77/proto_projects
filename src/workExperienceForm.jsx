import { useState } from "react";
import FormForwardButton from "./changeForm";
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
    console.log(clickstatus);

    if (!clickstatus) {
      setWorkexp(
        Object.defineProperties(workExperience, {
          jobTitle: { value: "" },
          employer: { value: "" },
          startDate: { value: "" },
          endDate: { value: "" },
          city: { value: "" },
          description: { value: "" },
        })
      );
    }
  };

  if(clickstatus){
  return (
    <div id="extraExperienceForm" className="">
      <label htmlFor="" className="">
        Job Title
      </label>
      <input
        type="text"
        maxLength={40}
        id="jobTitle2"
        className=""
        value={workExperience.jobTitle2}
        onChange={handleOnChange}
        required
      ></input>

      <label htmlFor="Employer" className="">
        Employer
      </label>
      <input
        type="text"
        id="employer2"
        className=""
        value={workExperience.employer2}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="startDate" className="">
        Start Date
      </label>
      <input
        type="date"
        id="startDate2"
        className=""
        value={workExperience.startDate2}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="endDate" className="">
        End Date
      </label>
      <input
        type="date"
        id="endDate2"
        className=""
        value={workExperience.endDate2}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="city">City </label>
      <input
        type="text"
        id="city2"
        className=""
        value={workExperience.city2}
        onChange={handleOnChange}
      ></input>
      <label htmlFor="description">Description </label>
      <input
        type="text"
        id="description2"
        className=""
        value={workExperience.description2}
        onChange={handleOnChange}
      ></input>

      <button
        type="button"
        className=""
        id="add-work-exp"
        onClick={handleOnClick}
      >{clickstatus?'Back':'ADD'}
      </button>
    <ExtraExperienceForm2 workExperience={workExperience} setWorkexp={setWorkexp} />
     <ExtraExperienceForm3 workExperience={workExperience} setWorkexp={setWorkexp} />

      <FormForwardButton formId={formId} setFormId={setFormId} idArr={idArr} />
    </div>
  
  )}

  return (
    <div id="extraExperienceForm" className="">
      <label htmlFor="" className="">
        Job Title
      </label>
      <input
        type="text"
        maxLength={40}
        id="jobTitle2"
        className=""
        value={workExperience.jobTitle2}
        onChange={handleOnChange}
        required
      ></input>

      <label htmlFor="Employer" className="">
        Employer
      </label>
      <input
        type="text"
        id="employer2"
        className=""
        value={workExperience.employer2}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="startDate" className="">
        Start Date
      </label>
      <input
        type="date"
        id="startDate2"
        className=""
        value={workExperience.startDate2}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="endDate" className="">
        End Date
      </label>
      <input
        type="date"
        id="endDate2"
        className=""
        value={workExperience.endDate2}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="city">City </label>
      <input
        type="text"
        id="city2"
        className=""
        value={workExperience.city2}
        onChange={handleOnChange}
      ></input>
      <label htmlFor="description">Description </label>
      <input
        type="text"
        id="description2"
        className=""
        value={workExperience.description2}
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
      <FormForwardButton formId={formId} setFormId={setFormId} idArr={idArr} />
    </div>
  );
}
