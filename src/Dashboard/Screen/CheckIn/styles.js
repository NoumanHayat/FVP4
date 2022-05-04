import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
export const Screen1 = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
  },
  Button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 10,
    padding: 20,
   top:Dimensions.get('window').width/3.01
  },
  TouchableOpacity: {
    padding: 30,
    alignItems: 'center',
    backgroundColor: '#2E8AE9',
    margin: 20,
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 50,
    paddingRight: 50,
  },
  inTake:{
    marginTop:30
  }
});
export const Screen2 = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
  },
  Button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row', 
    margin: 10,
    padding: 20,
   top:Dimensions.get('window').width/10
  },
  TouchableOpacity: {
    padding: 30,
    alignItems: 'center',
    backgroundColor: '#2E8AE9',
    margin: 20,
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 50,
    paddingRight: 50,
  },
});
export const Screen3 = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
  },
  inTake:{
    padding:20
  },
  TouchableOpacity: {
    backgroundColor: '#7BBCFF',
    alignItems: 'center',
    top:90,
    padding: 6,
  },
});

