import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function BoardInsert() {
  let [form, setForm] = useState({});

  const navigator = useNavigate();

  const handleChang = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handlerSave = async () => {
    //ajax등록 요청
    await axios.post("http://localhost/board", form);
    //목록 처리
    navigator("/BoardList");
  };
  return (
    <>
      <h3>게시판 등록</h3>
      <form>
        제목
        <input name="title" value={form.title} onChange={handleChang} />
        <div>
          <span>
            작성자
            <input name="wdt" value={form.wdt} onChange={handleChang} />
          </span>
        </div>
        <div>
          <span>
            내용
            <input name="content" value={form.content} onChange={handleChang} />
          </span>
        </div>
        <button type="button" onClick={handlerSave}>
          저장
        </button>
      </form>
    </>
  );
}
