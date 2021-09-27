import { StyleSheet } from "react-native";
import { cores } from '../../estilosGlobal'

export default StyleSheet.create({
    icones: {
        flex: 0.1,
        margin: 5,
        color: cores.branco,
        fontSize: 30,
        padding: 0,
        alignSelf: "center",
        fontWeight: 'bold'
    },
    numeros: {
        color: cores.branco,
        alignSelf: 'center',
        marginBottom: 5,
        fontWeight: 'bold'
    },
    userPhoto: {
        margin: 5,
        height: 40,
        width: 40,
        alignSelf: "center",
        borderRadius: 180,
    },
    userName: {
        flex: 5,
        color: cores.branco,
        alignSelf: "center",
        margin: 2,
        fontWeight: "bold",
        fontSize: 15
    },
    descricao: {
        color: cores.branco,
        alignSelf: 'flex-start',
        margin: 5,
        fontWeight: 'bold'
    },
    musica: {
        color: cores.branco,
        alignSelf: 'flex-start',
        margin: 5,
    },
    mascaraLike: {
        height: 615,
        width: 420,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute", 
        top: 0,
    },
    iconeLike: {
        fontSize: 90,
        color: cores.branco,
        padding: 0,
        alignSelf: "center",
    }
})