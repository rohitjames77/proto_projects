 export default function ExtraEducationField3({ educationInfo, setEducationInfo }) {
  const handleOnChange = function (event) {
    const { id, value } = event.target;
    setEducationInfo({ ...educationInfo, [id]: value });
  };



  return (
    <div className="bg-gray-200 flex-row flex-auto 10v h-40v w-2/3 ">
      <label htmlFor="school" className="text-gray-800">
        School
      </label>
      <input
        type="text"
        className="bg-gray-400 text-gray-800"
        id="school3"
        value={educationInfo.school3}
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
        id="university3"
        value={educationInfo.university3}
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
        id="degreeName3"
        value={educationInfo.degree3}
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
        id="startDate3"
        value={educationInfo.startDate3}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="end-date" className="text-gray-800">
        End Date
      </label>
      <input
        type="date"
        className="bg-gray-200"
        id="endDate3"
        value={educationInfo.endDate3}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="location" className="text-gray-800">
        Location
      </label>
      <input
        type="text"
        className="bg-gray-200"
        id="location3"
        value={educationInfo.location3}
        maxLength={40}
        onChange={handleOnChange}
        required
      ></input>
    </div>
  );
}
