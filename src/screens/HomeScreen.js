import React, { useState } from "react";
import {StyleSheet, Text, View, Button} from 'react-native';

const HomeScreen = (props) => {
  console.log(props);

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Calorie Calculator</Text>
          <View style={styles.item}>
            <Button
            onPress={()=>props.navigation.navigate('BmiScreen')}
            title="CALCULATE BODY MAX INDEX" />
          </View>
          <View style={styles.item}>
            <Button style={styles.buttons}
            onPress={()=>props.navigation.navigate('BmrScreen')}
            title="CALCULATE BASAL METABOLIC RATE" />
          </View>
          <View style={styles.item}>
            <Button style={styles.buttons}
            onPress={()=>props.navigation.navigate('DailyCaloriesScreen')}
            title="DAILY CALORIES" />
          </View>
          <View style={styles.item}>
            <Button style={styles.buttons}
            onPress={()=>props.navigation.navigate('CalorieCalendarScreen')}
            title="CALORIE CALENDAR" />
          </View>
          
      </View>
        
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    backgroundColor: 'azure',
    padding: 8,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    alignContent: "center",
    margin: 10,
  },
  item: {
    margin: 5,
    flexDirection: 'column',
  },
  buttons: {
    color: 'red',
  },
});

export default HomeScreen;
