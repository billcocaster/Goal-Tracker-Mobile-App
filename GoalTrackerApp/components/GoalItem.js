import {StyleSheet, Text, View, Pressable} from 'react-native';
function GoalItem(props) {
    return (
        <Pressable onPress={props.onRemoveItem.bind(this, props.id)} style={({pressed}) => pressed && styles.itemPressed}>
            <View style={styles.GoalItem}>
                <Text>{props.text}</Text>
            </View>
        </Pressable>
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
    }
});