export default function FormForwardButton({ idArr, formId, setFormId }) {
  const handleOnClick = function () {
    setFormId(formId + 1);
  };
  const buttonPlaceholder = idArr[formId];
  const handlePrevOnClick = function () {
    setFormId(formId - 1);
  };

  if (formId >= 1) {
    return (
      <>
        <button id="prevForm" className="" onClick={handlePrevOnClick}>
          {"Back"}{" "}
        </button>
        <button
          id="formForwardButton"
          className="bg-gradient-to-r from-blue-500 to-indigo-400 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 "
          onClick={handleOnClick}
          disabled={formId===idArr.length}
        >
          {"Next: " + buttonPlaceholder}
          
        </button>
      </>
    );
  } 
   
return (
    <button
      id="formForwardButton"
      className="bg-gradient-to-r from-blue-500 to-indigo-400 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 "
      onClick={handleOnClick}
    >
      {"Next: " + buttonPlaceholder}
    </button>
  );










  }
  