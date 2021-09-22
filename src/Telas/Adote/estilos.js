import { StyleSheet } from "react-native";
import { cores } from '../../estilosGlobal'

export default StyleSheet.create({
    tituloCabecalho: {
        flex: 3,
        fontSize: 23,
        alignSelf: "center",
        color: cores.branco,
        padding: 10,
    },
    cabecalho: {
        minHeight: 50,
        flexDirection: "row",
        backgroundColor: cores.fundoPadrao,
        padding: 2,
    },
    botao: {
        borderRadius: 5,
        margin: 5,
        justifyContent: "center",
        borderColor: cores.cinza,
        borderWidth: 1,
    },
    imagemPequena: {
        height: 100,
        width: 100,
        margin: 1,
        alignSelf: "center",
    },
    imagemMaior:{
        height: 202,
        width: 202,
        margin: 1,

        alignSelf: "center",
    }

})