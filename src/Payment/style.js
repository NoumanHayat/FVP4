import {Dimensions, StyleSheet} from 'react-native';
export const SignupStyle = StyleSheet.create({
    background: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: Dimensions.get('window').height / 3.9,
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
      borderTopStartRadius: 45,
      borderTopEndRadius: 45,
      bottom: 29,
    },
    bottomContainer: {
      padding: 27,
      paddingBottom: 5,
    },
    welcomeText: {
      color: '#1f1b5c',
      fontSize: 29,
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