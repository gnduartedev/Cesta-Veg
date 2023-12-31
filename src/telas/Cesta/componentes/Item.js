import React from "react";
import { Image, View, StyleSheet, } from "react-native";
import Texto from "../../componentes/Texto";

export default function Item({ item: { imagem, nome } }) {
    return <View key={nome} style={estilos.item}>
        <Image source={imagem} style={estilos.imagem} />
        <Texto style={nome}> {nome}</Texto>
    </View>
    
}

const estilos = StyleSheet.create({

    item: {
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#ececec",
        paddingVertical: 16,
        flexDirection: "row",
        marginHorizontal: 16,
    },
    imagem: {
        width: 46,
        height: 46,
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"

    },

});

