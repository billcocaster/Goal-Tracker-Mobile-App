import { useState } from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, Alert, } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
                <View style={showButtons ? styles.goalCompleted : styles.iconButtonDone}>
                    <Text style={styles.goalText}>{props.text}</Text>
                    <View style={styles.iconButtonDoneImg}>
                        {props.done && (
                            <Icon name="checkmark-circle-outline" size={24} color="green" />
                        )}
                    </View>
                </View>
                {showButtons && 
                    <View style={styles.buttonContainer}>
                        {!props.done && (
                            <TouchableOpacity onPress={props.onMarkAsCompleted.bind(this, props.id)} style={styles.iconButton}>
                                <Icon name="checkmark-circle-outline" size={24} color="green" />
                                <Text>Mark as done</Text>
                            </TouchableOpacity>
                        )}
                        <TouchableOpacity onPress={confirmDeleteHandler} style={styles.iconButton}>
                            <Icon name="trash-outline" size={24} color="red" />
                            <Text>Delete goal</Text>
                        </TouchableOpacity>
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
        paddingBottom: 5,
        marginVertical: 10,
        backgroundColor: '#ebebeb',
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
    goalCompleted: {
        borderBottomWidth: 1,
        flexDirection: 'row',
    },
    goalText: {
        paddingBottom:5,
    },
    iconButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5,
    },
    iconButtonDone: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconButtonDoneImg: {
        flexDirection: 'row',
    }
});