import { StyleSheet } from "react-native";
import { cores } from "../../estilosGlobal";

export default StyleSheet.create({
    flexArea: {
        flex: 1,
        flexDirection: "row",
        margin: 5,
        backgroundColor: cores.fundoPadrao
    },
    userPhoto: {
        margin: 5,
        height: 35,
        width: 35,
        alignSelf: "center",
        borderRadius: 180,
        // borderWidth: 2,
        // borderColor: cores.branco,
    },
    userName: {
        flex: 2,
        color: cores.branco,
        alignSelf: "center",
        margin: 2,
        fontWeight: "bold"
    },
    postagem: {
        flex: 1,
        height: 450,
        width: 450,
        resizeMode: 'cover',
        // maxHeight: 500,
        // maxWidth: 100,
        alignSelf: "center",
        backgroundColor: cores.branco
    },
    icones: {
        flex: 0.1,
        margin: 5,
        color: cores.branco,
        fontSize: 25,
        padding: 0,
        alignSelf: "center",
    },
    saveIcon: {
        margin: 5,
        color: cores.branco,
        fontSize: 25,
        padding: 0,
    },
    nameCaption: {
        color: cores.branco,
        margin: 10,
    }

});