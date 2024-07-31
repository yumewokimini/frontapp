import { useState } from "react";

function Header(props) {
  //   function handlerClick(event) {
  //     event.preventDefault();
  //     alert(title);
  //   }

  const handlerClick = (event) => {
    event.preventDefault();
    props.onChangeMode();
  };
  return (
    <>
      <header>
        <h1>
          <a href="/" onClick={handlerClick}>
            {props.title}
          </a>
        </h1>
      </header>
    </>
  );
}

function Nav({ topic, onChangeMode }) {
  const list = topic.map((idx, key) => (
    <li key={idx.id}>
      <a
        id={idx.id}
        href={"/read/" + idx.id}
        onClick={(event) => {
          event.preventDefault();
          onChangeMode(Number(event.target.id));
        }}
      >
        {idx.title}
      </a>
    </li>
  ));
  return (
    <nav>
      <ol>{list}</ol>
    </nav>
  );
}

function Article(props) {
  return (
    <>
      <article>
        <h2>{props.title}</h2>
        {props.body}
      </article>
    </>
  );
}

function Create({ onCreate }) {
  return (
    <article>
      <h2>Create</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          const title = event.target.title.value;
          const body = event.target.body.value;

          onCreate(title, body);
        }}
      >
        <p>
          <input name="title" placeholder="title"></input>
        </p>
        <p>
          <input name="body" placeholder="body"></input>
        </p>
        <p>
          <input type="submit" value="create"></input>
        </p>
      </form>
    </article>
  );
}

function Update(props) {
  return (
    <article>
      <h2>Update</h2>
      <form>
        <p>
          <input name="title" placeholder="title" value={props.title}></input>
        </p>
        <p>
          <input name="body" placeholder="body" value={props.body}></input>
        </p>
        <p>
          <input type="submit" value="Update"></input>
        </p>
      </form>
    </article>
  );
}

export default function Book(props) {
  let [topic, setTopoic] = useState([
    { id: 1, title: "html", body: "html is.." },
    { id: 2, title: "css", body: "css is .." },
    { id: 3, title: "js", body: "js is .." },
  ]);

  let [mode, setMode] = useState("WELCOME");
  let [id, setId] = useState(2);
  let content;

  let [lastId, setLastId] = useState(4);

  if (mode === "CREATE") {
    content = (
      <Create
        onCreate={(title, body) => {
          setTopoic([...topic, { id: lastId, title, body }]);
          setLastId(lastId + 1);
        }}
      />
    );
  } else if (mode === "UPDATE") {
    content = <Update title="참쉽죠?" body="모코코!" />;
  } else if (mode === "WELCOME") {
    content = (
      <>
        <Article title="WELCOME" body="Hello, Web" />
        <button
          onClick={() => {
            setMode("CREATE");
          }}
        >
          create
        </button>
      </>
    );
  } else if (mode === "READ") {
    let { title, body } = topic.find((ele) => ele.id === id);

    content = (
      <>
        <Article title={title} body={body} />
        <button
          onClick={() => {
            setMode("UPDATE");
          }}
        >
          update
        </button>
      </>
    );
  }

  return (
    <>
      <Header
        title="React"
        onChangeMode={() => {
          setMode("WELCOME");
        }}
      />
      <Nav
        topic={topic}
        onChangeMode={(_id) => {
          setMode("READ");
          setId(_id);
        }}
      />
      {content}
    </>
  );
}
