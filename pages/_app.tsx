import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import type { LayoutProps } from '@vercel/examples-ui/layout'

import { getLayout } from '@vercel/examples-ui'

import '@vercel/examples-ui/globals.css'

import { SessionProvider } from 'next-auth/react'

function App({ Component, pageProps }: AppProps) {

  return (
    <SessionProvider>
      <Component {...pageProps} />
      <Analytics />
      </SessionProvider>
  )
}

export default App
