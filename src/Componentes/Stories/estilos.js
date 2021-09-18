import { StyleSheet } from "react-native";
import { cores } from '../../estilosGlobal'

export default StyleSheet.create({
    stories: {
        flex: 2,
        backgroundColor: cores.fundoPadrao,
    },
    userPhoto: {
        flex: 3,
        margin: 7,
        height: 70,
        width: 70,
        alignSelf: "center",
        borderRadius: 180,
        borderWidth: 1,
        borderColor: cores.branco,
        backgroundColor: cores.fundoPadrao,
    },
    userName: {
        flex: 0.8,
        fontSize: 12,
        color: cores.branco,
        alignSelf: "center"
    }
})