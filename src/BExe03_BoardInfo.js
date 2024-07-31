import { useNavigate, useParams,Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function BoardInfo() {
  let Params = useParams();
  let [Lists, setList] = useState({});
  const navigator = useNavigate();

  const handlerDelete = (event)=>{
    if(window.confirm("삭제할까요?")){
        axios.delete("http://localhost/board/" + Params.BoardNo);
        navigator("/BoardList");
    }
  }

  function CallAPI() {
    fetch("http://localhost/board/" + Params.BoardNo)
      .then((Result) => Result.json())
      .then((Result) => {
        setList(Result[0]);
      });
  }

  useEffect(() => {
    CallAPI();
  }, []);
  return (
    <>
      <form>
        <div>
          <span>
            게시판 번호 : {Lists.boardNo}
          </span>
        </div>
        <div>
          <span>
            게시판 제목 : {Lists.title}
          </span>
        </div>
        <div>
          <span>
            게시판 내용 : {Lists.content} 
          </span>
        </div>
        <div>
          <span>
            게시판 작성자 : {Lists.wdt}
          </span>
        </div>
        <div>
          <span>
            게시판 작성일자 : {Lists.writer}
          </span>
        </div>
        <Link to={"/BoardUpdate/"+Params.BoardNo}>
        <button type="button">수정</button></Link>
        <button type="button" onClick={handlerDelete}>삭제</button>
      </form>
    </>
  );
}
