
import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from 'react';

function GoalInput(props) {
    const[enteredGoalText, setEnteredGoalText] = useState('');

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
    };

    return (
        <View>
            <TextInput placeholder='Your goal' onChangeText={goalInputHandler} value={enteredGoalText}/>
            <Button title='Add goal' onPress={addGoalHandler}/>
        </View>
    );
}

export default GoalInput;

const styles = StyleSheet.create({

});