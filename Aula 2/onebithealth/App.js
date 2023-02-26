import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//componentes e propriedades

//AULA 02
function TextButton() {
  var num1 = 12;
  var num2 = 8;
  var total = num1 + num2;
  return <Text>{total}</Text>
}

function Botao(props){
  return <Text>{props.title}</Text>
}


// -------------------------------

export default function App() {

  //AULA 03 ------alterar o estado de uma variável ---------
  //let number = 0; Fazendo dessa forma, o botão não mostra na tela o número sendo incrementado, pois precisa dar uma atualizada na tela.
const [number, setNumber] = useState(0)
function increment(){
  //return number + 1;
  return setNumber(number + 1);
}

function decrement(){
  //return number + 1;
  return setNumber(number - 1);
}

function zerar(){
  return setNumber(0);
}
  // -------------------------------------------------



  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titulo}>Alterando o estado de uma variável</Text>
      </View>
      <View style={styles.view1}>
        <Text style={styles.textos}>Olá mundo!</Text>
          <TextButton style={styles.result} />
          <Button style={styles.botao} title='Olá'/>
          <Botao title='Hello World'/>
          <StatusBar style='auto' />
        </View>
        <View style={styles.view2}>
          <TouchableOpacity onPress={increment} style={styles.touchable}>
            <Text>Incrementar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={decrement} style={styles.touchable}>
            <Text>Decrementar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={zerar} style={styles.touchable}>
            <Text>Zerar</Text>
          </TouchableOpacity>
          <Text style={styles.result2}>{number}</Text>
        </View>
    </View>
  );
}

//ESTILIZAÇÃO

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 25,
    fontWeight: 600
  },

  view1: {
    padding: 20,
    borderRadius: 15,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 0.5,
    marginBottom: 10
  },

  view2: {
    padding: 25,
    borderRadius: 15,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 0.5,
    marginBottom: 10
  },

  textos: {
    color: 'red',
    margin: 20,
    fontSize: 25
  },

  result: {
    margin: 20,
    fontSize: 20
  },

  result2: {
    margin: 20,
    fontSize: 40,
    textAlign: 'center'
  },

  botao: {
    margin: 20,
    padding: 20
  },

  touchable: {
    backgroundColor: '#aa9988',
    padding: 20,
    margin: 20,
  }
});
