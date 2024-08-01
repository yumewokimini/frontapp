import { legacy_createStore as createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

// 1.reduce 선언
function reducer(currentState, action) {
  if (currentState === undefined) {
    return { number: 1 };
  }
  const newState = { ...currentState }; //스테이트 불편의 원칙 => 복제해서 값 변경 =>스테이트 교체

  if (action.type === "Up") {
    newState.number = newState.number + 1;
  } else if (action.type === "Down") {
    newState.number = newState.number - 1;
  }
  return newState;
}

// 2.스토어에 저장
const store = createStore(reducer, { number: 1 });

export default function App() {
  return (
    <>
      <div id="container">
        <h1>Root</h1>
        <div id="grid">
          <Provider store={store}>
            <Left1 />
            <Right1 />
          </Provider>
        </div>
      </div>
    </>
  );
}

function Left1(props) {
  return (
    <div>
      <h1>Left1</h1>
      <Left2 />
    </div>
  );
}

function Left2(props) {
  return (
    <div>
      <h1>Left2</h1>
      <Left3 />
    </div>
  );
}

function Left3(props) {
  const number = useSelector((state) => state.number);
  return (
    <div>
      <h1>Left3:{number}</h1>
    </div>
  );
}

function Right1(props) {
  return (
    <div>
      <h1>Right1</h1>
      <Right2 />
    </div>
  );
}

function Right2(props) {
    const dispach = useDispatch();
  return (
    <div>
      <h1>Right2</h1>
      <input
        type="button"
        value="-"
        onClick={() => {
          dispach({ type: "Down" });
        }}
      />
      <Right3 />
      
    </div>
  );
}

function Right3(props) {
  const dispach = useDispatch();
  return (
    <div>
      <h1>Right3</h1>
      <input
        type="button"
        value="+"
        onClick={() => {
          dispach({ type: "Up" });
        }}
      />
      
    </div>
  );
}
