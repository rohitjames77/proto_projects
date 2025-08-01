export default function FormForwardButton({ idArr, formId, setFormId }) {
  const handleOnClick = function () {
    setFormId((formId + 1));
  };
  const buttonPlaceholder = idArr[formId];
  const handlePrevOnClick = function (){
    setFormId((formId-1))
  }
  if (formId == idArr.length-2) {
    return (
      <>
      <button
        disabled
        id="formForwardButton"
        className="bg-gradient-to-r from-blue-500 to-indigo-400 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 "
        onClick={handleOnClick}
      >
        {"Next: " + buttonPlaceholder}
      </button>


      <button id="prevForm" className="" onClick={handlePrevOnClick}  >{"Back"} </button>
    
    </>
    );
  }

  return (
    <button id="formForwardButton" className="bg-gradient-to-r from-blue-500 to-indigo-400 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 " onClick={handleOnClick}>
      {"Next: " + buttonPlaceholder}
    </button>
  );
}


