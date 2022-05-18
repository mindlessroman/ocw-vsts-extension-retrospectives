import SubmitButtonContainer from "./submitButtonContainer";

export default function QuestionInputContainer() {
  return (
    <div className='retro-form'>
      <h1 className="text-3xl font-bold text-left">
        Radar Chart Retrospective
      </h1>
      <label className="block">
        <span className="text-gray-700">Name of Retrospective:</span>
        <input type="text" className="mt-1 block w-full" placeholder="" />
      </label>
      <SubmitButtonContainer />
    </div>
  );
}