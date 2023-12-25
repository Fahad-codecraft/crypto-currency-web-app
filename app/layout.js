
import './globals.css'


export const metadata = {
  title: 'Crypto Currency App',
  description: 'Check curypto currency prices in real time',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
