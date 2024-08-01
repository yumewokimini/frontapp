import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function BoardList() {
  let [Lists, setList] = useState([]); // * setList는 덮어 쓰기
  let [lastPage, setLastPage] = useState(1);

  const location = useLocation();
  const search = new URLSearchParams(location.search); //?name= aaa&age=9&page=1
  const p_page = search.get("page");
  const page = p_page === null ? 1 : Number(p_page);

  function CallAPI() {
    fetch("http://localhost/board?page=" + page)
      .then((Result) => Result.json())
      .then((Result) => {
        {
          setList(Result.list);
          setLastPage(Math.ceil(Result.total / 10));
        }
      });
  }

  useEffect(() => {
    CallAPI();
  }, [page]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>게시판 번호</th>
            <th>게시판 이름</th>
            <th>게시판 작성자</th>
            <th>게시판 작성일자</th>
          </tr>
        </thead>
        <tbody>
          {Lists.map((idx) => (
            <tr key={idx.boardNo}>
              <td>{idx.boardNo}</td>
              <td>
                <Link to={"/BoardComponent/BoardInfo/" + idx.boardNo}>{idx.title}</Link>
              </td>
              <td>{idx.writer}</td>
              <td>{idx.wdt}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {[...Array(lastPage)].map((p , idx) => (
        <Link to={"/BoardComponent/boardList?page=" + (idx+1)}>{idx+1}</Link>
      ))}
    </>
  );
}
