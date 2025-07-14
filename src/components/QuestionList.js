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

  

  function handleDeleteItem(id){
    fetch(`http://localhost:4000/questions/${id}`,{
      method: "DELETE"
    })
    .then(data=>{
      console.log(data);
      const updatedQuestions=questions.filter((question)=>{
        return question.id!==id;
      })
      setQuestions(updatedQuestions)
    })

    
  }

  function handleQuestionUpdate(id, newCorrectIndex){
      fetch(`http://localhost:4000/questions/${id}`,{
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify({
          correctIndex: newCorrectIndex,
        }),
      })
      .then(r=>r.json())
      .then(updatedQuestion=>{
        const updatedQuestions=questions.map((question)=>{
          return question.id===updatedQuestion.id?updatedQuestion:question
        })
        setQuestions(updatedQuestions);
        
      })
    }
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question)=>(
        < QuestionItem key={question.id} question={question} onDeleteQuestion={handleDeleteItem} onQuestionUpdate={handleQuestionUpdate}/>
    ))}
       </ul>
    
      
    </section>
  );
}

export default QuestionList;
