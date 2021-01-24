import Colors from "../colors"
export default {
    baseStyle: {
        fontFamily: "Cinzel",
        borderRadius: "0",
        textAlign: "center",
        w: "366px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
    },
    sizes: {
        lg: {
            fontSize: "36px",
            fontWeight: "400",
            h: "100px"
        }
    },
    variants: {
        solid: {
            bg: Colors.brand[50],
            color: Colors.brand.white,
            "_hover": {
                bg: Colors.brand[50],
                boxShadow: "none"
            },
            filter: "dropShadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
        }
    }
}