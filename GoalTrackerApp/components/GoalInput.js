
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";
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
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder='Your goal'
                    onChangeText={goalInputHandler} 
                    value={enteredGoalText}
                    style={styles.textInput}
                    />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add goal' onPress={addGoalHandler}/>
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.onCancel} />
                    </View>
                </View>
                
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
      },
      textInput: {
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: '#999999',
        color: 'white',
        borderRadius: 6,
        width: '100%',
        padding: 16,
      },
      buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
      },
      button: {
        width: 100,
        marginHorizontal: 8,
      },
});