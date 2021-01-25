import {
    Heading,
    Flex,
    Box
} from "@chakra-ui/react"
import Time from "../../components/Time"
import HeroesPane from "../../components/HeroesPane"
import SelectedHeroes from "../../components/SelectedHeroes"

export default function Draft(){
    return (
        <Box w="80%"> 
            <Time />
            {/* <HeroesPane />     */}
            <SelectedHeroes />
        </Box>
        
    )
}