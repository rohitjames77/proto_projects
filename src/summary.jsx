
export default function SummaryForm({summary,setSummary}){
  const handleOnChange = function (event) {
  setSummary(summary = event.target.value)
  };
return(
<div id="summary-container" className="bg-gray-100 w-full h-[80vh] text-gray-400 text-xl rounded-r-lg ">
<label htmlFor="summary">Describe your Career Objective....</label>
<textarea id="summary" className="" value={summary} onChange={handleOnChange} required maxLength={200}>
</textarea>
</div>
)

}