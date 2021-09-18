import { StyleSheet } from "react-native";
import { cores } from '../../estilosGlobal'

export default StyleSheet.create({
    input: {
        backgroundColor: cores.cinzaEscuro, 
        height: 40, 
        color: 'white', 
        borderRadius: 10, 
        margin: 20,
        padding: 10,
    }, 
    fotos: {
        height: 135,
        width: 136,
        margin: 1,
        alignSelf: "center",
    }, 
    video: {
        width: 135, 
        height: 272, 
        margin: 1
    }
});