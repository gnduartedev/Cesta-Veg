import React from "react";
import { View, Image, StyleSheet, } from "react-native";
import Texto from '../../componentes/Texto'
export default function Detalhes ({nome, logoFazenda, nomeFazenda, descrição, preço, }){
return <>
    <Texto style= {estilos.nomeCesta}>{nome}</Texto>
                <View style={estilos.fazenda}>
                    <Image style= {estilos.logo} source={logoFazenda}/>
                    <Texto style= {estilos.jenny}>{nomeFazenda}</Texto> 
                </View>
                <Texto style= {estilos.descrição}>{descrição}</Texto>
                <Texto style= {estilos.preço}> {preço} </Texto>
               
</>
};
const estilos = StyleSheet.create ({
    nomeCesta:{
        fontSize: 30,   
        color: "#464646",
        lineHeight: 50,
        fontWeight: "bold"
     },
     fazenda:{
       
        flexDirection: "row",
        paddingVertical: 12,
        

     },
     jenny:{
        fontSize: 20,
        color: "grey", 
        lineHeight: 26,
        marginLeft: 12,
       

     }, 
        logo:{
        width: 32,
        height: 32,

     },
     descrição:{
        fontSize: 20,
        color: "grey",
        lineHeight: 26,

     },
     preço:{
        color: "#2A9F85",
        fontSize: 26,
        fontWeight: "bold",
        lineHeight: 42,
        marginTop: 8,

     },
     


});