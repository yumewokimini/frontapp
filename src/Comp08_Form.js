import { useState, useRef } from "react";

//state,ref,event => form field

export default function App() {
  //   let [Message, setMessage] = useState("");
  //   let [Email, setEmail] = useState("");
  let [Form, setForm] = useState({ Message: "", Email: "" });
  let inputMessage = useRef(); //document.getElementByid("");

  // const handlerChange = (event)=>

  function HandlerChange(event) {
    setForm({ ...Form, [event.target.name]: event.target.value });
  }

  return (
    <>
      {Form.Message}
      {Form.Email}
      <form>
        <div>
          <input
            name="Message"
            value={Form.Message}
            onChange={HandlerChange}
            ref={inputMessage}
          ></input>
        </div>
        <div>
          <input
            name="Email"
            value={Form.Email}
            onChange={(event) => {
              setForm({ ...Form, [event.target.name]: event.target.value });
            }}
          ></input>
        </div>
        <div>
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault();
              setForm({Message:"", Email :""});
              console.log(inputMessage)
              inputMessage.current.focus();//inputMessage.current는 위의 ref={inputMessage}의 위치를 가르침

            }}
          >
            확인
          </button>
        </div>
      </form>
    </>
  );
}
