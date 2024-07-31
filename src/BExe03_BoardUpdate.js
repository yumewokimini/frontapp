import { useNavigate, useParams,Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function BoardUpdate(){
    let Params = useParams();
    let [Lists, setList] = useState({});
    const navigator = useNavigate();

    const handlupdate = ()=>{
        axios.put("http://localhost/board" + Params.BoardNo, Lists);
        navigator("/BoardList");
    }

    const handleChang = (event) => {
        setList({ ...Lists, [event.target.name]: event.target.value });
    };
    

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

    return <>
      <form>
        <div>
          <span>
            게시판 번호 : 
            <input name="boardNo" value={Lists.boardNo} onChange={handleChang}/>
          </span>
        </div>
        <div>
          <span>
            게시판 제목 : 
            <input name="title" value={Lists.title} onChange={handleChang}/>
          </span>
        </div>
        <div>
          <span>
            게시판 내용 : 
            <input name="content" value={Lists.content} onChange={handleChang}/>
          </span>
        </div>
        <div>
          <span>
            게시판 작성자 : 
            <input name="wdt" value={Lists.wdt} onChange={handleChang}/>
          </span>
        </div>
        <div>
          <span>
            게시판 작성일자 : 
            <input value={Lists.writer} onChange={handleChang}/>
          </span>
        </div>
        <button type="button" onClick={handlupdate}>수정</button>
      </form>
    </>
}