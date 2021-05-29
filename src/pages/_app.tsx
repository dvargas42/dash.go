import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import { SiderbarDrawerProvider } from '../hooks/SidebarDrawerHook'

import { theme } from '../styles/theme'

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
