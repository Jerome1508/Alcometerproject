import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Picker, Text, View, TextInput, Button } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import RadioForm from 'react-native-simple-radio-button';

export default function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(1);
  const [gender, setGender] = useState('female');
  const [time, setTime] = useState(1);
  const [Alcool, setAlcool] = useState(0);

  const bottleAmount = [
    { label: '1 beer bottle', value: 1 },
    { label: '2 beer bottles', value: 2 },
    { label: '3 beer bottles', value: 3 },
    { label: '4 beer bottles', value: 4 },
    { label: '5 beer bottles', value: 5 },
    { label: '6 beer bottles', value: 6 },
    { label: '7 beer bottles', value: 7 },
    { label: '8 beer bottles', value: 8 },
    { label: '9 beer bottles', value: 9 },
    { label: '10 beer bottles', value: 10 },
    { label: '24 beer bottles', value: 24 }
  ];

  const time1 = [
    { label: '1 hour', value: 1 },
    { label: '2 hours', value: 2 },
    { label: '3 hours', value: 3 },
    { label: '4 hours', value: 4 },
    { label: '5 hours', value: 5 },
    { label: '6 hours', value: 6 },
    { label: '7 hours', value: 7 },
    { label: '8 hours', value: 8 },
    { label: '9 hours', value: 9 },
    { label: '10 hours', value: 10 },
    { label: '24 hours', value: 24 }
  ];

  const genders = [
    { label: 'Female', value: 'female' },
    { label: 'Male', value: 'male' }
  ];

  function calculate() {
    let Alcool = 0;
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsLeft = grams - burning * time;

    if (gender === 'male') {
      Alcool = gramsLeft / (weight * 0.7);
    } else {
      Alcool = gramsLeft / (weight * 0.6);
    }
    if (Alcool < 0){
      Alcool = 0;
    } 
    
    setAlcool(Alcool);
  }

  

  return (
    <View style={styles.view1}>
      <Text style={styles.header}>Alcometer</Text>
      <Text style={styles.label}>Weight</Text>
      <TextInput 
      style={styles.input1}
      placeholder="in kilograms"
      onChangeText={text => setWeight(text)}
      keyboardType='numeric'
      returnKeyType='done'></TextInput>
      <Text style={styles.label}>Bottles</Text>
      <DropDownPicker
        items={bottleAmount}
        defaultValue={bottles}
        containerStyle={{height: 40}}
        style={{ backgroundColor: '#f0f8ff' }}
        zIndex={10} 
        itemStyle={{
          justifyContent: 'flex-start'
        }}
        dropDownStyle={{ backgroundColor: '#f0f8ff' }}
        onChangeItem={item => setBottles(item.value)}
      />
      <Text style={styles.label}>Time</Text>
      <DropDownPicker
        items={time1}
        defaultValue={time}
        zIndex={9}
        containerStyle={{height: 40}}
        style={{ backgroundColor: '#f0f8ff' }}
        itemStyle={{
          justifyContent: 'flex-start'
        }}
        dropDownStyle={{ backgroundColor: '#f0f8ff' }}
        onChangeItem={item => setTime(item.value)}
      />
      <Text style={styles.label}>Gender</Text>
      <RadioForm 
        style={styles.gender1}
        buttonSize = {10}
        radio_props={genders}
        initial={0}
        onPress={(value)=>{setGender(value)}}
      />
      <Text style={styles.resultshow1}>Blood alcohol level is : </Text>
      <Text style={styles.resultshow}>{Alcool.toFixed(2)}</Text>
      <Button onPress={calculate} title="Calculate"></Button>
      <StatusBar style="auto" />
      <Text style={styles.other}>Android Version</Text>
      <Text style={styles.other}>By Jérôme Chirol</Text>
    </View>
  );
}


const styles = StyleSheet.create({

  header: {
    textAlign: 'center',
    marginBottom: 1,
    marginTop: 1,
    fontWeight: 'bold',
    fontSize: 30,
  },

  label: {
    marginTop: 5,
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 16,
  },

  resultshow: {
    textAlign: 'center',
    marginTop: 1,
    marginBottom: 30,
    fontSize: 20,
  },

  resultshow1: {
    textAlign: 'center',
    marginTop: 1,
    marginBottom: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },
  
  
  other: {
    textAlign: 'right',
    marginTop: 1,
    marginBottom: 1,
    fontWeight: 'bold',
    fontSize: 8,
  },

  input1: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#E7E7E7",
    borderRadius: 5,
  },

  view1: {
    flex: 1,
    padding: 20,
    backgroundColor: '#b0e0e6',
  },
  
  gender1: {
    marginTop: 10,
  },

});
