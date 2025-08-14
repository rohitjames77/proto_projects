
export default function SummaryForm({summary,setSummary}){
  const handleOnChange = function (event) {
    const { id, value } = event.target;
    setSummary({ ...summary, [id]: value });
  };
return(

<textarea id="summary-form" className="" onChange={handleOnChange} required maxLength={200}>

</textarea>

)

}