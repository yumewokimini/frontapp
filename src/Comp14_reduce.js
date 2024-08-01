import { type } from "@testing-library/user-event/dist/type";
import { useState, useReducer } from "react";
//상태 변경하는 과정을 리듀서함수 안에 은닉


function countReducer(Count, action) {
  if (action.type === "up") {
    return Count + action.number;
  } else if (action.type === "reset") {
    return action.number;
  } else if (action.type === "down") {
    return Count - action.number;
  }
}

export default function App() {
  //   let [Count, setCount] = useState(0);
  const [Count, dispatch] = useReducer(countReducer, 0);

  function up() {
    // setCount(Count + 1);
    dispatch({type:"up",number:10})
  }

  function reset() {
    // setCount((Count = 0));
    dispatch({type:"reset",number:0})
  }

  function down() {
    // setCount(Count - 1);
    dispatch({type:"down",number:10})
  }

  return (
    <>
      <div>
        <input type="button" value="-" onClick={down} />
        <input type="button" value="0" onClick={reset} />
        <input type="button" value="+" onClick={up} />
      </div>
      <div>
        <span>{Count}</span>
      </div>
    </>
  );
}
