/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "$fresh/runtime.ts";

export default function ProjectList(props: any) {
  if (!props.projects) {
    return <></>;
  }

  return (
    <ul>
      {props.projects.map((project: any) => (
        <li>
          <a href={project.href} target="_blank">{project.title}</a>
        </li>
      ))}
    </ul>
  );
}
