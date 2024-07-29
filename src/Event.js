function Button({ children,onClick}) {
  return <button onClick={onClick} >{children}</button>;
}

function PlayButton({ children }) {
  return (
    <Button
      onClick={() => {
        alert("play");
      }}
    >
      {children}
    </Button>
  );
}

function UploadButton({ children }) {
  return (
    <Button
      onClick={() => {
        alert("upload");
      }}
    >
      {children}
    </Button>
  );
}

export default function Toolbar() {
  return (
    <>
      <PlayButton>play</PlayButton>
      <UploadButton>upload</UploadButton>
    </>
  );
}
