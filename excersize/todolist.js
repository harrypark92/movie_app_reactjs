import {useState, useEffect} from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDoArray, setToDoArray] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === ""){
      return;
    }
    console.log(toDo);
    setToDoArray((currentArray)=>([toDo, ...currentArray]));
    setToDo("");
  }
  console.log(toDoArray);
  
  return (
    <div>
      <h1>My To Dos : {toDoArray.length}</h1>
      <form onSubmit={onSubmit}>
      <input 
      onChange = {onChange} 
      value={toDo}
      type={'text'}
      placeholder='Write your to do...'/>
      <button>
        Add To Do
      </button>
      </form>
      <hr />
      <ul>
        {toDoArray.map((x,idx) => <li key={idx}>{x}</li>)}
      </ul>
    </div>
  );
}

export default App;