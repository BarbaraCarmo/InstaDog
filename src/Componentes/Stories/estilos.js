import { StyleSheet } from "react-native";
import { cores } from '../../estilosGlobal'

export default StyleSheet.create({
    stories: {
        flex: 1.5,
        backgroundColor: cores.fundoPadrao,
    },
    userPhoto: {
        flex: 2,
        margin: 5,
        height: 60,
        width: 60,
        alignSelf: "center",
        borderRadius: 180,
        borderWidth: 2,
        borderColor: cores.branco,
        backgroundColor: cores.fundoPadrao,
    },
    userName: {
        flex: 1,
        color: cores.branco,
        alignSelf: "center"
    }
})