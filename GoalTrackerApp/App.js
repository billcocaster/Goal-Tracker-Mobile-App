import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';

export default function App() {
  const[enteredGoalText, setEnteredGoalText] = useState('');
  const[goals, setGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  };
  function addGoalHandler() {
    setGoals((currentGoals) => [...goals, {text: enteredGoalText, id: Math.random().toString()}]);
  }


  return (
    <View style={styles.appContainer}>
      <View>
        <TextInput placeholder='Your goal' onChangeText={goalInputHandler}/>
        <Button title='Add goal' onPress={addGoalHandler}/>
      </View>
      <View>
        <FlatList data={goals} renderItem={(itemData) => {
            return(
                <View>
                  <Text>{itemData.item.text}</Text>
                </View>
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
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
