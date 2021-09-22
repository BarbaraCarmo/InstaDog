import { StyleSheet } from "react-native";
import { cores } from '../estilosGlobal'

export default StyleSheet.create({
    cabecalho: {
        flex: 1.2,
        flexDirection: "row",
        backgroundColor: cores.fundoPadrao,
    },
    tituloCabecalho: {
        flex: 3,
        fontSize: 23,
        alignSelf: "center",
        color: cores.branco,
        padding: 15,
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
        flex: 9.7,
        backgroundColor: cores.fundoPadrao,
    },
    icones: {
        flex: 0.5,
        margin: 5,
        color: cores.branco,
        fontSize: 25,
        padding: 0,
        alignSelf: "center",
    },
    input: {
        backgroundColor: cores.cinzaEscuro,
        height: 40,
        color: 'white',
        borderRadius: 10,
        margin: 5,
        padding: 10,
    },
});
