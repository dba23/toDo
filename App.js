import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList
} from 'react-native';

import GoalItem from './Commponents/GoalItem';
import GoalInput from './Commponents/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setisAddMode] = useState(false)
  const addGoalHandler = goalTitle => {
    if(goalTitle.length === 0){
      return
    }
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setisAddMode(false)

  };
  const deletGoal = goalId =>{
  setCourseGoals(currentGoals=>{
    return currentGoals.filter((goal)=>{
      goal.id !== goalId
    })
  
  })  
  }
  const cancelAdding = ()=>{
    setisAddMode(false)
  }

  return (
    <View style={styles.screen}>
      <Button title = {"Add new goal"} onPress ={()=>{
        setisAddMode(true)
      }} />
      <GoalInput 
       onAddGoal={addGoalHandler}
        isAddMode = {isAddMode}
         onCancel = {cancelAdding} />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem id={itemData.item.id} onDelet = {deletGoal.bind(this,itemData.item.id)        }  title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
