"use client";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { ReactNode, useEffect } from "react";

function SmoothScrolling({children}: {children: ReactNode}) {
    const lenis = useLenis(({ scroll }) => {
        // called every scroll
      })
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  )
}

export default SmoothScrolling