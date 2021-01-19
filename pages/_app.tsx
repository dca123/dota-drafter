import type { AppProps } from 'next/app'
import { 
  ChakraProvider,
  CSSReset,
  extendTheme,
  Center,
 } from '@chakra-ui/react'
import '../styles/globals.css'
import { Fonts } from "../theme/fonts"

const theme = extendTheme({
  fonts: {
    heading: "Cinzel Decorative",
    body: "Nunito"
  },
  colors:{
    brand: {
      white: "#E7E7E7",
      50: "#5270a4",
      100: "#3c4b62",
      200: "#324553",
      green: "#56e39f",
      red: "#f87575"
    }
  }
})

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
