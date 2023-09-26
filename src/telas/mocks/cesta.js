import logotipo from '../../../assets/logo.png'
import tomate from '../../../assets/frutas/Tomate.png'
import batata from '../../../assets/frutas/Batata.png'
import brocolis from '../../../assets/frutas/Brócolis.png'
import pepino from '../../../assets/frutas/Pepino.png'
import abobora from '../../../assets/frutas/Abóbora.png'


const cesta =  {
    topo: { 
        titulo: "Detalhe da Cesta"
    },
    detalhes: {
        nome: "Cesta de Verduras",
        logoFazenda: logotipo,
        nomeFazenda: "Jenny Jack Farm",
        descrição: 'Uma cesta com produtos cuidadosamente selecionados da fazenda para a sua cozinha',
        preço: 'R$40,00',
        
    },
    botao: {
      button: "Comprar",
    },
    
    itens: {
        titulo: "Itens da Cesta",

            lista:[
              {
                nome: "Tomate" ,
                imagem: tomate
              },
              { 
              nome: "Abóbora" ,
                imagem: abobora
              },
              { 
              nome: "Batata" ,
                imagem: batata
              },
             {
              nome: "Pepino" ,
                imagem: pepino
            },
            {  
            nome: "Brocólis" , 
             imagem: brocolis

            },
            ]
        } 
}
export default cesta