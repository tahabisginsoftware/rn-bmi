import React from 'react';
import { StyleSheet, Alert, Text, TextInput, View, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

const BMI_calc = () =>  {
    const [weight, setWeight] = React.useState('');
    const [height, setHeight] = React.useState('');
    const [bmi, setBmi] = React.useState('');
    const [desc, setDesc] = React.useState('');

    const warnButton = () => {
      if(weight =="" && height == ""){
        Alert.alert("Error", "You need to type in weight and height!")
      }else if (weight == ""){
        Alert.alert("Error", "You need to type in your weight!")
      }else if (height == ""){
        Alert.alert("Error", "You need to type in your height!")
      }else{ calculate(); }
    }

    const calculate = () => {
        const bmi = weight / ((height/100) * (height/100))
        setBmi(bmi.toFixed(1))

        if(bmi < 18.5){
            setDesc('Underweight, eat!')
        }
        else if(bmi >= 18.5 && bmi <= 24.9){
            setDesc('Normal, keep it up!')
        }
        else if (bmi >= 25 && bmi <= 29.9){
            setDesc('Overweight! Start Working out!')
        }
        else if (bmi >= 30){
            setDesc('Obese!! Go to the Gym!')
        }
    }

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}> BMI Calculator</Text>
      </View>
      <TextInput 
      style={styles.input}
      value={weight}
      onChangeText={(text) => setWeight(text)}
      placeholder= "Weight in Kg"
      keyboardType='numeric'
      />
      <TextInput 
      style={styles.input}
      value={height}
      onChangeText={(text) => setHeight(text)}
      placeholder= "Height in Cm"
      keyboardType='numeric'
      />
      <TouchableOpacity
      style={styles.button}
      onPress={warnButton}
      >
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>
      <View style={styles.resultView}>
        <Text style={styles.result}>{bmi}</Text>
        <Text style={styles.result}>{desc}</Text>
      </View>
    </View>
  );
}

export default BMI_calc;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff'
  },
  title: {
    backgroundColor: '#121420',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  titleText: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  input: {
    height: 55,
    margin: 15,
    borderWidth: 1/2,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#eae6e5',
    borderBottomWidth: 1,
    elevation: 10
  },
  button: {
    height: 55,
    margin: 15,
    borderWidth: 1/2,
    borderRadius: 5,
    backgroundColor: '#12130f',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 20
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    padding:10,
    fontWeight: 'bold',
  },
  resultView:{
    margin: 15,
  },
  result: {
    fontSize: 30,
    color: '#393e41',
    fontWeight: 'bold',
  }
});
