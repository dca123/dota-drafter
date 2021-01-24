import {
    Flex,
    useStyleConfig,
    Box,
    Divider
} from "@chakra-ui/react"

type Dict = Record<string, any>

function Text(props: Dict) {
    const { size, variant, ...rest } = props
    const styles = useStyleConfig("Text", { size, variant })
    return <Box as="text" sx={styles} {...rest} />
}

export default function Time(){
    return(
        <Box w="80%" > 
            <Flex justifyContent="space-around">
                <Flex direction="column" alignItems="center">
                    <Text variant="reserveTime">1:38</Text>
                    <Text variant="reserveTime">Your Reserve Time</Text>
                </Flex>
                <Text variant="remainingTime">1:05</Text>
                <Flex direction="column" alignItems="center">
                    <Text variant="reserveTime">1:38</Text>
                    <Text variant="reserveTime">Your Reserve Time</Text>
                </Flex>
            </Flex>
            <Divider mt={3}/>
        </Box>
    )
}