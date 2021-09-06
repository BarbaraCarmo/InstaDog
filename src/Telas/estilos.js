import { StyleSheet } from "react-native";
import { cores } from '../estilosGlobal'

export default StyleSheet.create({
    cabecalho: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: cores.fundoPadrao,
    },
    tituloCabecalho: {
        flex: 3,
        fontSize: 20,
        alignSelf: "center",
        color: cores.branco,
        padding: 15,
        fontFamily: "AppleSDGothicNeo-Bold"
    },
    iconesCabecalho: {
        flex: 0.5,
        margin: 5,
        color: cores.branco,
        fontSize: 25,
        padding: 0,
        alignSelf: "center",
    },
    posts: {
        flex: 10,
        backgroundColor: cores.fundoPadrao,
    },
    icones: {
        flex: 0.5,
        margin: 5,
        color: cores.branco,
        fontSize: 25,
        padding: 0,
        alignSelf: "center",
    }
});
