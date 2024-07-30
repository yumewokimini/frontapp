import { useState, useEffect } from "react";

function Todo({ Todos }) {
  //for,map -->
  const todoList = Todos.map((ele) => <div key={ele.id}>{ele.title}</div>);
  return <>{todoList}</>;
}



export default function EffectComponent() {
  let [count, setCount] = useState(1);
  let [Todos, setTodos] = useState([]);

  function callAPI() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        setTodos(json); //state 변경하면 리랜더링
      });
  }

  //랜더링 후에 한번만 실행하도록함
  useEffect(() => {
    // setCount(count + 1); //dom update => 함수실행 => useEffect 무한 루프
    callAPI();
    console.log("effect");
    return ()=>{
        console.log("Clean up");
    }
  }, [count]);

  return (
    <>
      <h1>side effect(부수효과)</h1>
      <div>{count}</div>
      <div>
        <Todo Todos={Todos} />
      </div>
    </>
  );
}
