import localFont from 'next/font/local'
import './globals.css'
 
const SFPro = localFont({
  src: './fonts/SF-Pro-Text-Regular.otf',
  display: 'swap',
})
  

export const metadata = {
  title: 'SENDerful', 
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={SFPro.className}>{children}</body>
    </html>
  )
}


// const roboto = localFont({
//   src: [
//     {
//       path: './Roboto-Regular.woff2',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: './Roboto-Italic.woff2',
//       weight: '400',
//       style: 'italic',
//     },
//     {
//       path: './Roboto-Bold.woff2',
//       weight: '700',
//       style: 'normal',
//     },
//     {
//       path: './Roboto-BoldItalic.woff2',
//       weight: '700',
//       style: 'italic',
//     },
//   ],
// })