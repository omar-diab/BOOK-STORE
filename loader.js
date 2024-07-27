'use client'
 
export default function myImageLoader({ src, width, quality }) {
  return `https://bookstore.od-works.shop/${src}?w=${width}&q=${quality || 75}`
}