import {extendTheme} from "@chakra-ui/react"
import Button from "./components/Button"
import Input from "./components/Input"
import Text from "./components/Text"
import Colors from "./colors"

const theme = {
  colors: Colors,
  components:{
    Input,
    Button,
    Text,
  },
  fonts: {
    heading: "Cinzel Decorative",
    body: "Nunito"
  },
}

export default extendTheme(theme);