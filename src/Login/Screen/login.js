
import React, {useState, Component, useRef, useContext} from 'react';

// import LinearGradient from 'react-native-linear-gradient';
import {loginStyle as Styles} from '../Style/index';
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

} from 'react-native';
import DataContext from '../../DataContext/DataContext';

const index = props => {
  const [isSelected, setSelection] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = props.navigation;
  const {signin} = useContext(DataContext);


  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#ffff'}}
      showsVerticalScrollIndicator={false}>
      <View>
        <ImageBackground
          source={require('../Images/welcomePage.jpg')}
          style={Styles.background}>
          <Image
            style={Styles.logo}
            source={require('../Images/Fitnessio-logos_transparent.png')}
          />
          <Text style={Styles.Fitnessio}>Fitnessio</Text>
        </ImageBackground>

        <View style={Styles.bottom}>
          <View style={Styles.bottomContainer}>
            <Text style={Styles.welcomeText}>Welcome</Text>
            <TouchableOpacity
              onPress={() => {
                 navigation.push('createAccount');
              }}>
              <Text style={{color: 'black'}}>
                Don't have Account?{' '}
                <Text style={{color: 'red', fontSize: 16}}>Create Now</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={Styles.loginContainer}>
          <Input
            placeholder="Email"
            onChangeText={e => {
              setEmail(e);
            }}
            leftIcon={<Icon name="email" size={15} color="black" />}
          />
          <Input
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={e => {
              setPassword(e);
            }}
            leftIcon={<Icon name="lock" size={15} color="black" />}
          />
          <View style={Styles.forgotPasswordContainer}>
            <CheckBox
              center
              title="Remember Me"
              checked={isSelected}
              onPress={() => setSelection(!isSelected)}
            />

            <TouchableOpacity
              onPress={() => {
                navigation.push('forgotPassword');
              }}
              style={Styles.forgotPassword}>
              <Text style={Styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <LinearGradient
            start={{x: 0.3, y: 0.25}}
            end={{x: 0.5, y: 0.7}}
            locations={[0.3, 1.6, 0.6]}
            colors={['#5362D5', '#5362D5', '#5362D5']}
            style={Styles.linearGradient}>
            <TouchableOpacity
              onPress={async () => {
                var result = await signin({email, password});
                result
                  ? navigation.push('Dashboard')
                  : alert('Incorrect email or password');
              }}>
              <Text style={Styles.buttonText}>Sign in Now</Text>
            </TouchableOpacity>
          </LinearGradient>
        
        </View>
      </View>
    </ScrollView>
  );
};
export default index;

