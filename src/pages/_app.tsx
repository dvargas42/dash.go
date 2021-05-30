import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import { SiderbarDrawerProvider } from '../hooks/SidebarDrawerHook'
import { makeServer } from '../services/mirage'

import { theme } from '../styles/theme'

if (process.env.NODE_ENV === 'development') {
  makeServer()
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SiderbarDrawerProvider>
        <Component {...pageProps} />
      </SiderbarDrawerProvider>
    </ChakraProvider>
    )
}

export default MyApp
