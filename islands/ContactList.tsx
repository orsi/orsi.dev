/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "$fresh/runtime.ts";

export default function ContactList(props: any) {
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
}
