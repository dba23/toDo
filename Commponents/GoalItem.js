import React from 'react'
import { StyleSheet, Text, View , TextInput, ScrollView ,Button , FlatList , TouchableOpacity } from 'react-native';

const GoalItem = props =>{
    return (
    <TouchableOpacity onPress= {props.onDelet}>
        <View style = {styles.listItem}  >
    <Text>{props.title}</Text>
        </View>
    </TouchableOpacity>
    )
    

}

const styles = StyleSheet.create({
      
      listItem:{
        padding:10,
        backgroundColor:'#ccc',
        borderColor:'black',
        marginVertical:10,
        color:'black',
        flex:1
        }
  });
  export default GoalItem