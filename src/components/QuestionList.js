import React, {useEffect, useState} from "react";
import QuestionForm from "./QuestionForm";

function QuestionList() {
  const [questions, setQuestions]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then(r=>r.json())
    .then(data=>{
      console.log(data);
        setQuestions(data)
      
    })

  }, [] )

  function handleSubmitQuestion(newQuestion){
    console.log("updates");
    setQuestions([...questions, newQuestion]);
  }
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question)=>{
        return (<li key={question.id}>{question.prompt}
       </li>
      )
    })}
       </ul>
       <QuestionForm onUpdateQuestion={handleSubmitQuestion} />
    </section>
  );
}

export default QuestionList;
