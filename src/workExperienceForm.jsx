import ExtraExperienceForm2 from "./extraWorkExp2";
import ExtraExperienceForm3 from "./extraWorkExp3";
import { RiFileAddLine } from "react-icons/ri";

export default function WorkExperienceForm({
  workExperience,
  setWorkexp,
addWorkExp,
  setAddWorkExp
}) {
  
  
  const handleOnChange = function (event) {
    const { id, value } = event.target;
    setWorkexp({ ...workExperience, [id]: value });
  };
  
  const handleOnClick = function () {
    setAddWorkExp(!addWorkExp);
    if (!addWorkExp) {
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
  
    }
  };

  if (addWorkExp) {
    return (
      <div id="experience-form-container" className="bg-gray-100 w-full h-[80vh] text-gray-400 text-2xl overflow-y-auto
 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300 h-32
 ">
             <div id="extraExperienceForm" className="grid grid-rows-6 grid-cols-4 gap-y-6  mt-5 border-b-4 border-gray-400 pb-8 ">
        <label htmlFor="" className="text-2xl font-[roboto] text-gray-800 row-start-1 col-start-1 col-end-2">
          Job Title
        </label>
        <input
          type="text"
          maxLength={40}
          id="jobTitle"
          className="bg-gray-200 text-gray-800 rounded-xl row-start-1 col-start-2 col-end-5 items-end"
          value={workExperience.jobTitle}
          onChange={handleOnChange}
          required
        ></input>

        <label htmlFor="Employer" className="text-2xl font-[roboto] text-gray-800 row-start-2 col-start-1 col-end-2">
          Employer
        </label>
        <input
          type="text"
          id="employer"
          className="bg-gray-200 text-gray-800 rounded-xl row-start-2 col-start-2 col-end-5 items-end"
          value={workExperience.employer}
          onChange={handleOnChange}
          required
        ></input>
        <label htmlFor="startDate" className="text-2xl font-[roboto] text-gray-800 row-start-3 col-start-1 col-end-2">
          Start Date
        </label>
        <input
          type="date"
          id="startDate"
          className="bg-gray-200 text-gray-200 rounded-xl row-start-3 col-start-2 col-end-5 items-end"
          value={workExperience.startDate}
          onChange={handleOnChange}
          required
        ></input>
        <label htmlFor="endDate" className="text-2xl font-[roboto] text-gray-800 row-start-4 col-start-1 col-end-2">
          End Date
        </label>
        <input
          type="date"
          id="endDate"
          className="bg-gray-200 text-gray-200 rounded-xl row-start-4 col-start-2 col-end-5 items-end"
          value={workExperience.endDate}
          onChange={handleOnChange}
          required
        ></input>
        <label htmlFor="city" className="text-2xl font-[roboto] text-gray-800 row-start-5 col-start-1 col-end-2">City </label>
        <input
          type="text"
          id="city"
          className="bg-gray-200 text-gray-800 rounded-xl row-start-5 col-start-2 col-end-5 items-end"
          value={workExperience.city}
          onChange={handleOnChange}
        ></input>
        <label htmlFor="description" className="text-2xl font-[roboto] text-gray-800 row-start-6 col-start-1 col-end-2">Description </label>
        <input
          type="text"
          id="description"
          className="bg-gray-200 text-gray-800 rounded-xl row-start-6 col-start-2 col-end-5 items-end"
          value={workExperience.description}
          onChange={handleOnChange}
        ></input>
            <RiFileAddLine className=" absolute top-[75%] h-[60px] w-[60px]  hover:fill-blue-500 fill-gray-600 shadow-md shadow-gray-400 hover:shadow-2xl focus: transform translate-y-4   "  id="add-education-field"
        onClick={handleOnClick}/>
        </div>
       <ExtraExperienceForm2
            workExperience={workExperience}
            setWorkexp={setWorkexp}
          />
          <ExtraExperienceForm3
            workExperience={workExperience}
            setWorkexp={setWorkexp}
          />
      
      </div>
    );
  }

  return (
    <div id="experience-form-container" className="bg-gray-100 w-full h-[80vh] text-gray-400 text-2xl rounded-r-lg overflow-y-auto
 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300 h-32
 ">
      <div id="extraExperienceForm" className="grid grid-rows-6 grid-cols-4 gap-y-6 m-4 ">
        <label htmlFor="" className="text-2xl font-[roboto] text-gray-800 row-start-1 col-start-1 col-end-2">
          Job Title
        </label>
        <input
          type="text"
          maxLength={40}
          id="jobTitle"
          className="bg-gray-200 text-gray-800 rounded-xl row-start-1 col-start-2 col-end-5 items-end"
          value={workExperience.jobTitle}
          onChange={handleOnChange}
          required
        ></input>

        <label htmlFor="Employer" className="text-2xl font-[roboto] text-gray-800 row-start-2 col-start-1 col-end-2">
          Employer
        </label>
        <input
          type="text"
          id="employer"
          className="bg-gray-200 text-gray-800 rounded-xl row-start-2 col-start-2 col-end-5 items-end"
          value={workExperience.employer}
          onChange={handleOnChange}
          required
        ></input>
        <label htmlFor="startDate" className="text-2xl font-[roboto] text-gray-800 row-start-3 col-start-1 col-end-2">
          Start Date
        </label>
        <input
          type="date"
          id="startDate"
          className="bg-gray-200 text-gray-800 rounded-xl row-start-3 col-start-2 col-end-5 items-end"
          value={workExperience.startDate}
          onChange={handleOnChange}
          required
        ></input>
        <label htmlFor="endDate" className="text-2xl font-[roboto] text-gray-800 row-start-4 col-start-1 col-end-2">
          End Date
        </label>
        <input
          type="date"
          id="endDate"
          className="bg-gray-200 text-gray-800 rounded-xl row-start-4 col-start-2 col-end-5 items-end"
          value={workExperience.endDate}
          onChange={handleOnChange}
          required
        ></input>
        <label htmlFor="city" className="text-2xl font-[roboto] text-gray-800 row-start-5 col-start-1 col-end-2">City </label>
        <input
          type="text"
          id="city"
          className="bg-gray-200 text-gray-800 rounded-xl row-start-5 col-start-2 col-end-5 items-end"
          value={workExperience.city}
          onChange={handleOnChange}
        ></input>
        <label htmlFor="description" className="text-2xl font-[roboto] text-gray-800 row-start-6 col-start-1 col-end-2">Description </label>
        <input
          type="text"
          id="description"
          className="bg-gray-200 text-gray-800 rounded-xl row-start-6 col-start-2 col-end-5 items-end"
          value={workExperience.description}
          onChange={handleOnChange}
        ></input>

            <RiFileAddLine className=" absolute top-[75%] h-[60px] w-[60px]  hover:fill-blue-500 fill-gray-600 shadow-md shadow-gray-400 hover:shadow-2xl focus: transform translate-y-4   "  id="add-education-field"
        onClick={handleOnClick}/>

      </div>
    </div>
  );
}
