import { FC, useState } from "react";
import styled from "styled-components";
import styles from "./MainView.module.scss";

/////////////////////////////// initial render //// rerender
// inline style                  300                 156
//
// scss                          260                 154
//
// styled components             455                 325
//
// styled components w 2 props   520                 395
//
// styled components w 6 props   650                 500

const Div1: FC = () => {
  return <div style={{ fontSize: 12, color: "black" }}>Hey</div>;
};

const Div2: FC = () => {
  return <div className={styles["button-style"]}>Hey</div>;
};

const Div3 = styled.div`
  font-size: 12px;
  color: black;
`;

const Div4 = styled.div<{ fontSize: number; color: "black" }>`
  font-size: ${(p) => p.fontSize}px;
  color: ${(p) => p.color};
`;

const Div5 = styled.div<{
  fontSize: number;
  color: "black";
  fontWeight: number;
  width: string;
  height: string;
  backgroundColor: string;
}>`
  font-size: ${(p) => p.fontSize}px;
  color: ${(p) => p.color};
  font-weight: ${(p) => p.fontWeight};
  width: ${(p) => p.color};
  height: ${(p) => p.height};
  background-color: ${(p) => p.backgroundColor};
`;

const Test1: FC = () => {
  const [_, setState] = useState(0);
  const tests = Array.from({ length: 10000 }).map((_, i) => (
    <Div1 key={i} />
  ));
  return (
    <>
      <button onClick={() => setState((p) => p + 1)}>Rerender</button>
      {tests}
    </>
  );
};

const Test2: FC = () => {
  const [_, setState] = useState(0);
  const tests = Array.from({ length: 10000 }).map((_, i) => (
    <Div2 key={i} />
  ));
  return (
    <>
      <button onClick={() => setState((p) => p + 1)}>Rerender</button>
      {tests}
    </>
  );
};

const Test3: FC = () => {
  const [_, setState] = useState(0);
  const tests = Array.from({ length: 10000 }).map((_, i) => (
    <Div3 key={i}>Hey</Div3>
  ));
  return (
    <>
      <button onClick={() => setState((p) => p + 1)}>Rerender</button>
      {tests}
    </>
  );
};

const Test4: FC = () => {
  const [_, setState] = useState(0);
  const tests = Array.from({ length: 10000 }).map((_, i) => (
    <Div4 key={i} fontSize={12} color={"black"}>
      Hey
    </Div4>
  ));
  return (
    <>
      <button onClick={() => setState((p) => p + 1)}>Rerender</button>
      {tests}
    </>
  );
};

const Test5: FC = () => {
  const [_, setState] = useState(0);
  const tests = Array.from({ length: 10000 }).map((_, i) => (
    <Div5
      key={i}
      fontSize={12}
      color={"black"}
      fontWeight={500}
      backgroundColor={"transparent"}
      width={"100%"}
      height={"100%"}
    >
      Hey
    </Div5>
  ));
  return (
    <>
      <button onClick={() => setState((p) => p + 1)}>Rerender</button>
      {tests}
    </>
  );
};

export const MainView: FC = () => {
  const [toggle, setToggle] = useState<
    | "inline style"
    | "scss"
    | "styled components"
    | "styled components with props"
    | "styled components many props"
  >("inline style");

  return (
    <div>
      <div style={{ fontSize: 16, color: "black" }}>
        {"Active:"}
        {toggle}
      </div>
      <div style={{ display: "flex" }}>
        <button
          style={{ width: 100, height: 100, backgroundColor: "yellow" }}
          onClick={() => setToggle("inline style")}
        >
          Inline style
        </button>
        <button
          style={{ width: 100, height: 100, backgroundColor: "yellow" }}
          onClick={() => setToggle("scss")}
        >
          Scss
        </button>
        <button
          style={{ width: 100, height: 100, backgroundColor: "yellow" }}
          onClick={() => setToggle("styled components")}
        >
          Styled components
        </button>
        <button
          style={{ width: 100, height: 100, backgroundColor: "yellow" }}
          onClick={() => setToggle("styled components with props")}
        >
          Styled components with props
        </button>
        <button
          style={{ width: 100, height: 100, backgroundColor: "yellow" }}
          onClick={() => setToggle("styled components many props")}
        >
          Styled components many props
        </button>
      </div>

      {toggle === "inline style" && <Test1 />}
      {toggle === "scss" && <Test2 />}
      {toggle === "styled components" && <Test3 />}
      {toggle === "styled components with props" && <Test4 />}
      {toggle === "styled components many props" && <Test5 />}
    </div>
  );
};