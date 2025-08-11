

export default function ExtraExperienceForm2({ workExperience, setWorkexp }) {
  const handleOnChange = function (event) {
    const { id, value } = event.target;
    setWorkexp({ ...workExperience, [id]: value });
  };
  console.log(workExperience.jobTitle);

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
    </div>
  );
}
