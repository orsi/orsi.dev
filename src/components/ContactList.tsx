/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "https://deno.land/x/nano_jsx@v0.0.30/mod.ts";

export const ContactList = (props: any) => {
  if (!props.links) {
    return <></>;
  }

  return (
    <ul>
      {props.links.map((link: any) => (
        <li>
          <a href={link.url} target="_blank" rel="noreferrer">
            {link.name.toLowerCase()}
          </a>
        </li>
      ))}
    </ul>
  );
};
