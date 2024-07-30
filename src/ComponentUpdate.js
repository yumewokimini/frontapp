import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";

export default function ComponentUpdate(props) {
  let [List, setList] = useState([]);

  function callApi() {
    if(!props.id){
        return;
    }
    fetch("http://localhost/customer/" + props.id)
      .then((Result) => Result.json())
      .then((Result) => setList(Result[0]));
  }

  useEffect(() => {
    callApi();
  }, [props]);

  return (
    <>
      <form>
        <Button type="button" className="btn-success">저장</Button>
        <Button type="reset">초기화</Button>
        <Button type="reset">삭제</Button>
        <div>
          아이디<input name="id" type="text" value={List.id}></input>
        </div>
        <div>
          이름<input name="name" type="text" value={List.name}></input>
        </div>
        <div>
          이메일<input name="email" type="text" value={List.email}></input>
        </div>
        <div>
          휴대폰 번호<input name="phone" type="text" value={List.phone}></input>
        </div>
      </form>
    </>
  );
}
