import React, {useEffect} from 'react';
import { Text, StyleSheet, FlatList, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { item } from 'nutritionix-api';

const CalorieCalendarScreen = () =>{

    const calorieByDateC = [
        {}
    ];

    const load = async () => {
        try {
          let calorieByDate = await AsyncStorage.getItem('calorieByDate');
          calorieByDateC.push(calorieByDate);
          if (calorieByDate !== null) {
            console.log(calorieByDateC);
          }
        } catch (err) {
          alert(err);
        }
      };

      useEffect(() => {
        load();
      }, []);

    return <Text>
            </Text>
            

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

export default CalorieCalendarScreen;