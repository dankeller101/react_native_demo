import React from 'react';
import {
  Text, FlatList, StyleSheet
} from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Fred' },
    { name: 'Jane' },
    { name: 'Sam' },
    { name: 'Sal' },
    { name: 'Howard' },
  ];
  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => <Text style={styles.textStyle}>{item.name}</Text>}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;
