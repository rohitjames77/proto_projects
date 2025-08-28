export default function FormForwardButton({ idArr, formId, setFormId }) {
  const handleOnClick = function () {
    setFormId((formId) => formId + 1);
    
  };
  
  
   const buttonPlaceholder = idArr[formId];
  const handlePrevOnClick = function () {
    setFormId((formId) => formId - 1);
  };


  return (
    <div
      className="w-full h-[10vh] flex flex-row bg-gray-300 items-center"
      id="form-forward-container "
    >
      <button
        id="prevForm"
        className="h-[70%] w-full bg-gradient-to-r from-blue-400 to-violet-600 hover:bg-gradient-to-l from-blue-400 to-violet-600 active:shadow-2xl active:shadow-gray-400 active:border-none active:translate-x-[4px] active:translate-y-[4px] ml-2 mb-3 mr-3 mt-3 "
        onClick={handlePrevOnClick}
      disabled ={formId<1}
      >Previous</button>
      <button
        id="formForwardButton"
        className=" h-[70%] w-full bg-gradient-to-r from-blue-400 to-violet-600 hover:bg-gradient-to-l from-blue-400 to-violet-600 active:shadow-2xl active:shadow-gray-400 active:border-none active:translate-x-[4px] active:translate-y-[4px] ml-2 mb-3 mr-3 mt-3 "
        onClick={handleOnClick}
        disabled={formId>=3}
      >
        {buttonPlaceholder}
      </button>
    </div>
  );
}
