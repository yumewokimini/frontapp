import { useContext } from "react";
import Replys from "./Replys";
// import {LoginContext} from "./context";

function Item({ name, isPacked }) {
    <li className="item">
      {name} {isPacked && "✔"}
    </li>;
  <li className="item">
      {isPacked ? name + ' ✔' : name}
  </li>
  if (isPacked) {
      return (
      <li className="item">{name} ✔</li>
      );
  }
  return (<li className="item">{name}</li>);
  if (isPacked) {
    return (
      <li className="item">
        {name}
        {isPacked && "✔"}
      </li>
    );
  }
  return <li className="item">{name}</li>;
}

function Itmes({ todos }) {
  // const login = useContext(LoginContext);
  const item = todos.map((ele, idx) => (
    <Item key={idx} name={ele.name} isPacked={ele.isPacked} />
    // <Itme ...ele/>
  ));
  return
  // login : {login.userid}
  <>{item}</>;
}

export default function Packing() {
  // const login = useContext(loginContext);
  let todos = [
    { name: "Space suit", isPacked: true },
    { name: "Helmet with a golden leaf", isPacked: true },
    { name: "Photo of Tam", isPacked: false },
  ];

  const replyList = [
    { id: 1, title: "첫번째 글", writer: " 홍길동" },
    { id: 2, title: "두번째 글", writer: " 춘향이" },
    { id: 3, title: "셋번째 글", writer: " 어째든 댓글" },
  ];

  return (
    <section>
      <ul>
        <h1>Sally Ride's Packing List</h1>

        <ul>
          <Itmes todos={todos} />
        </ul>
      
        <h2>댓글리스트</h2>
        <Replys datas={replyList} />
      </ul>
    </section>
  );
}

//Replys 이름의 값이 datas이기때문에 받는곳도 datas여야함.
//        <h1>로그인 : {login.userid}</h1>
//<LoginContext.provider value={{userid:"김유신"}}>
//</LoginContext.provider>