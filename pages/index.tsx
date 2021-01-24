import { Flex, Square, Center, Text, Box, Heading } from "@chakra-ui/react"
import { useStyleConfig } from "@chakra-ui/react"
type Dict = Record<string, any>

function Input(props: Dict){
  const { size, variant, ...rest } = props
  const styles = useStyleConfig("Input", { size, variant })
  return <Box as="input" sx={styles} {...rest} />
}

function Button(props: Dict){
  const { size, variant, ...rest } = props
  const styles = useStyleConfig("Button", { size, variant })
  return <Box as="button" sx={styles} {...rest} />
}

export default function Home() {
  return (
    <Flex w="80%" h="80vh" bg="brand.white" borderRadius="30px" flexDirection="column" justifyContent="space-around">
      <Heading color="brand.200" fontSize="64px" fontWeight="normal" textAlign="center" > Dota 2 Drafter </Heading>
      <Flex flexDirection="column" h="500px">
        <Input m="auto" placeholder="Username" />
        <Button size="lg" variant="solid" m="auto">Create Lobby</Button>
        <Button size="lg" variant="solid" m="auto">Join Lobby</Button>
        <Button size="lg" variant="solid" m="auto">Play vs AI</Button>
      </Flex>
   </Flex>
  )
}
