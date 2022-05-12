/** @jsx h */
/** @jsxFrag Fragment */
import { Component, Fragment, h } from "https://deno.land/x/jsx@v0.1.5/mod.ts";

export const ProjectList: Component<{ projects: any[] }> = (props) => {
  if (!props.projects) {
    return <></>;
  }

  return (
    <ul>
      {props.projects.map((project) => (
        <li>
          <a href={project.href} target="_blank">{project.title}</a>
        </li>
      ))}
    </ul>
  );
};
