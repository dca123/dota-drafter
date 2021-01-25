import {
    Heading,
    Flex,
    Box
} from "@chakra-ui/react"
import Time from "../../components/Time"
import HeroesPane from "../../components/HeroesPane"

export default function Draft(){
    return (
        <Box w="80%"> 
            <Time />
            <HeroesPane />    
        </Box>
        
    )
}