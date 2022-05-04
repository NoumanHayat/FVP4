import React, {useState, Component, useRef, useContext} from 'react';

// import LinearGradient from 'react-native-linear-gradient';
import {forgotPassword as Styles} from '../Style/index';
import Icon from 'react-native-vector-icons/Entypo';
import {Input, CheckBox} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Dimensions,
  Button,
  Animated,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import DataContext from '../../DataContext/DataContext';

const index = props => {
  const navigation = props.navigation;
  const [email, setEmail] = useState('');

  const {forgotPassword} = useContext(DataContext);
  return (
    <View style={Styles.Container}>
      <View style={Styles.loginContainer}>
        <View style={Styles.upperPart}>
          <Text style={{fontSize: 25, fontWeight: 'bold', padding: 10}}>
            Forgot Your Password?
          </Text>
          <Text>
            Enter your registration email bleow to receive your password reset
            instructions
          </Text>
          <Image
            style={{width: 220, height: 200}}
            source={require('../Images/inbox.jpg')}
          />
        </View>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 20,
            margin: 15,
          }}
          placeholder="Please Enter your Email"
          onChangeText={e => {
            setEmail(e);
          }}
          leftIcon={<Icon name="email" size={15} color="black" />}
        /> 
 
        <TouchableOpacity
          onPress={() => {
            navigation.push('Login');
          }}>
          <Text style={{paddingTop:5,paddingBottom:10,marginLeft:50}}>Remember your Password <Text style={{color:'red'}}>Login?</Text></Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={Styles.button}
          onPress={async () => {
            var result = await forgotPassword({email});
            result? navigation.push('resetPassword', email): alert('Incorrect email');
          }}>
          <Text style={Styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default index;
