"use client"

import dynamic from 'next/dynamic'

const Welcome = dynamic(() =>
  import('./welcome').then((mod) => mod.Welcome)
)
const TryOurMenu = dynamic(() =>
  import('./try-our-menu').then((mod) => mod.TryOurMenu)
)
const TableSetting = dynamic(() =>
  import('./table-setting').then((mod) => mod.TableSetting)
)
const DiscoverVenue = dynamic(() =>
  import('./discover-venue').then((mod) => mod.DiscoverVenue)
)
const InstagramGallery = dynamic(
  () => import('./instagram-gallery').then((mod) => mod.InstagramGallery),
  { ssr: false }
)

export function LazyHomeSections() {
  return (
    <>
      <Welcome />
      <TryOurMenu />
      <TableSetting />
      <DiscoverVenue />
      <InstagramGallery />
    </>
  )
}
