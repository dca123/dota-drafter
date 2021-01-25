import {
    Flex,
    Heading,
    Image,
    Text,
    Grid,
    Box
} from "@chakra-ui/react"


export default function SelectedHeroes(){
    return (
        <Grid gridTemplateRows="repeat(5, 20px [col-start]" w="40%">
            <Box direction="row" justifyContent="space-between">
                <Heading>Radiant</Heading>                
                <Heading>Dire</Heading>
            </Box>
            <Box direction="row">
                <Image src="hero_images/horiz/batrider_hphover.png" w="30%" filter="grayscale(100%)"/>
                <Text>1</Text>
            </Box>
            <Box direction="row-reverse">
                <Image src="hero_images/horiz/wisp_hphover.png" w="30%"/>
                <Text>2</Text>
            </Box>
            <Box>
                <Image src="hero_images/horiz/pudge_hphover.png" w="30%"/>
                <Text>3</Text>
            </Box>
            <Box direction="row-reverse">
                <Image src="hero_images/horiz/tusk_hphover.png" w="30%"/>
                <Text>4</Text>
            </Box>
        </Grid>
    )
}