import type { AppProps } from 'next/app'
import { 
  ChakraProvider,
  CSSReset,
  Center,
 } from '@chakra-ui/react'
import '../styles/globals.css'
import theme from '../theme/index'
import { Fonts } from "../theme/fonts"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Fonts />
      <Center bg='brand.200' minHeight='100vh'>
        <Component {...pageProps} />
      </Center>
    </ChakraProvider>
  )
}

export default MyApp
