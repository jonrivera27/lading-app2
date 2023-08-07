import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
   {/* // <h1>TÉRMINOS Y CONDICIONES DE USO "CLUB OFERTAS"</h1> */}
    <Component {...pageProps} />
  </>
  )
}

