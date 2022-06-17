/** @jsx h */
import { h } from "$fresh/runtime.ts";
import Container from "../islands/Container.tsx";
export default function Home() {
  return (
    <div>
      Top
      <Container>
        <div>Bottom</div>
      </Container>
    </div>
  );
}
