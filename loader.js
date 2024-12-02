'use client'
 
export default function myImageLoader({ src, width, quality }) {
  return `https://book-store.od-works.shop/${src}?w=${width}&q=${quality || 75}`
}