import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Recommendations = () => {
  return (
    <View style={Styles.container}>
      <Text style={{color: 'black'}}>Recommendations Tab</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#ffff',
  },
});
export default Recommendations;
