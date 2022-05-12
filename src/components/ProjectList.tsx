/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "https://deno.land/x/nano_jsx@v0.0.30/mod.ts";

export const ProjectList = (props: any) => {
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
};
