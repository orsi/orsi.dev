import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
export * from "twind";
export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  preflight: {
    body: {
      margin: "0",
      padding: "0",
      position: "relative",
      fontSize: "18px",
    },
    a: {
      color: "lightcoral",
      textDecoration: "underline",
    }
  }
};
if (IS_BROWSER) setup(config);
