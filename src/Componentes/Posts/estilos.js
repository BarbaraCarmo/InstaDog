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
        flex: 2,
        margin: 5,
        maxHeight: 35,
        maxWidth: 35,
        alignSelf: "center",
        borderRadius: 180,
        borderWidth: 2,
        borderColor: cores.branco,
        backgroundColor: cores.fundoPadrao,
    },
    userName: {
        flex: 2,
        color: cores.branco,
        backgroundColor: cores.fundoPadrao,
        alignSelf: "center",
        margin: 2,
        fontFamily: "AppleSDGothicNeo-Bold",
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
        fontFamily: "AppleSDGothicNeo-Bold"
    }

});