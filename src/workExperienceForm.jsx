import { useState } from "react";

export default function WorkExperienceForm({ workExperience, setWorkexp }) {
  const [extraExperience, setExWorkexp] = useState(false);
  const handleOnClick = function () {
    setWorkexp(true);
  };

  if (extraExperience) {
    return (
      <ExtraExperienceForm
        workExperience={workExperience}
        setExWorkexp={setExWorkexp}
      />
    );
  }
  return (
    <>
      <ExtraExperienceForm
        workExperience={workExperience}
        setExWorkexp={setExWorkexp}
      />
      <button
        type="button"
        id="extraExperienceField"
        className=""
        onClick={handleOnClick}
      >
        Add+
      </button>
    </>
  );
}

function ExtraExperienceForm(workExperience, setWorkexp) {
  const handleOnChange = function (event) {
    const { id, value } = event.target;
    setWorkexp({ ...workExperience, [id]: value });
  };

  return (
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
      >
        {" "}
      </input>
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
    </div>
  );
}
