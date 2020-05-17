import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({addItemHandler}) => {
  const [text, setText] = useState('');

  const addTextHandler = val => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        placeholder="Add Item..."
        style={styles.input}
        onChangeText={addTextHandler}
      />
      <TouchableWithoutFeedback
        style={styles.btn}
        onPress={() => addItemHandler(text)}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} />
          Add Item
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
