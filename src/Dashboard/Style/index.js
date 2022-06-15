import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
export const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    //  justifyContent: 'center',
    alignItems: 'center',
  },
  dynamic: {
    marginBottom: 40,
    alignItems: 'center',

  },
  DateButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1,
    paddingTop: 5,
    flexDirection: 'row',
  },
  buttonGroupStyle: {
    width: Dimensions.get('window').width / 1.1,
  },
  cardStyle: {
   
    width: Dimensions.get('window').width/1.1,
  },
  updateAdd: {
    flex: 1,
    justifyContent: 'center',
  },
  plus: {
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'flex-end',
  },
  touchableSymble: {
    position: 'relative',
    flexDirection: 'row',
    flex: 1,
    paddingLeft: Dimensions.get('window').width / 8,
    // alignItems: 'flex-end',
    alignSelf: 'flex-end',
  },
});
export const coache = StyleSheet.create({
  container: {
    flex: 1,
    //  justifyContent: 'center',
    paddingTop: 15,
    //  alignItems: 'center',
  },
  topContainer: {
    backgroundColor: '#817E7B',
    paddingTop: 15,
    flex: 0.5,
    alignItems: 'center',
  },
});
export const heightWeight = StyleSheet.create({
  RadioButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 40,
  },

  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height / 3.9,
  },

  Fitnessio: {
    color: 'white',
    fontSize: 32,
  },
  bottom: {
    backgroundColor: 'white',

    borderTopStartRadius: 45,
    borderTopEndRadius: 45,
    bottom: 45,
  },
  bottomContainer: {
    padding: 45,
    paddingBottom: 10,
  },
  welcomeText: {
    color: '#1f1b5c',
    fontSize: 23,
  },
  loginContainer: {
    padding: 30,
    paddingTop: 10,
    paddingBottom: 10,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
export const selectGole = StyleSheet.create({
  selectGole: {
    alignItems: 'center',
    fontSize: 35,
    margin: 20,
    borderRadius: 10,
    padding: 3,
    borderWidth: 1,
    borderColor: 'blue',
  },
  selectGoleText: {
    fontSize: 30,
    color: 'blue',
  },
  Continue: {
    alignItems: 'center',
    paddingTop: 30,
    fontSize: 35,
  },

  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height / 2.5,
  },

  Fitnessio: {
    color: 'white',
    fontSize: 32,
  },
  bottom: {
    backgroundColor: 'white',

    borderTopStartRadius: 45,
    borderTopEndRadius: 45,
    bottom: 45,
  },
  bottomContainer: {
    padding: 45,
    paddingBottom: 10,
  },
  welcomeText: {
    color: '#1f1b5c',
    fontSize: 33,
  },
  loginContainer: {
    padding: 30,
    paddingTop: 10,
    paddingBottom: 10,
  },

  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  buttonTextContinue: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    paddingRight: 70,
    paddingLeft: 70,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
export const activityLevel = StyleSheet.create({
  selectGole: {
    alignItems: 'center',
    fontSize: 35,
    margin: 20,
    borderRadius: 10,
    padding: 3,
    borderWidth: 1,
    borderColor: 'blue',
  },
  selectGoleText: {
    fontSize: 30,
    color: 'blue',
  },
  Continue: {
    alignItems: 'center',
    paddingTop: 30,
    fontSize: 35,
  },

  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height / 2.5,
  },

  Fitnessio: {
    color: 'white',
    fontSize: 32,
  },
  bottom: {
    backgroundColor: 'white',

    borderTopStartRadius: 45,
    borderTopEndRadius: 45,
    bottom: 45,
  },
  bottomContainer: {
    padding: 45,
    paddingBottom: 10,
  },
  welcomeText: {
    color: '#1f1b5c',
    fontSize: 33,
  },
  loginContainer: {
    padding: 30,
    paddingTop: 10,
    paddingBottom: 10,
  },

  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  buttonTextContinue: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    paddingRight: 70,
    paddingLeft: 70,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export const bodyFat = StyleSheet.create({
  Container: {
    paddingTop: Dimensions.get('window').height / 4.5,
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height / 2.5,
  },

  Fitnessio: {
    color: 'white',
    fontSize: 32,
  },
  bottom: {
    backgroundColor: 'white',

    borderTopStartRadius: 45,
    borderTopEndRadius: 45,
    bottom: 45,
  },
  bottomContainer: {
    padding: 45,
    paddingBottom: 10,
  },
  welcomeText: {
    color: '#1f1b5c',
    fontSize: 33,
    paddingLeft: 30,
    paddingBottom: 10,
  },
  loginContainer: {
    padding: 30,
    paddingTop: 10,
    paddingBottom: 10,
  },

  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
export const choseGole = StyleSheet.create({
  currentWeight: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 35,
  },

  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height / 3.9,
  },

  Fitnessio: {
    color: 'white',
    fontSize: 32,
  },
  bottom: {
    backgroundColor: 'white',

    borderTopStartRadius: 45,
    borderTopEndRadius: 45,
    bottom: 45,
  },
  bottomContainer: {
    padding: 45,
    paddingBottom: 10,
  },
  welcomeText: {
    color: '#1f1b5c',
    fontSize: 33,
    paddingBottom: 10,
    paddingLeft: 30,
  },
  loginContainer: {
    padding: 30,
    paddingTop: 10,
    paddingBottom: 10,
  },

  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
export const profile = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff'
  },
  profileImage: {
    // borderRadius:150,
    overflow: 'hidden',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 40,
  },
  add: {
    position: 'absolute',
    top: 160,
    left: '50%',
  },
  namePart: {
    alignItems: 'center',
  },
  lowerPart: {
    marginTop: 20,
    padding: 20,
  },
  touchableOpacity: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 3,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    borderColor: 'blue',
  },
});
export const weightLoseSpeed = StyleSheet.create({
  lowestContainer: {
    padding: 10,
  },
  selectGole: {
    alignItems: 'center',
    fontSize: 25,
    margin: 20,
    borderRadius: 50,
    borderWidth: 3,
  },
  selectGoleText: {
    fontSize: 30,
  },

  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height / 6.5,
  },
  logo: {
    width: 150,
    height: 150,
  },
  Fitnessio: {
    color: 'white',
    fontSize: 32,
  },
  bottom: {
    backgroundColor: 'white',

    bottom: 15,
  },
  bottomContainer: {
    paddingTop: 25,
    paddingBottom: 10,
  },
  welcomeText: {
    color: '#1f1b5c',
    fontSize: 30,
  },
  loginContainer: {
    padding: 30,
    paddingTop: 10,
    paddingBottom: 10,
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    fontSize: 15,
  },
  forgotPassword: {
    paddingLeft: '10%',
  },
  forgotPasswordText: {
    color: 'blue',
    textAlign: 'right',
  },
  linearGradient: {
    flex: 1,
    marginTop: 30,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginBottom: 40,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
//=================================================
export const Me = StyleSheet.create({
  profileImage: {
    // borderRadius:150,
    overflow: 'hidden',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 90,
  },
  arrow: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',

    right: '5%',
  },
  container: {
    flex: 1,
    // backgroundColor: '#fff'
  },
  namePart: {
    marginTop: 0,
    padding: 20,
  },
  lowerPart: {
    marginTop: 0,
    padding: 20,
  },
  touchableOpacity: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    width: '100%',
  },
});
export const Coaching = StyleSheet.create({
  container: {
    flex: 1,
  },
  namePart: {
    marginTop: '5%',
    // alignItems: 'center',
  },
  golesAndWeights: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  containerSecond: {
    margin: 30,
    flex: 1,
    flexDirection: 'row',
  },
  boxContainer: {
    flex: 0.25,
  },
  containerThird: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerFourth: {
    flex: 1,
    marginTop: '13%',
    flexDirection: 'row',
  },
  statusContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusText: {
    fontSize: 22,
    color: 'black',
  },
  progressBar: {
    margin: 10,
    padding: 10,
    paddingBottom:0,
    marginBottom:0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkInButton: {
    padding: 10,
    margin: 10,
    marginTop:3,
    paddingTop:3,
    // marginTop: 50,
  },
  touchableOpacity: {
    borderColor: '#CEE1D0',

    borderWidth: 1,
    margin: 10,
    borderRadius: 15,
  },
});
export const CustomCalories = StyleSheet.create({
  ButtonRow: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 15,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    flex: 0.7,
    margin: 10,

    borderRadius: 20,
  },
  button1: {
    alignItems: 'center',
    backgroundColor: '#1548FC',
    padding: 10,
    flex: 0.3,
    margin: 10,
    borderRadius: 20,
  },
  details: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsButton: {
    fontSize: 22,
  },
  buttonGroupStyle: {
    width: Dimensions.get('window').width / 1.1,
  },
  loginContainer2: {
    padding: 10,
  },
  background: {
    flex: 1,

    paddingTop: Dimensions.get('window').height / 13.9,
    paddingBottom: Dimensions.get('window').height / 13.9,
  },
  logo: {
    width: 150,
    height: 150,
  },
  Fitnessio: {
    color: 'white',
    fontSize: 32,
  },
  bottom: {
    backgroundColor: 'white',
    paddingTop: 35,
    borderTopStartRadius: 45,
    borderTopEndRadius: 45,
    bottom: 45,
  },
  bottomContainer: {
    padding: 45,
    paddingBottom: 10,
  },
  welcomeText: {
    color: '#1f1b5c',
    fontSize: 23,
  },
  loginContainer: {
    padding: 30,
    paddingTop: 10,
    paddingBottom: 10,
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    fontSize: 15,
  },
  forgotPassword: {
    paddingLeft: '10%',
  },
  forgotPasswordText: {
    color: 'blue',
    textAlign: 'right',
  },
  linearGradient: {
    flex: 1,
    marginTop: 40,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
export const foodList = StyleSheet.create({
  container: {
    flex: 1,
    //  justifyContent: 'center',
    alignItems: 'center',
  },

  buttonGroupStyle: {
    width: Dimensions.get('window').width / 1.1,
  },
  cardStyle: {
    width: Dimensions.get('window').width,
  },
  updateAdd: {
    flex: 0.99,
  },
  plus: {
    paddingLeft: 10,
    // paddingRight: 10,
    // alignItems: 'flex-end',
  },
  touchableSymble: {
    position: 'relative',
    flexDirection: 'row',
    flex: 1,
    paddingLeft: Dimensions.get('window').width / 3.5,
    alignItems: 'flex-end',
  },
});
export const Calories = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    padding: 20,
  },
  DetailBox: {
    backgroundColor: '#E3E7F2',
  },
});
export const DailyWeight = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#ffff',
    padding: 20,
  },
  HeadingText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  InputArea: {
    marginTop: 30,
    padding: 8,
  },
  touchableOpacity: {
    borderColor: '#CEE1D0',
    borderWidth: 1,
    margin: 10,
    borderRadius: 15,
    backgroundColor: 'blue',
  },
  touchableOpacityArea: {
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 17,
    color: '#ffffff',
  },
});
export const checkInHsitory = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#ffff',
    padding: 20,
  },
  HeadingText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  CardView:{
    marginTop:10,
    flexDirection: 'row',
    flex:1
  },
  FlatListViewContainer:{
    padding: 20,
    marginTop:10
  },
  IconArea:{

  },
  TextArea:{
    flex:1
  }
});
