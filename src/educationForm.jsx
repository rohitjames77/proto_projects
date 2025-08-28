import ExtraEducationField2 from "./extraEduField2";
import ExtraEducationField3 from "./extraEduField3";
import { RiFileAddLine } from "react-icons/ri";

export default function EducationForm({
  educationInfo,
  setEducationInfo,
  addEduFields,
  setAddEduFields
}) {

  
  const handleOnChange = function (event) {
    const { id, value } = event.target;
    setEducationInfo({ ...educationInfo, [id]: value });
  };

  const handleOnclick = function () {
    setAddEduFields(!addEduFields)
    console.log(addEduFields);
    
    if (!addEduFields){
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

    if (addEduFields){
      return (
      <div className="bg-gray-100 w-full h-[80vh] text-gray-400 text-2xl bg-gray-100 w-full h-[80vh] text-gray-400 text-2xl rounded-r-lg overflow-y-auto
 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300 h-32" id="education-form-container">
        <form className=" grid grid-rows-6 grid-cols-4 gap-y-6  mt-5 border-b-4 border-gray-400 pb-8" id="education-form-container">
      <label htmlFor="school" className="  font-[roboto] text-gray-800 row-start-1 col-start-1 col-end-2">
        School
      </label>
      <input
        type="text"
        className="bg-gray-200 text-gray-200 rounded-xl row-start-1 col-start-2 col-end-5 items-end"
        id="school"
        value={educationInfo.school}
        maxLength={50}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="university" className="text-gray-800 row-start-2 col-start-1 col-end-2">
        University
      </label>
      <input
        type="text"
        className="bg-gray-200 text-gray-200 rounded-xl row-start-2 col-start-2 col-end-5"
        id="university"
        value={educationInfo.university}
        maxLength={50}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="degree-name" className="text-gray-800 row-start-3 col-start-1 col-end-2">
        Degree
      </label>
      <input
        type="text"
        className="bg-gray-200 text-gray-200 rounded-xl row-start-3 col-start-2 col-end-5"
        id="degreeName"
        value={educationInfo.degree}
        maxLength={50}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="start-date" className="text-gray-800 row-start-4 col-start-1 col-end-2">
        Start Date
      </label>
      <input
        type="date"
        className="bg-gray-200 row-start-4 rounded-xl col-start-2 col-end-5"
        id="startDate"
        value={educationInfo.startDate}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="end-date" className="text-gray-800 row-start-5 col-start-1 col-end-2">
        End Date
      </label>
      <input
        type="date"
        className="bg-gray-200 row-start-5 rounded-xl col-start-2 col-end-5"
        id="endDate"
        value={educationInfo.endDate}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="location" className="text-gray-800 row-start-6 col-start-1 col-end-2">
        Location
      </label>
      <input
        type="text"
        className="bg-gray-200 row-start-6 rounded-xl col-start-2 col-end-5"
        id="location"
        value={educationInfo.location}
        maxLength={40}
        onChange={handleOnChange}
        required
      ></input>
     <RiFileAddLine className=" absolute top-[75%] h-[60px] w-[60px]  hover:fill-blue-500 fill-gray-600 shadow-md shadow-gray-400 hover:shadow-2xl focus: transform translate-y-4   "  id="add-education-field"
        onClick={handleOnclick}/>
        </form>
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
    <div className="bg-gray-100 w-full h-[80vh] text-gray-400 text-2xl rounded-r-lg overflow-y-auto
 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300 h-32
  " id="education-parent-container">
     <form className=" grid grid-rows-6 grid-cols-4 gap-y-6 m-4  " id="education-form-container">
      <label htmlFor="school" className=" text-2xl font-[roboto] text-gray-800 row-start-1 col-start-1 col-end-2">
        School
      </label>
      <input
        type="text"
        className="bg-gray-200 text-gray-800 rounded-xl row-start-1 col-start-2 col-end-5 items-end"
        id="school"
        value={educationInfo.school}
        maxLength={50}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="university" className="text-gray-800 row-start-2 col-start-1 col-end-2">
        University
      </label>
      <input
        type="text"
        className="bg-gray-200 text-gray-800 rounded-xl row-start-2 col-start-2 col-end-5"
        id="university"
        value={educationInfo.university}
        maxLength={50}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="degree-name" className="text-gray-800 row-start-3 col-start-1 col-end-2">
        Degree
      </label>
      <input
        type="text"
        className="bg-gray-200 text-gray-800 rounded-xl row-start-3 col-start-2 col-end-5"
        id="degreeName"
        value={educationInfo.degree}
        maxLength={50}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="start-date" className="text-gray-800 row-start-4 col-start-1 col-end-2">
        Start Date
      </label>
      <input
        type="date"
        className="bg-gray-200 row-start-4 rounded-xl col-start-2 col-end-5"
        id="startDate"
        value={educationInfo.startDate}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="end-date" className="text-gray-800 row-start-5 col-start-1 col-end-2">
        End Date
      </label>
      <input
        type="date"
        className="bg-gray-200 row-start-5 rounded-xl col-start-2 col-end-5"
        id="endDate"
        value={educationInfo.endDate}
        onChange={handleOnChange}
        required
      ></input>
      <label htmlFor="location" className="text-gray-800 row-start-6 col-start-1 col-end-2">
        Location
      </label>
      <input
        type="text"
        className="bg-gray-200 row-start-6 rounded-xl col-start-2 col-end-5"
        id="location"
        value={educationInfo.location}
        maxLength={40}
        onChange={handleOnChange}
        required
      ></input>
      <RiFileAddLine className=" absolute top-[75%] h-[60px] w-[60px]  hover:fill-blue-500 fill-gray-600 shadow-md shadow-gray-400 hover:shadow-2xl focus: transform translate-y-4   "  id="add-education-field"
        onClick={handleOnclick}/>
  
      </form>
     
    </div>
  );
}
