import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const[goals, setGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setGoals((currentGoals) => [...goals, {text: enteredGoalText, id: Math.random().toString()}]);
  }

  function removeGoalHandler(id) {
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }


  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <View>
        <FlatList data={goals} renderItem={(itemData) => {
            return(
                <GoalItem text = {itemData.item.text} id ={itemData.item.id} onRemoveItem = {removeGoalHandler}/>
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
    flex:1,
    padding: 50,
    backgroundColor: '#fff',
  },
  goalsContainer: {
    flex: 5,
  }
});
