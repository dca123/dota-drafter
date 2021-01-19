import { Flex, Square, Center, Text, Box, Heading } from "@chakra-ui/react"
// import {Input} from '@chakra-ui/react'
import { useStyleConfig } from "@chakra-ui/react"

function Input(props){
  const { size, variant, ...rest } = props
  // 2. Reference `Button` stored in `theme.components`
  const styles = useStyleConfig("Input", { size, variant })
  // 3. Pass the computed styles into the `sx` prop
  return <Box as="input" sx={styles} {...rest} />
}

export default function Home() {
  return (
    <Flex w="80%" h="80vh" bg="brand.white" borderRadius="30px" flexDirection="column" alignContent="flex-end">
      <Heading color="brand.200" fontSize="64px" textAlign="center" mt={28}> Dota 2 Drafter </Heading>
      <Flex flexDirection="column" justify="space-between" h="500px">
        <Input m="auto" placeholder="Username" />
        <Input m="auto" placeholder="Username" />
        <Input m="auto" placeholder="Username" />
      </Flex>
   </Flex>
  )
}
