import {StyleSheet, Text, View} from 'react-native';
function GoalItem(props) {
    return (
    <View style={styles.GoalItem}>
        <Text>{props.text}</Text>
    </View>
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
    }
});