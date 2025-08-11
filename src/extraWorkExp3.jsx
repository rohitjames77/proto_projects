

export default function ExtraExperienceForm3({ workExperience, setWorkexp }) {
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
        id="jobTitle3"
        className=""
        value={workExperience.jobTitle3}
        onChange={handleOnChange}
        required
      ></input>

      <label htmlFor="Employer" className="">
        Employer
      </label>
      <input
        type="text"
        id="employer3"
        className=""
        value={workExperience.employer3}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="startDate" className="">
        Start Date
      </label>
      <input
        type="date"
        id="startDate3"
        className=""
        value={workExperience.startDate3}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="endDate" className="">
        End Date
      </label>
      <input
        type="date"
        id="endDate3"
        className=""
        value={workExperience.endDate3}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="city">City </label>
      <input
        type="text"
        id="city3"
        className=""
        value={workExperience.city3}
        onChange={handleOnChange}
      ></input>
      <label htmlFor="description">Description </label>
      <input
        type="text"
        id="description3"
        className=""
        value={workExperience.description3}
        onChange={handleOnChange}
      ></input>
    </div>
  );
}
