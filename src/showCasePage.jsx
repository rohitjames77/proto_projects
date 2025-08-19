export default function ShowCasePage ({personalInfo,educationInfo,workExperience,summary}){
    return (
<div id="form-showcase-container" className="bg-indigo-300 w-1/2 h-full text-9x1 row-start-2 col-start-2 col-end-3 ">
<div id="resume-showcase-page" className="h-[95vh] w-[90vh] bg-gray-50 ml-10 mt-5 rounded-xl">
<div id="name-container" className="flex flex-row w-full h-[10vh] bg-sky-300 items-center justify-center gap-5">
<h1 id="first-name" className="font-[roboto] font-medium text-5xl text-gray-500">{personalInfo.firstName}</h1>
<h1 id="last-name" className="font-[roboto] font-medium text-5xl text-gray-500">{personalInfo.lastName}</h1>
<h2 id="job-title"className="font-[roboto] font-medium text-3xl text-gray-500">{workExperience.jobTitle}</h2>
</div>



























</div>
</div>



    )
}