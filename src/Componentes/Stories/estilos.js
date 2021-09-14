import { StyleSheet } from "react-native";
import { cores } from '../../estilosGlobal'

export default StyleSheet.create({
    stories: {
        flex: 1.6,
        backgroundColor: cores.fundoPadrao,
    },
    userPhoto: {
        flex: 2.5,
        margin: 7,
        height: 65,
        width: 62,
        alignSelf: "center",
        borderRadius: 180,
        borderWidth: 1,
        borderColor: cores.branco,
        backgroundColor: cores.fundoPadrao,
    },
    userName: {
        flex: 1,
        color: cores.branco,
        alignSelf: "center"
    }
})