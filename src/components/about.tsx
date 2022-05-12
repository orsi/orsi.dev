/** @jsx h */
/** @jsxFrag Fragment */
import { Component, Fragment, h } from "https://deno.land/x/jsx@v0.1.5/mod.ts";

const TODAY_DATE = new Date();
const START_YEAR = 2014;

export const About: Component = (props) => {
  const yearsOfExperience = TODAY_DATE.getFullYear() - START_YEAR;
  return (
    <div class="conatiner gutter">
      <h2>About Me</h2>
      <p>
        I design and develop web applications, digital art showcases, and
        experimental tools. I have {yearsOfExperience}{" "}
        years of professional experience working with{" "}
        <a href="https://thrillworks.com" target="_blank">Thrillworks</a>,{" "}
        <a href="https://bombardier.com" target="_blank">
          Bombardier Inc.
        </a>, and freelancing.
      </p>
      <p>
        When I am not programming, I compose music, design sound, mix, and
        master audio for all media. You may also see me performing in{" "}
        <a target="_blank" href="https://jojogun.ca">
          JoJo Gun &amp; the Bullets
        </a>. You can listen to my original music and compositions on{" "}
        <a
          target="_blank"
          href="https://orsi.bandcamp.com/"
        >
          bandcamp.
        </a>
      </p>
      <p>I live in Toronto, Ontario, Canada.</p>
    </div>
  );
};
