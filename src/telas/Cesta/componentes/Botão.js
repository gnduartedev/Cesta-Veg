import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Texto from '../../componentes/Texto'
export default function Botao({ button }) {
  return <>
    <TouchableOpacity style={estilos.botao} onPress={() => { }}>
      <Texto style={estilos.textobotao}> {button} </Texto>
    </TouchableOpacity>

  </>
}
const estilos = StyleSheet.create({

  botao: {
    marginTop: 16,
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 6,
  },
  textobotao: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",

  },

})
