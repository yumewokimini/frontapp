import styled from "styled-components";

const ReactButton = (props) => {
  return <button className={props.className}>{props.children}</button>;
};

const ReactLargeButton = styled(ReactButton)`
  font-size: 20px;
  color: tomato;
`;

const PrimaryBuuton = styled(ReactButton)`
  color: ${function (props) {
    return props.stoc<20 ? "blue" : "red";
  }};
`;

export default function App() {
  return (
    <>
      <ReactLargeButton >스타일 버튼</ReactLargeButton>
      <PrimaryBuuton stoc = "10">function버튼</PrimaryBuuton>
      <PrimaryBuuton stoc = "50">function버튼</PrimaryBuuton>
    </>
  );
}
