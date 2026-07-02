"use client"

import dynamic from 'next/dynamic'

const Footer = dynamic(() =>
  import('./footer').then((mod) => mod.Footer)
)

export function LazyFooter() {
  return <Footer />
}
