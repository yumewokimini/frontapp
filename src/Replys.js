function Reply(idx){
    return(
    <>
        <span>{idx.id}</span>
        <span>{idx.title}</span>
        <span>{idx.writer}</span>
    </>
    );
}

export default function Replys({ datas }) {
  return datas.map((idx) => (
    <div key={idx.id}>
        <Reply {...idx}/>
    </div>
  ));
}
