import './global.css';
import { createRoot } from 'jinx';

function App() {
  return (
    <main
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        margin: '0 auto',
        maxWidth: '900px',
        padding: '0 16px',
      }}
    >
      <h1>a bit distorted</h1>
      <p>hello...</p>
    </main>
  );
}

createRoot(document.querySelector<HTMLDivElement>('body')!).render(<App />);
