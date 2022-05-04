import {Dimensions, StyleSheet} from 'react-native';
export const indexStyle = StyleSheet.create({
  loginButton: {
    border: 1,
    borderRadius: 20,
    borderColor: 'white',
    backgroundColor: '#5362D5',
    margin: 10,
    flexDirection: 'row',
    padding: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    flex: 0.8,
    fontFamily: 'normal',
  },
  //===========================
  createAccountButton: {
    border: 1,
    borderRadius: 20,
    borderColor: 'white',
    backgroundColor: '#5362D5',
    margin: 10,
    flexDirection: 'row',
    padding: 10,
  },
  createAccountButtonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    flex: 0.8,
  },

  //=============================
  logo: {
    width: 200,
    height: 200,
    marginBottom: 70,
  },
});
export const loginStyle = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height / 2.5,
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
    bottom: 35,
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
export const forgotPassword = StyleSheet.create({
  upperPart: {
    alignItems: 'center',
    margin: 20,
  },
  Container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffff',
  },

  loginContainer: {
    padding: 30,
    paddingTop: 10,
    paddingBottom: 10,
  },

  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',

    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  button: {
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#49AEF2',
    width: '70%',
    marginLeft: '15%',
  },
});
export const resetPassword = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height / 2.5,
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
    bottom: 35,
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
