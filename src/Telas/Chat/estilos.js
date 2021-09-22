import { StyleSheet } from "react-native";
import { cores } from '../../estilosGlobal'

export default StyleSheet.create({
    tituloCabecalho: {
        flex: 3,
        fontSize: 23,
        alignSelf: "center",
        color: cores.branco,
        padding: 15,
        paddingLeft: 0,
    },
    voltar: {
        flex: 0.5,
        margin: 5,
        marginRight: 0,
        color: cores.branco,
        fontSize: 25,
        padding: 0,
        alignSelf: "center",
    },
    cabecalho: {
        minHeight: 50,
        flexDirection: "row",
        backgroundColor: cores.fundoPadrao,
        padding: 2,
    },
    camera: {
        flex: 0.5,
        margin: 5,
        color: cores.cinza,
        fontSize: 25,
        padding: 0,
        alignSelf: "center",
    },
    userPhoto: {
        margin: 5,
        height: 50,
        width: 50,
        alignSelf: "center",
        borderRadius: 180,
    },
    userName: {
        flex: 2,
        color: cores.branco,
        fontWeight: "bold",
        paddingTop: 5
    },
    textoAtivo: {
        flex: 1,
        color: cores.branco,
        fontWeight: "bold",
        margin: 5,
        borderBottomColor: cores.branco,
        borderBottomWidth: 1,
        paddingLeft: 30

    },
    textoInativo: {
        flex: 1,
        color: cores.cinza,
        margin: 5,
        paddingLeft: 30,
        paddingRight: 10
    },
})