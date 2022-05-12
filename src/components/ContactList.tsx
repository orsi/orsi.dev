/** @jsx h */
/** @jsxFrag Fragment */
import { Component, Fragment, h } from "https://deno.land/x/jsx@v0.1.5/mod.ts";

export const ContactList: Component<{ links: any[] }> = (props) => {
  if (!props.links) {
    return <></>;
  }

  return (
    <ul>
      {props.links.map((link) => (
        <li>
          <a href={link.url} target="_blank" rel="noreferrer">
            {link.name.toLowerCase()}
          </a>
        </li>
      ))}
    </ul>
  );
};
