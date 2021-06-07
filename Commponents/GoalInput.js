import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet,Modal } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = ()=>{
    props.onAddGoal(enteredGoal)
    setEnteredGoal('')

  }

  return (
    <Modal style={styles.module} visible = {props.isAddMode} animationType="slide">
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
   <View style = {styles.btns}>
      <View style={styles.btn}>
      <Button title="CANCEL" color="red" onPress={props.onCancel} />
      </View>
      <View style={styles.btn}>
      <Button title="ADD" onPress={addGoalHandler}  />
      </View>
      </View>
    </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom : 10
  },
  btns:{
    flexDirection:"row",
    justifyContent:"space-between",
    width:"60%",



  }
  ,btn:{
    width:"40%",

  }

});

export default GoalInput;
