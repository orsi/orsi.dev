import useAsset from "ultra/hooks/use-asset.js";
import { Routes, Route } from "react-router-dom";
import JonsTuner from "./pages/jons-tuner.tsx";
import Home from "./pages/home.tsx";
import ThreeJsBackground from "./components/three-js-background.tsx";
import { tw } from "./twind/twind.ts";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>ORSI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href={useAsset("/favicon.ico")} />
        <link rel="stylesheet" href={useAsset("/style.css")} />
      </head>
      <body>
        <ThreeJsBackground />
        <div className={tw(`relative z-10`)}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jons-tuner" element={<JonsTuner />} />
            <Route path="/privacy" element={<JonsTuner />} />
          </Routes>
        </div>
      </body>
    </html>
  );
}
