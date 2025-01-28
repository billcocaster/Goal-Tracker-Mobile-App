import { useState } from 'react';
import { StyleSheet, View, FlatList, Button, Image, TouchableOpacity, Text } from 'react-native';
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
    if (!enteredGoalText.trim()) {
      return;
    }
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
      <View style={styles.tabsContainer}>
        <TouchableOpacity onPress={startAddGoalHandler} style={styles.imageButton}>
          <Image source={require('./assets/imgs/addnew.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Add new goal</Text>
        </TouchableOpacity>
        <View style={styles.buttonImage1}>
          <TouchableOpacity onPress={showCompletedGoalsHandler} style={styles.imageButton}>
            <Image source={require('./assets/imgs/completed.png')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>Completed Goals</Text>
          </TouchableOpacity>
        </View>
        
      </View>
      <GoalInput onAddGoal={addGoalHandler} visible = {modalVisible} onCancel={endAddGoalHandler}/>
      <View style={styles.goalsContainer}>
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
    paddingTop: 60,
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  goalsContainer: {
    flex: 5,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonImage: {
    width: 150,
    height: 150,
    borderWidth: 2,
    borderRadius: 15,
    padding: 10,
  },
  buttonText: {
    fontSize: 16,
    paddingBottom: 20,
    paddingTop: 10,
    textAlign: 'center',
  },
});
