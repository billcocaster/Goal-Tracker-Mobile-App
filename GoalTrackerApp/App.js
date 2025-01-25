import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const[enteredGoalText, setEnteredGoalText] = useState('');
  const[goals, setGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  };
  function addGoalHandler() {
    setGoals(currentGoals => [...goals, enteredGoalText]);
  }


  return (
    <View style={styles.appContainer}>
      <View>
        <TextInput placeholder='Your goal' onChangeText={goalInputHandler}/>
        <Button title='Add goal' onPress={addGoalHandler}/>
      </View>
      <View>
        {goals.map((goal) => <Text>{goal}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    backgroundColor: 'white',
  },
  inputContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
