import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const[questions, setQuestions]=useState([]);

  function handleSubmitQuestion(newQuestion){
    console.log("updates");
    setQuestions((prevQuestions)=>[...prevQuestions,newQuestion])
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ?
      <QuestionForm onUpdateQuestion={handleSubmitQuestion} />
      :<QuestionList questions={questions} setQuestions={setQuestions} />  
      }
    </main>
  );
}

export default App;
