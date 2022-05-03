import React,{useState,useEffect} from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const DailyCaloriesScreen = () =>{

    //AsyncStorage.clear();
    const[totalCalorie,setTotalCalorie] = useState(0);
    const[food,setFood] = useState("");
    const[foodC, setFoodC] = useState("");
    const[result,setResults] = useState([
        { nf_food_name:'', nf_calories:'', nf_food_name:'', nf_total_fat:'', nf_saturated_fat:'',
        nf_sodium:'', nf_total_carbohydrate:'', nf_dietary_fiber:'', nf_sugars:'', nf_cholesterol:'',
        nf_protein:'', nf_potassium:''},
    ]);
    const calorieByDate = [
    ];

    const getCurrentDate=()=>{
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        return date + '-' + month + '-' + year;
  }

    const searchApi = (food)=>{
        console.log('Nutritionix Api called');
        try{
            const nutritionix   = require("nutritionix-api");
            const YOUR_APP_ID   = '7a855f8c';
            const YOUR_API_KEY  = 'e085de6cf814e298bbafe92b7c4c136e';
            nutritionix.init(YOUR_APP_ID,YOUR_API_KEY);
            nutritionix.natural.search(food).then(result => {
              setResults(result.foods[0]);
              console.log(result.foods[0].nf_calories);
              setFoodC(result.foods[0].nf_calories);
            });
        }catch(err){
            console.log(err);
            setErrorMessage('Something went wrong');
        }
    };

    const cCalorie= ()=>{
      console.log('Nutritionix Api called');
      try{
        console.log(foodC);
        setTotalCalorie(totalCalorie+foodC);
        console.log(totalCalorie);
      }catch(err){
          console.log(err);
          setErrorMessage('Something went wrong');
      }
  };
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Today's Calories</Text>
    
        <View>
          <Text style={styles.text}>Search Food</Text>
          <View style={[styles.input,{flexDirection: "row"}]}>
            <TextInput
              style={[styles.inputText,{flex:1}]}
              placeholder="food" 
              onChangeText={(text) => {
                setFood((text));
              }}>
            </TextInput>
          </View>

        </View>
        <View>
          <TouchableOpacity
            style={styles.submit}
            onPress={() => {
                searchApi(food);
            }}
            title="Submit"
            ><Text style={styles.text}>Search</Text>
          </TouchableOpacity>
            </View>
                <View>
                    <Text style={styles.text}> Name: {result.food_name}</Text>
                    <Text style={styles.text}> Calori: {result.nf_calories}</Text>
                    <Text style={styles.text}> Total fat: {result.nf_total_fat}</Text>
                    <Text style={styles.text}> Saturated fat: {result.nf_saturated_fat}</Text>
                    <Text style={styles.text}> Cholesterol: {result.nf_cholesterol}</Text>
                    <Text style={styles.text}> Carbohydrate: {result.nf_total_carbohydrate}</Text>
                </View>
            
                <TouchableOpacity
                    style={styles.submit}
                    onPress={() => {
                      cCalorie();
                    }}
                    title="Submit"
                    ><Text style={styles.text}>Add</Text>
                </TouchableOpacity>

                <Text style={styles.title}>Total Calori: {totalCalorie}</Text>

                <TouchableOpacity
                    style={styles.submit}
                    onPress={() => {
                        calorieByDate.push(getCurrentDate(),totalCalorie);
                        console.log(calorieByDate);
                        
                  try {
                    AsyncStorage.setItem('calorieByDate', JSON.stringify(calorieByDate));
                    console.log(AsyncStorage);
                  } catch (e) {
                    // saving error
                  }
                    }}
                    title="Submit"
                    ><Text style={styles.text}>Done</Text>
                </TouchableOpacity>
            
         
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
      justifyContent: "center",
      marginBottom:10,
      marginTop:20,
    },
    input:{
      borderBottomWidth: 3,
      borderColor:"gray",
      marginHorizontal: 15,
      marginBottom:10,
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

export default DailyCaloriesScreen;