import React from 'react';
import { View, FlatList, Button, StyleSheet, Modal } from 'react-native';
import GoalItem from './GoalItem';

function CompletedGoalsModal(props) {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.modalContainer}>
        <Button title="Close" onPress={props.onClose} />
        <FlatList
          data={props.completedGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                done = {itemData.item.done}
                onRemoveItem={props.onRemoveItem}
                onMarkAsCompleted ={props.onMarkAsDone}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </Modal>
  );
}

export default CompletedGoalsModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

