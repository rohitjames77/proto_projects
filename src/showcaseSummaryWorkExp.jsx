export default function ShowcaseSummaryWorkExp({
  addWorkExp,
  workExperience,
  summary,
}) {


  if (addWorkExp === true) {
    return (
      <>
      <p id="summary-container" className="  h-auto w-auto font-[roboto] text-l text-gray-600 row-start-1 row-end-4 col-start-1 col-end-11">
        {summary !== ""?"Career Objective":null}<br></br>{summary}
      </p>
      <div id="work-exp-container1" className="text-l font-[roboto] text-gray-600 row-start-4 row-end-7 col-start-1 col-end-11 grid grid-rows-10 grid-cols-10">
    {workExperience.jobTitle !== ""?"EXPERIENCE":null}<br></br>
        <h2 id="jobTitle" className="text-base font-[roboto] text-gray-600 row-start-3 col-start-2 col-end-6 items-start">
          {workExperience.jobTitle}
        </h2>
        <p id="employer" className="text-base font-[roboto] text-gray-600 row-start-4 col-start-2 col-end-4 items-end">
          {workExperience.employer}
        </p>
        <p id="city" className="text-base font-[roboto] text-gray-600 row-start-4 col-start-5 col-end-8 items-start">
          {workExperience.city}
        </p>
        <span id="start-date" className="text-base font-[roboto] text-gray-600 row-start-4 col-start-7 col-end-8">
          {workExperience.startDate}
        </span>
        <span id="end-date" className="text-base font-[roboto] text-gray-600 row-start-4 col-start-9 col-end-10">
          {workExperience.endDate}
        </span>
        <p id="description" className="text-base font-[roboto] text-gray-600 row-start-6 row-end-11 col-start-2 col-end-10 ">
          {workExperience.description}
        </p>
      </div>

        <div id="work-exp-container2" className="text-l font-[roboto] text-gray-600  row-start-9 row-end-12 col-start-1 col-end-11 grid grid-rows-10 grid-cols-10 ">
           <h2 id="jobTitle" className="text-base font-[roboto] text-gray-600 row-start-2 col-start-2 col-end-6 items-start">
          {workExperience.jobTitle2}
        </h2>
        <p id="employer" className="text-base font-[roboto] text-gray-600 row-start-4 col-start-2 col-end-4 items-end">
          {workExperience.employer2}
        </p>
        <p id="city" className="text-base font-[roboto] text-gray-600 row-start-4 col-start-5 col-end-8 items-start">
          {workExperience.city2}
        </p>
        <span id="start-date" className="text-base font-[roboto] text-gray-600 row-start-4 col-start-7 col-end-8">
          {workExperience.startDate2}
        </span>
        <span id="end-date" className="text-base font-[roboto] text-gray-600 row-start-4 col-start-9 col-end-10">
          {workExperience.endDate2}
        </span>
        <p id="description" className="text-base font-[roboto] text-gray-600 row-start-6 row-end-11 col-start-2 col-end-10 ">
          {workExperience.description2}
        </p>
        </div>

        <div id="work-exp-container3" className="text-l font-[roboto] text-gray-600  row-start-14 row-end-17 col-start-1 col-end-11 grid grid-rows-10 grid-cols-10 ">
          <h2 id="jobTitle" className="text-base font-[roboto] text-gray-600 row-start-2 col-start-2 col-end-6 items-start">
          {workExperience.jobTitle3}
        </h2>
        <p id="employer" className="text-base font-[roboto] text-gray-600 row-start-4 col-start-2 col-end-4 items-end">
          {workExperience.employer3}
        </p>
        <p id="city" className="text-base font-[roboto] text-gray-600 row-start-4 col-start-5 col-end-8 items-start">
          {workExperience.city3}
        </p>
        <span id="start-date" className="text-base font-[roboto] text-gray-600 row-start-4 col-start-7 col-end-8">
          {workExperience.startDate3}
        </span>
        <span id="end-date" className="text-base font-[roboto] text-gray-600 row-start-4 col-start-9 col-end-10">
          {workExperience.endDate3}
        </span>
        <p id="description" className="text-base font-[roboto] text-gray-600 row-start-6 row-end-10 col-start-2 col-end-10 ">
          {workExperience.description3}
        </p>
        </div>
      </>
    );
  }

  return (
    <>
      <p id="summary-container" className=" h-auto w-auto font-[roboto] text-l text-gray-600 row-start-1 row-end-4 col-start-1 col-end-11">
        {summary !== "" ?"Career Objective":null}<br></br>{summary}
      </p>
      <div id="work-exp-container1" className="text-l font-[roboto] text-gray-600 row-start-4 row-end-7 col-start-1 col-end-11 grid grid-rows-10 grid-cols-10">
    {workExperience.jobTitle !== ""?"EXPERIENCE":null}<br></br>
        <h2 id="jobTitle" className="text-base font-[roboto] text-gray-600 row-start-3 col-start-2 col-end-5 items-end">
          {workExperience.jobTitle}
        </h2>
        <p id="employer" className="text-base font-[roboto] text-gray-600 row-start-3 col-start-5 col-end-7 items-start">
          {workExperience.employer}
        </p>
        <p id="city" className="text-base font-[roboto] text-gray-600 row-start-4 col-start-5 col-end-8 items-start">
          {workExperience.city}
        </p>
        <span id="start-date" className="text-base font-[roboto] text-gray-600 row-start-4 col-start-7 col-end-8">
          {workExperience.startDate}
        </span>
        <span id="end-date" className="text-base font-[roboto] text-gray-600 row-start-4 col-start-9 col-end-10">
          {workExperience.endDate}
        </span>
        <p id="description" className="text-base font-[roboto] text-gray-600 row-start-6 row-end-11 col-start-2 col-end-10 ">
          {workExperience.description}
        </p>
      </div>
    </>
  );
}
