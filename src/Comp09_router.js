import { Routes, Route, NavLink, useParams } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}

var contents = [
  { id: 1, title: "HTML", description: "HTML is.." },
  { id: 2, title: "JS", description: "JS is.." },
  { id: 3, title: "React", description: "React is.." },
  { id: 4, title: "test", description: "React is.." },
];

function Topics() {
  const list = contents.map((idx) => (
    <li>
      <NavLink to={"/topics/" + idx.id}>{idx.title}</NavLink>
    </li>
  ));

  return (
    <div>
      <h2>Topics</h2>
      <ul>{list}</ul>
      <Routes>
        <Route path="/:topic_id" element={<Topic />}></Route>
      </Routes>
    </div>
  );
}

function Topic() {
  let param = useParams();
  let content = contents.find((ele) => ele.id === Number(param.topic_id));
  return (
    <>
      {param.topic_id} {content.description}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Hello react router DOM</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/topics">Topics</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/topics/*" element={<Topics />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/*" element={"Not Found"}></Route>
      </Routes>
    </div>
  );
}

export default App;
