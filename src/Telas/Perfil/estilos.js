import { StyleSheet } from "react-native";
import { cores } from '../../estilosGlobal'

export default StyleSheet.create({
    userPhoto: {
        flex: 1,
        margin: 10,
        height: 85,
        width: 85,
        borderRadius: 180,
        alignSelf: "center",
    },
    flexArea: {
        minHeight: 50,
        flexDirection: "row",
        backgroundColor: cores.fundoPadrao,
        marginTop: 10
    },
    infosNumeros: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 8
    },
    numeros: {
        color: cores.branco,
        fontSize: 20,
    },
    legendaNums: {
        color: cores.branco,
        fontSize: 15
    },
    plusIcon: {
        position: "absolute",
        top: 72,
        left: 72,
        color: cores.azul,
        fontSize: 20,
    },
    infosPerfil: {
        flex: 0.2,
        padding: 10,
        backgroundColor: cores.fundoPadrao
    },
    userName: {
        color: cores.branco,
        fontSize: 15,
        fontWeight: "bold",
        padding: 2

    },
    categoria: {
        color: cores.cinza,
        fontSize: 13,
        padding: 2
    },
    descricao: {
        color: cores.branco,
        fontSize: 14,
        padding: 2,
    },
    editaPerfil: {
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
    },
    fotosFeed: {
        height: 135,
        width: 136,
        margin: 1,
        alignSelf: "center",
    }
});