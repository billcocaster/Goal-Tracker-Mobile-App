import { useState } from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, Alert } from 'react-native';
function GoalItem(props) {
    const [showButtons, setShowButtons] = useState(false); 
    const confirmDeleteHandler = () => {
        Alert.alert(
            'Delete Goal', 'Do you really want to delete this goal?',
            [
                {text: 'No', style: 'cancel'},
                {text: 'Yes', style: 'destructive', onPress: props.onRemoveItem.bind(this, props.id)},
            ]);
    }
    return (
        <TouchableOpacity onPress={() => setShowButtons(!showButtons)}>
            <View style={styles.GoalItem}>
                <Text>{props.text}</Text>
                {showButtons && 
                    <View style={styles.buttonContainer}>
                        <Button title='Delete goal'
                         onPress={confirmDeleteHandler} 
                        />
                    </View>
                }
            </View>
        </TouchableOpacity>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    GoalItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
    },
    itemPressed:{
        opacity: 0.4,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});