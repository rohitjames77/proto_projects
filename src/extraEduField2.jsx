


 export default function ExtraEducationField2({ educationInfo, setEducationInfo }) {
  const handleOnChange = function (event) {
    const { id, value } = event.target;
    setEducationInfo({ ...educationInfo, [id]: value });
  };


  return (
    <div className="grid grid-rows-6 grid-cols-4 gap-y-6 m-4 mt-[5%] border-b-4 border-gray-400 pb-8">
      <label htmlFor="school" className="text-gray-800 row-start-1 col-start-1 col-end-2">
        School
      </label>
      <input
        type="text"
        className="bg-gray-200 text-gray-300 row-start-1 rounded-xl col-start-2 col-end-5"
        id="school2"
        value={educationInfo.school2}
        maxLength={50}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="university" className="text-gray-800  row-start-2 col-start-1 col-end-2">
        University
      </label>
      <input
        type="text"
        className="bg-gray-200 text-gray-300 rounded-xl row-start-2 col-start-2 col-end-5"
        id="university2"
        value={educationInfo.university2}
        maxLength={50}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="degree-name" className="text-gray-800 row-start-3 col-start-1 col-end-2">
        Degree
      </label>
      <input
        type="text"
        className="bg-gray-200 text-gray-300 rounded-xl row-start-3 col-start-2 col-end-5"
        id="degreeName2"
        value={educationInfo.degree2}
        maxLength={50}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="start-date" className="text-gray-800 row-start-4 col-start-1 col-end-2">
        Start Date
      </label>
      <input
        type="date"
        className="bg-gray-200 text-gray-300 rounded-xl row-start-4 col-start-2 col-end-5"
        id="startDate2"
        value={educationInfo.startDate2}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="end-date" className="text-gray-800 row-start-5 col-start-1 col-end-2">
        End Date
      </label>
      <input
        type="date"
        className="bg-gray-200 text-gray-300 rounded-xl row-start-5 col-start-2 col-end-5"
        id="endDate2"
        value={educationInfo.endDate2}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="location" className="text-gray-800 row-start-6 col-start-1 col-end-2">
        Location
      </label>
      <input
        type="text"
        className="bg-gray-200 text-gray-800 rounded-xl row-start-6 col-start-2 col-end-5"
        id="location2"
        value={educationInfo.location2}
        maxLength={40}
        onChange={handleOnChange}
        required
      ></input>
    </div>
  );
}
