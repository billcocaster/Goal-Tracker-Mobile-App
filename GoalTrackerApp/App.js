import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import CompletedGoals from './components/CompletedGoals';

export default function App() {

  const[goals, setGoals] = useState([]);
  const[modalVisible, setModalVisible] = useState(false);
  const [completedGoalsModalVisible, setCompletedGoalsModalVisible] = useState(false);
  const completedGoals = goals.filter((goal) => goal.done);


  function startAddGoalHandler() {
    setModalVisible(true);
  }
  function endAddGoalHandler() {
    setModalVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setGoals((currentGoals) => [...goals, {text: enteredGoalText, id: Math.random().toString(), done: false}]);
    endAddGoalHandler();
  }

  function removeGoalHandler(id) {
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  function markAsDoneHandler(id) {
    setGoals((currentGoals) => {
      return currentGoals.map((goal) => {
        if(goal.id === id) {
          return {...goal, done: true};
        }
        return goal
      });
    });
  }

  function showCompletedGoalsHandler() {
    setCompletedGoalsModalVisible(true);
  }

  function hideCompletedGoalsHandler() {
    setCompletedGoalsModalVisible(false);
  }

  return (
    <View style={styles.appContainer}>
      <Button title='Add new goal' onPress={startAddGoalHandler}/>
      <Button title='Completed Goals' onPress={showCompletedGoalsHandler}/>
      <GoalInput onAddGoal={addGoalHandler} visible = {modalVisible} onCancel={endAddGoalHandler}/>
      <View>
        <FlatList data={goals} renderItem={(itemData) => {
            return(
                <GoalItem 
                  text = {itemData.item.text} 
                  id ={itemData.item.id}
                  done = {itemData.item.done}
                  onRemoveItem = {removeGoalHandler}
                  onMarkAsCompleted = {markAsDoneHandler}
                />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
      <CompletedGoals
        visible = {completedGoalsModalVisible}
        onClose = {hideCompletedGoalsHandler}
        completedGoals = {completedGoals}
        onRemoveItem = {removeGoalHandler}
        onMarkAsDone = {markAsDoneHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  goalsContainer: {
    flex: 5,
  },
});
