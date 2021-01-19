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
  components:{
    Input: {
      baseStyle: {
        fontFamily: "Cinzel",
        fontSize: "36px",
        bg: "#E7E7E7",
        borderColor: "#5270a4",
        borderRadius: "0",
        textAlign: "center",
        color: "#5270a4",
        border: "1px solid",
        h: "97px",
        w: "336px",
        "&::placeholder": {
          color: "rgba(82, 112, 164, 0.65)"
        },
      }
    }
  },
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
