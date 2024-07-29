import "./App.css";
import Toolbar from "./Event";

//컴포넌트
function Header({ title, color = "blue", onChangeMode }) {//props
  // const clickHandler(event) => {
  //   event.preventDefault();
  //   alert("클릭됨");
  //   onChangeMode();
  // }


  return (
    <header>
      <h2 style={{ color: color }}>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            alert("클릭됨");
            onChangeMode();//props.onCan...
          }}
        >
          {title}
        </a>
      </h2>
    </header>
  );
}

function Nav({ topics }) {
  const list = topics.map((i) => <li>{i.title}</li>);
  // const list = [];

  // for( let i =0; i<topic.length; i++){
  //   list.push(<li>{topic[i].title}</li>)
  // }
  return (
    <nav>
      <ol>{list}</ol>
    </nav>
  );
}

function Article({ content, fruits }) {
  const frulist = fruits.map((i) => <li>{i}</li>);

  return (
    <article>
      <h2>{content.title}</h2>
      {content.body},{content.name}
      <ul>{frulist}</ul>
    </article>
  );
}

const topic = [
  { id: 1, title: "html", body: "html is.." },
  { id: 2, title: "css", body: "css is .." },
  { id: 3, title: "js", body: "js is .." },
];

function Avatar({ name, width, height, src }) {
  return (
    <img
      className="avatar"
      src={src}
      alt={name}
      width={width}
      height={height}
    />
  );
}

function Profile(props) {
  return <Avatar {...props} />;
}

function App() {
  return (
    <div className="App">
      <Header
        title="참 쉽죠?"
        onChangeMode={(event) => {
          alert("이벤트 전달");
        }}
      />
      <Nav topics={topic} />
      <Toolbar/>
      <Article
        content={{ title: "Hello", body: "welcome", name: "Tom" }}
        fruits={["바나나", "사과", "포도"]}
      />
      <Profile name="톰" width="100" height="100" src="1.webp" />

      
    </div>
  );
}

export default App;
