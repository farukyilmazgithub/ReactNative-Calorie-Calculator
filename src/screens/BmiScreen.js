import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet,TouchableOpacity} from 'react-native';

const BmiScreen = () => {

  const [height, setHeight] = useState(0);
  const [weight, setWeigh] = useState(0);
  const [bmi, setBmi] = useState(" ");
  const [info, setInfo] = useState();

const bmiCalculator = (weight, height) =>{
  var bmiB = '';
  bmiB = Math.round((weight / (height / 100) ** 2) * 10) /
    10;
    if (bmiB < 18.5) {
      setInfo("Diathesis: It is an undesirable condition that poses a risk for some diseases. In order for you to reach a weight suitable for your height, you should eat enough and balanced and take care to improve your eating habits.");
    } else if (bmiB > 18.5 && bmiB <= 24.9) {
      setInfo("Normal: Indicates that you are at the appropriate weight for your height. Take care to maintain this weight by eating a sufficient and balanced diet and doing regular physical activity.");
    } else if (bmiB > 24.9 && bmiB < 30) {
      setInfo("Overweight: Indicates that your body weight is more than your height. Being overweight leads to obesity, which is a risk factor for many diseases if necessary precautions are not taken..");
    } else if (bmiB > 30 && bmiB < 34.9) {
      setInfo("Obese - Class I: It is an indication that your body weight is higher than your height, in other words, that you are fat. Obesity, cardiovascular diseases, diabetes, hypertension etc. is a risk factor for chronic diseases. It is very important for your health that you go to a normal weight by weakening under the control of a physician / dietitian by applying to a health institution. Please contact your healthcare provider.");
    } else if (bmiB > 35 && bmiB < 44.9) {
      setInfo("Obese - II. Class: It is an indication that you are overweight compared to your height, in other words, that you are fat. Obesity, cardiovascular diseases, diabetes, hypertension etc. is a risk factor for chronic diseases. It is very important for your health that you go to a normal weight by weakening under the control of a physician / dietitian by applying to a health institution. Please contact your healthcare provider.");
    } else  if(bmiB > 45 && bmiB < 100)  {
      setInfo("Extremely Obese - III. Class: It is an indication that you are overweight compared to your height, in other words, that you are fat. Obesity, cardiovascular diseases, diabetes, hypertension etc. is a risk factor for chronic diseases. It is very important for your health that you go to a normal weight by weakening under the control of a physician / dietitian by applying to a health institution. Please contact your healthcare provider.");
    } else {
      setInfo(" ");
    } 
  return bmiB;
};

return (
  <View style={styles.container}>
    <Text style={styles.title}>Calculate Your Body Mass Index</Text>

    <View>
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
            setWeigh(parseFloat(text));
          }}
        ></TextInput>
      </View>
    </View>
    <View>
      <TouchableOpacity
        style={styles.submit}
        onPress={() => {
          setBmi("Your Body Mass Index = " + bmiCalculator(weight, height));
        }}
        title="Submit"
        ><Text style={styles.text}>Calculate</Text>
      </TouchableOpacity>
    </View>
      <Text style={styles.title}>{bmi}</Text>
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