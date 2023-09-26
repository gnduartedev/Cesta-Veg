import React from "react";
import { StyleSheet, Dimensions, View, FlatList, } from "react-native";


import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes";
import Botão from './componentes/Botão';
import Item from "./componentes/Item";


const width = Dimensions.get('screen').width;
export default function Cesta({ topo, detalhes, botao, itens }) {
  return <>
    <FlatList
      data={lista}
      renderItem={Item}
      keyExtractor={({ nome }) => nome}
      ListHeaderComponent={() => {

        return <>
          <Topo {...topo} />

          <View style={estilos.visual}>
            <Detalhes {...detalhes} />
            <Botão {...botao} />
          </View>
        </>
      }}
    />
  </>
}
const estilos = StyleSheet.create({
  titulo: {
    color: "#464646",
    marginTop: 32,
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 8,
    lineHeight: 32,
  },
  visual: {
    paddingHorizontal: 26,
    paddingVertical: 8,
  },
})
