import './globals.css' // ✅ Import Tailwind CSS

export const metadata = {
  title: 'My Single Page',
  description: 'Generated with Next.js and Tailwind',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
