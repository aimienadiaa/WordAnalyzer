import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

export default class App extends Component {
  constructor () {
    super();
    this.state = {
      word: 0,
      consonants: 0,
      vowel: 0,
      characters: 0,
      analyze: 0
    }
  }
    render() {
      return (
        <View style={styles.container}>
          <Text>A WORD ANALYZER</Text>
          <br></br>
          <Text>Word: <TextInput onChangeText={(word) =>
            this.setState({word})}
            placeholder='type here'/></Text>
            <br></br>
          <Button color="#841584"
            onPress={this.analyzeWord}
            title='Analyze'/>
            <br></br>
          <Text>Word: {this.state.word}</Text>
          <Text>No of Consonants: {this.state.consonants}</Text>
          <Text>No of Vowels: {this.state.vowel}</Text>
          <Text>No of Characters: {this.state.characters}</Text>

        </View>
        ); 
        }
       }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginTop: 60,
    fontSize: 30, 
    textAlign: 'center', 
    margin: 10,
    },
    
    contents: {
    textAlign: 'center', 
    color: '#4B0082', 
    marginBottom: 5,
    },
    bottom1: {
      position: 'absolute',
      bottom:100,
      
      },
  
      bottom2: {
        position: 'absolute',
        bottom:70,
      
        }, 
});
