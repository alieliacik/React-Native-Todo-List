import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import uuid from 'uuid-random';

import Header from './components/Header/Header';
import ListItem from './components/ListItem/ListItem';
import AddItem from './components/AddItems/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Eggs'},
    {id: uuid(), text: 'Bread'},
    {id: uuid(), text: 'Juice'},
  ]);

  const deleteItemHandler = id => {
    const filteredItems = [...items].filter(i => i.id !== id);
    setItems(filteredItems);
  };

  const addItemHandler = text => {
    if (!text) {
      Alert.alert('Error!', 'Please enter an item', [{text: 'Ok'}]);
    } else {
      setItems(prevItems => {
        return [{id: uuid(), text}, ...items];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItemHandler={addItemHandler} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItemHandler={deleteItemHandler} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
