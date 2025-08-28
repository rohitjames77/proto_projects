import ShowcaseEducationPersonalInfo from "./showcaseEducationPersonalInfo";
import ShowcaseSummaryWorkExp from "./showcaseSummaryWorkExp";

export default function ShowCasePage({
  personalInfo,
  educationInfo,
  workExperience,
  summary,
  addWorkExp,
  addEduFields,
}) {
  return (
    <div
      id="resume-showcase-container"
      className="bg-indigo-300 w-1/2 h-[98vh] text-9x1  mt-1 "
    >
      <div
        id="resume-showcase-page-parent"
        className="grid grid-rows-6 grid-cols-4 h-[99vh] w-[90vh] bg-gray-300 ml-10 rounded-xl gap-x-2 gap-y-3"
      >
        <div
          id="name-job-title-container"
          className="flex flex-col w-auto h-auto bg-gray-50 items-center justify-center gap-1  col-start-1 col-end-5 "
        >
          <div id="name-container" className="flex flex-row gap-4">
            <h1
              id="first-name"
              className="font-[roboto] font-medium text-5xl text-gray-500"
            >
              {personalInfo.firstName}
            </h1>
            <h1
              id="last-name"
              className="font-[roboto] font-medium text-5xl text-gray-500"
            >
              {personalInfo.lastName}
            </h1>
          </div>
          <h2
            id="job-title"
            className="font-[roboto] font-medium text-2xl text-gray-500"
          >
            {workExperience.jobTitle}
          </h2>
        </div>
        <div
          id="education-personal-container"
          className="bg-gray-300 h-auto w-auto col-start-1 row-start-2 row-end-7 text-gray-700 font-[roboto] ml-2 mt-5 grid grid-rows-30 grid-cols-8 m-0 p-0 row-start-1"
        >
          {personalInfo.city !== "" ? "Contact " : null}
          <ShowcaseEducationPersonalInfo
            addEduFields={addEduFields}
            personalInfo={personalInfo}
            educationInfo={educationInfo}
          />
        </div>

        <div
          id="summary-workExp-container"
          className="h-auto w-auto bg-gray-50 row-start-2 row-end-7 col-start-2 col-end-5 rounded-tl-lg grid grid-rows-16 grid-cols-10 p-5"
        >
          <ShowcaseSummaryWorkExp
            summary={summary}
            workExperience={workExperience}
            addWorkExp={addWorkExp}
          />
        </div>
      </div>
    </div>
  );
}
