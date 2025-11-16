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

const test = (
  <>
    <h1 style={{ color: 'green' }}>title</h1>
    <Button2>push me!</Button2>
    {true && <marquee>true shortcircuit!</marquee>}
    {false && <marquee>false shortcircuit!</marquee>}
    {true ? <span>true tern!</span> : <span>false tern!</span>}
    {false ? <span>true tern!</span> : <span>false tern!</span>}
    {true && true}
    {false && false}
  </>
);
// document.querySelector<HTMLDivElement>('body')!.append(test);

const Test = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount((value) => ++value)}>
        Count: {count}
      </button>
      {count % 2 === 0 && <small>EVEN!</small>}
    </>
  );
};
document.querySelector<HTMLDivElement>('body')!.append(
  <main>
    <h1>Testing</h1>
    <Test />
    <ul>
      <>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </>
    </ul>
  </main>
);
// render(test, document.querySelector('main')!);
