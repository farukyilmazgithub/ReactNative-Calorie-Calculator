import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet,TouchableOpacity, Picker } from 'react-native';

const BmiScreen = () => {

  const [gender, setGender] = useState(0);
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [cc, setCc] = useState(" ");
  const [info, setInfo] = useState();
  const [activity, setActivity] = useState(0);

const bmiCalculator = (gender, age, weight, height) =>{
  var cc = '';
    if(validEntry(gender, age, weight, height, activity)){
      if(gender == 1) //Male
      {  cc=  66.473 + (13.75116*weight) + (5.033*height)-(6.755*age) }
      else if (gender == 2) //Female
      {  cc = 655.0955 + (9.5634*weight) + (1.8496*height)-(4.6756*age) }
  
      switch (activity){
        case '1':
          cc = cc * 1.2;
          break;
        case '2':
          cc = cc * 1.375;
          break;
        case '3':
          cc = cc * 1.55;
          break;
        case '4':
          cc = cc * 1.725;
          break;
        case '5':
          cc = cc * 1.9;
          break;
      }
    }
    else {cc='Please fill in all fields with valid values.'};
  
  return cc;
};

const validEntry = (gender, age, weight, height, activity) =>{
  
  if(gender==0 || age==0 || weight==0 || height==0 || activity==0){
      return false;
  }

  else if (age < 0 || age > 200){
      return false;
  } 
  else if (weight < 0){
      return false;
  } 
  else if (height < 0){
      return false;
  }

  else {return true};
}

return (
  <View style={styles.container}>
    <Text style={styles.title}>Calculate Basal Metabolic Rate</Text>

    <View>
      <View style={styles.container}>
        <Text style={styles.text}>Gender:</Text>
        <Picker 
          gender={gender}
          style={{ height: 30, width: 80 }}
          onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
        >
          <Picker.Item label="Choose" value="0" />
          <Picker.Item label="Male" value="1" />
          <Picker.Item label="Female" value="2" />
        </Picker>
      </View>

      <Text style={styles.text}>Age:</Text>
      <View style={[styles.input,{flexDirection: "row"}]}>
        <TextInput
          style={[styles.inputText,{flex:1}]}
          placeholder="year" 
          keyboardType="number-pad"
          onChangeText={(text) => {
          setAge(parseFloat(text));
          }}>
        </TextInput>
      </View>

      <Text style={styles.text}>Height:</Text>
      <View style={[styles.input,{flexDirection: "row"}]}>
        <TextInput
          style={[styles.inputText,{flex:1}]}
          placeholder="cm" 
          keyboardType="number-pad"
          onChangeText={(text) => {
          setHeight(parseFloat(text));
          }}>
        </TextInput>
      </View>

      <Text style={styles.text}>Weight:</Text>
      <View style={[styles.input,{flexDirection: "row"}]}>
        <TextInput
          keyboardType="number-pad"
          style={[styles.inputText,{flex:1}]}
          placeholder="kg"
          onChangeText={(text) => {
          setWeight(parseFloat(text));
          }}
        ></TextInput>
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>Daily activity:</Text>
        <Picker 
          gender={gender}
          style={{ height: 80, width: 400 }}
          onValueChange={(itemValue, itemIndex) => setActivity(itemValue)}
        >
          <Picker.Item label="Please choose" value="0" />
          <Picker.Item label="Sedentary (little or no exercise)" value="1" />
          <Picker.Item label="Lightly active (light exercise or sports 1-3 days per week)" value="2" />
          <Picker.Item label="Moderately active (moderate exercise or sports 3-5 days per week)" value="3" />
          <Picker.Item label="Very active (hard exercise or sports 6-7 days per week)" value="4" />
          <Picker.Item label="Super active (very hard exercise or sports and a physical job)" value="5" />
        </Picker>
      </View>
    </View>
    <View>
      <TouchableOpacity
        style={styles.submit}
        onPress={() => {
          validEntry(gender, age, weight, height, activity);
          setCc("Your Basal Metabolic Rate = " + bmiCalculator(gender, age, weight, height));
        }}
        title="Submit"
        ><Text style={styles.text}>Calculate</Text>
      </TouchableOpacity>
    </View>
      <Text style={styles.title}>{cc}</Text>
      <Text style={styles.text}>{info}</Text>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'azure',
    padding: 8,
    alignItems: 'center',
  },
  submit: {
    borderRadius: 50,
    backgroundColor: "lightblue",
    padding: 3,
    borderWidth: 3,
    width: 100,
    textAlignment: "center",
    textAlign: "center",
    gravity: "center",
    alignContent: "center",
    justifyContent: "center"
  },
  input:{
    borderBottomWidth: 3,
    borderColor:"gray",
    marginHorizontal: 15,
    marginBottom:25,
    paddingHorizontal: 8,
  },
  inputText: {
    fontSize:20
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    top: 0,
    marginVertical: 20,
    textAlign: "center",
    },
  text: {
    textAlign: "center",
    fontSize: 18,
    lineHeight: 35,
  },
});

export default BmiScreen;