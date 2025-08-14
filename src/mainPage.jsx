import { useState } from "react";
import MainForm from "./form"
import ProgressBar from "./progressBar"
import ShowCasePage from "./showCasePage"
import FormForwardButton from "./changeForm";





export default function MainPage (){
    const [formId, setFormId] = useState(0);
    const idArr = ["Education", "Work experience", "Summary", "Save"];

return (
    <div id="main-page-container" className=" h-screen w-screen flex flex-row ">
<div id="progess-form-container" className="flex flex-col h-screen w-1/2">
<ProgressBar/>
     <MainForm  formId={formId} setFormId={setFormId}/>
     <FormForwardButton  formId={formId} setFormId={setFormId} idArr={idArr}/>
     </div>
     <ShowCasePage/>
</div>
)
}