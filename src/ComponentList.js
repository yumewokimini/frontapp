import { useState, useEffect } from "react";

export default function ComponentList(props) {
  let [List, setList] = useState([]);

  function callApi() {
    fetch("http://localhost/customer")
      .then((Result) => Result.json())
      .then((Result) => {
        setList(Result);
      });
  }

  useEffect(() => {
    callApi();
  }, []);//의존성 배열

  return (
    <>
      {List.map((idx) => (
        <div key={idx.id}>
          <span>{idx.id}</span>
          <span>
            <a
              id={idx.id}
              href="/"
              onClick={(event) => {
                event.preventDefault();
                props.onClick(event.target.id);
              }}
            >
              {idx.name}
            </a>
          </span>
          <span>{idx.email}</span>
          <span>{idx.phone}</span>
        </div>
      ))}
    </>
  );
}
