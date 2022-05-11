/** @jsx h */
import { Component, h } from "https://deno.land/x/jsx@v0.1.5/mod.ts";
import projects from "../../data/projects.ts";

export const Projects: Component = (props) => {
  return (
    <ul>
      {projects.map((project) => (
        <li>
          <a href={project.href} target="_blank">{project.title}</a>
        </li>
      ))}
    </ul>
  );
};
