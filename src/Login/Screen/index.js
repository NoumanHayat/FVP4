import React, {useRef,useContext, useEffect} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {indexStyle as Styles} from '../Style/index';
import DataContext from '../../DataContext/DataContext';
const index = props => {
  const navigation = props.navigation;
  const {autoLogin} = useContext(DataContext);
  //==================================================================
  useEffect(() => {
    async function working() {
      const result=await autoLogin();
      if(result){
        navigation.push("Dashboard")
      }
    }

    working();
     
  }, []);

  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#ffff'}}
      showsVerticalScrollIndicator={false}>
      <View>
        <ImageBackground
          source={require('../Images/welcomePageMain.jpg')}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: Dimensions.get('window').height / 1,
          }}>
          <Image
            style={Styles.logo}
            source={require('../Images/Fitnessio-logos_white.png')}
          />

          <TouchableOpacity
            style={Styles.loginButton}
            onPress={() => {
              navigation.push('Login');
            }}>
            <Text style={Styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.createAccountButton}
            onPress={() => {
              navigation.push('createAccount');
            }}>
            <Text style={Styles.createAccountButtonText}>Create Account</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};
export default index;
