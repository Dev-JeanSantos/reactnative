import React from "react";
import { Image, StyleSheet, View} from "react-native";

import Texto from "../../../componentes/Texto";

export default function Detalhes({nome, nomeFazenda, descricao, preco, logoFazenda}){

    return <>
        <Texto style={estilos.nome}>{nome}</Texto>
        <View style={estilos.fazenda}>
            <Image source={logoFazenda} style={estilos.imagemFazenda}/>
            <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>    
        </View>
        <Texto style={estilos.descricao}>{descricao}</Texto>
        <Texto style = {estilos.preco}>{preco}</Texto>
    </>
}

const estilos = StyleSheet.create({
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color:"#464646", 
        fontWeight: "bold",
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12
    },
    imagemFazenda: {
        width: 32,
        height: 32
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12
    },
    descricao: {
        color:"#a3a3a3",
        fontSize:16,
        lineHeight: 26
    },
    preco: {
        color: "#2a9f85",
        fontWeight:"bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
})