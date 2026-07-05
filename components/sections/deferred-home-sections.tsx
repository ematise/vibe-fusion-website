"use client"

import dynamic from 'next/dynamic'

const TableSetting = dynamic(() =>
  import('./table-setting').then((mod) => mod.TableSetting)
)

const InstagramGallery = dynamic(() =>
  import('./instagram-gallery').then((mod) => mod.InstagramGallery)
)

export function DeferredHomeSections({ section }: { section: 'table' | 'gallery' }) {
  if (section === 'table') return <TableSetting />
  return <InstagramGallery />
}
