import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import {
  EffectComposer,
  Glitch,
  Pixelation,
} from "@react-three/postprocessing";
import { GlitchMode } from "postprocessing";
import { Vector2 } from "three";

export default function Logo() {
  return (
    <Suspense>
      <div className={`h-[250px]`}>
        <Canvas frameloop="demand">
          <Suspense>
            <Text
              scale={[4, 5, 5]}
              letterSpacing={0.01}
              color="white"
              font="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Work+Sans:wght@700&display=swap"
            >
              ORSI
            </Text>
          </Suspense>
          <EffectComposer>
            <Glitch
              delay={[1.5, 3.5] as unknown as Vector2} // min and max glitch delay
              duration={[0.6, 1.0] as unknown as Vector2} // min and max glitch duration
              strength={[0.3, 1.0] as unknown as Vector2} // min and max glitch strength
              mode={GlitchMode.SPORADIC} // glitch mode
              active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
              ratio={0.3} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
            />
            <Pixelation
              granularity={12} // pixel granularity
            />
          </EffectComposer>
        </Canvas>
      </div>
    </Suspense>
  );
}
