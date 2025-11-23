import { useState } from 'jinx';
import './global.css';

const OneMore = () => ' ...hi';

const NestedStuff = () => (
  <span>
    <OneMore />
  </span>
);

const Button2: JSX.Function = ({ children }) => {
  let [count, setCount] = useState(1);

  return (
    <button
      onClick={() => {
        setCount(++count);
      }}
    >
      {/* {children} */}
      {count}
      {/* <NestedStuff /> */}
    </button>
  );
};

// render('hi', document.querySelector('main')!);
// render(4, document.querySelector('main')!);
// render(false && 'hi', document.querySelector('main')!);
// render([1, 'hi', false], document.querySelector('main')!);
// render(<Button2>push me!</Button2>, document.querySelector('main')!);

// const test = (
//   <>
//     <h1 style={{ color: 'green' }}>title</h1>
//     <Button2>push me!</Button2>
//     {true && <marquee>true shortcircuit!</marquee>}
//     {false && <marquee>false shortcircuit!</marquee>}
//     {true ? <span>true tern!</span> : <span>false tern!</span>}
//     {false ? <span>true tern!</span> : <span>false tern!</span>}
//     {true && true}
//     {false && false}
//   </>
// );
// document.querySelector<HTMLDivElement>('body')!.append(test);
const CArray = () => {
  return [1, 'hi', false ? <span>true</span> : <span>false</span>];
};

const CString = () => {
  return 'hi';
};

const CNumber = () => {
  return 4;
};

const CBool = () => {
  return true;
};

const Count = ({ count }: { count: number }) => {
  return <div id="count">{count}</div>;
};

const Counter = ({ count }: { count: number }) => {
  return (
    <>
      <Count count={count} />
      {count % 2 === 0 ? (
        <small id="even">EVEN!</small>
      ) : (
        <small id="odd">ODD!</small>
      )}
    </>
  );
};

const MyComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount((value) => ++value)}>Increase</button>
      <Counter count={count} />
      <CArray />
      <CString />
      <CNumber />
      <CBool />
    </>
  );
};

const result = <MyComponent />;
document.querySelector<HTMLDivElement>('body')!.append(result);
