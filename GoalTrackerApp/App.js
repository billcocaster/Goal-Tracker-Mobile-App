import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const[goals, setGoals] = useState([]);
  const[modalVisible, setModalVisible] = useState(false);


  function startAddGoalHandler() {
    setModalVisible(true);
  }
  function endAddGoalHandler() {
    setModalVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setGoals((currentGoals) => [...goals, {text: enteredGoalText, id: Math.random().toString()}]);
    endAddGoalHandler();
  }

  function removeGoalHandler(id) {
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }


  return (
    <View style={styles.appContainer}>
      <Button title='Add new goal' onPress={startAddGoalHandler}/>
      <GoalInput onAddGoal={addGoalHandler} visible = {modalVisible} onCancel={endAddGoalHandler}/>
      <View>
        <FlatList data={goals} renderItem={(itemData) => {
            return(
                <GoalItem 
                  text = {itemData.item.text} 
                  id ={itemData.item.id} 
                  onRemoveItem = {removeGoalHandler}
                />
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
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
