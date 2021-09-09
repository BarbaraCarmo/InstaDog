import { StyleSheet } from "react-native";
import { cores } from '../../estilosGlobal'

export default StyleSheet.create({
    userPhoto: {
        flex: 1,
        margin: 10,
        maxHeight: 80,
        maxWidth: 80,
        borderRadius: 180,
        alignSelf: "center",
    },
    flexArea: {
        flex: 0.15,
        flexDirection: "row",
        backgroundColor: cores.fundoPadrao,
    },
    infosNumeros: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 10
    },
    numeros: {
        color: cores.branco,
        fontSize: 20,
        fontFamily: "AppleSDGothicNeo-Bold"
    },
    legendaNums: {
        color: cores.branco,
        fontSize: 15
    },
    plusIcon: {
        position: "absolute",
        top: 65,
        left: 70,
        color: cores.azul,
        fontSize: 20,
    },
    infosPerfil: {
        flex: 0.15,
        padding: 10,
        backgroundColor: cores.fundoPadrao
    },
    userName: {
        color: cores.branco,
        fontSize: 13,
        fontWeight: "bold",
        fontFamily: "AppleSDGothicNeo-Bold",
        padding: 2

    },
    categoria: {
        color: cores.cinza,
        fontSize: 12,
        padding: 2
    },
    descricao: {
        color: cores.branco,
        fontSize: 13,
        padding: 2,
    },
    editaPerfil: {
        backgroundColor: cores.fundoPadrao,
        borderRadius: 5,
        margin: 10,
        justifyContent: "center",
        borderColor: cores.cinza,
        borderWidth: 1,
    },
    iconesFeed: {
        flex: 0.5,
        margin: 5,
        marginLeft: 35,
        color: cores.branco,
        fontSize: 27,
        padding: 0,
        alignSelf: "center",
    }
});