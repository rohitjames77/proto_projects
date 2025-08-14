export default function FormForwardButton({ idArr, formId, setFormId }) {
  const handleOnClick = function () {
    setFormId((formId) => formId + 1);
    
    console.log("after click: " + formId);
    console.log(typeof formId);
  };
  console.log("before click: " + formId);
  
   const buttonPlaceholder = idArr[formId];
  const handlePrevOnClick = function () {
    setFormId((formId) => formId - 1);
  };


  return (
    <div
      className="w-full h-full flex flex-row gap-4"
      id="form-forward-container "
    >
      <button
        id="prevForm"
        className="bg-gradient-to-r from-lime-300 to-emerald-500 w-1/3 h-auto ml-2 mb-3"
        onClick={handlePrevOnClick}
      disabled ={formId<1}
      >Previous</button>
      <button
        id="formForwardButton"
        className="bg-gradient-to-r from-lime-300 to-emerald-500 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 "
        onClick={handleOnClick}
        disabled={formId>=3}
      >
        {"Next: " + buttonPlaceholder}
      </button>
    </div>
  );
}
