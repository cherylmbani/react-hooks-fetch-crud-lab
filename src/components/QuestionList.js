import React, {useEffect, useState} from "react";
import QuestionForm from "./QuestionForm";
import QuestionItem from "./QuestionItem";

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

  function handleDeleteItem(id){
    fetch(`http://localhost:4000/questions/${id}`,{
      method: "DELETE"
    })
    .then(r=>r.json())
    .then(data=>{
      console.log(data);
      const updatedQuestions=questions.filter((question)=>{
        return question.id!==id;
      })
      setQuestions(updatedQuestions)
    })
  }
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question)=>(
        < QuestionItem key={question.id} question={question} onDeleteQuestion={handleDeleteItem}/>
    ))}
       </ul>
       <QuestionForm onUpdateQuestion={handleSubmitQuestion} />
      
    </section>
  );
}

export default QuestionList;
