import {extendTheme} from "@chakra-ui/react"
import Button from "./components/Button"
import Input from "./components/Input"

const theme = {
  components:{
    Input,
    Button
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
}

export default extendTheme(theme);