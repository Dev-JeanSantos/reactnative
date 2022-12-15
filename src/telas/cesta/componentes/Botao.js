import React from "react";

import {TouchableOpacity, StyleSheet} from "react-native";

import Texto from "../../../componentes/Texto";

export default function Botao({ titulo }) {
    return <TouchableOpacity style={estilos.botao} onPress={() => { }}>
        <Texto style={estilos.textoBotao}>{titulo}</Texto>
    </TouchableOpacity>
}

const estilos = StyleSheet.create({
    botao:{
        marginTop: 16,
        backgroundColor:"#2A9F85",
        paddingVertical: 16,
        borderRadius: 6
    },
    textoBotao:{textAlign:"center",
    fontSize:16, 
    color: "#FFFFFF",
    lineHeight: 26,
    fontWeight: "bold",
    }
})