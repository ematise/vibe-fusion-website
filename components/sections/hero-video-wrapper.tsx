"use client"

import dynamic from "next/dynamic"

const HeroVideo = dynamic(
  () => import("./hero-video").then((mod) => mod.HeroVideo),
  { ssr: false }
)

export function HeroVideoWrapper() {
  return <HeroVideo />
}
