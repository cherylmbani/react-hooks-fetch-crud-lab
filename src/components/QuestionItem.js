import React from "react";

function QuestionItem({ question, onDeleteQuestion, onQuestionUpdate}) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={(e)=>onQuestionUpdate(id,parseInt(e.target.value))}>{options}</select>
      </label>
      <button onClick={()=>onDeleteQuestion(id)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
