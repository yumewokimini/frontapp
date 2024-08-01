// import { legacy_createStore as createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
import { counterSlice, store } from "./store";
import { loginSlice } from "./store";

// function reducer(state, action) {
//   if (action.type === "up") {
//     return { ...state, count: state.count + action.step };//복제해서 작업
//   }

//   return state;
// }

// const initialState = { count: 0 };
// let store = createStore(reducer, initialState);

function Counter() {
  //   const count = useSelector((state) => state.count);
  const count = useSelector((state) => state.counter.count);
  const dispach = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          //   dispach({ type: "up", step: 2 });
          //   dispach({ type: "counterSlice/up", step: 2 });
          dispach(counterSlice.actions.up(1));
        }}
      >
        +
      </button>{" "}
      {count}
    </div>
  );
}

function Mypage() {
  const name = useSelector((state) => state.login.username);
  const email = useSelector((state) => state.login.email);

  const dispach = useDispatch();

  return (
    <>
      <form>
        <h1>username : {name}</h1>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value)
            dispach({
                type:"loginSlice/setUsername",
                username:event.target.value
            });
          }}
        ></input>
        <h1>useremail : {email}</h1>
        {/* <button
          onClick={(event) => {
            dispach(loginSlice.actions.setUsername(event.target.value));
          }}
        >
          전송
        </button> */}
      </form>
    </>
  );
}

export default function App() {
  return (
    //1
    <Provider store={store}>
      <Counter></Counter>
      <Mypage></Mypage>
    </Provider>
  );
}
