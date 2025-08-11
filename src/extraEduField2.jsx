


 export default function ExtraEducationField2({ educationInfo, setEducationInfo }) {
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
        id="school2"
        value={educationInfo.school2}
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
        id="university2"
        value={educationInfo.university2}
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
        id="degreeName2"
        value={educationInfo.degree2}
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
        id="startDate2"
        value={educationInfo.startDate2}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="end-date" className="text-gray-800">
        End Date
      </label>
      <input
        type="date"
        className="bg-gray-200"
        id="endDate2"
        value={educationInfo.endDate2}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="location" className="text-gray-800">
        Location
      </label>
      <input
        type="text"
        className="bg-gray-200"
        id="location2"
        value={educationInfo.location2}
        maxLength={40}
        onChange={handleOnChange}
        required
      ></input>
    </div>
  );
}
