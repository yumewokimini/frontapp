import { Routes, Route, NavLink } from "react-router-dom";
import BoardInfo from "./BExe03_BoardInfo";
import BoardList from "./BExe03_BoardList";
import BoardUpdate from "./BExe03_BoardUpdate";
import BoardInsert from "./BExe03_BoardInsert";

/*
link to = '/boardinsert buttoun 글쓰기 buttoun link
td link to boardinfo/${Ppost.id}

<Routes>
    <route path="/boardinfo/"seq"...

    const{seq} = useparams()
    funstion callapi(){
    }
    useEffact
    */
export default function App() {
  return (
    <>
      <ul>

        <li><NavLink to="./BoardList">BoardList</NavLink></li>
        <li><NavLink to="./BoardInsert">BoardInsert</NavLink></li>
      </ul>


      <Routes>
        <Route path="/BoardInfo/:BoardNo" element={<BoardInfo />}></Route>
        <Route path="/BoardList" element={<BoardList />}></Route>
        <Route path="/BoardUpdate/:BoardNo" element={<BoardUpdate />}></Route>
        <Route path="/BoardInsert" element={<BoardInsert />}></Route>
      </Routes>
    </>
  );
}
