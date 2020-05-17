import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Shopping List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 100,
    padding: 15,
    backgroundColor: 'darkslateblue',
    paddingTop: 60,
  },
  text: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default Header;
