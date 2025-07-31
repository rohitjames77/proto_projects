
 export default function FormForwardButton ({idArr,formId,setFormId}){
    // console.log(idArr);
    // console.log(formId);
 
    
const handleOnClick = function (){
    setFormId((formId+1) % idArr.length);
       
}


    return(
    <button id='nextForm' className="" onClick={handleOnClick}>{formId}</button>
)
}



 export function FormBackButton({formId,setFormId}){

}