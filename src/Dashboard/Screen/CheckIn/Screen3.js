import React, {useState, Component, useRef} from 'react';
import {heightWeight as Styles} from '../../Style/index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Input, CheckBox} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {RadioButton} from 'react-native-paper';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Animated, 
  TouchableOpacity,
} from 'react-native';

const index = props => {
  const navigation = props.navigation;

  
  const [weight, setWeight] = React.useState('');
  
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#ffff'}}>
      <View style={{marginTop:130}}>
      <View style={Styles.bottom}>
        <View style={Styles.bottomContainer}>
          <Text style={Styles.welcomeText}>Welcome</Text>
          <Text>Please enter your Weight</Text>
        </View>
      </View>

      <View style={Styles.loginContainer}>
        <Input
          placeholder="Enter Weight in KG"
          onChangeText={e => {
            setWeight(e);
          }}
          leftIcon={<Icon name="weight" size={15} color="black" />}
        />
        

     

        <LinearGradient
          start={{x: 0.3, y: 0.25}}
          end={{x: 0.5, y: 0.7}}
          locations={[0.3, 1.6, 0.6]}
          colors={['#5362D5', '#5362D5', '#5362D5']}
          style={Styles.linearGradient}>
          <TouchableOpacity  
            onPress={() => {
              if(weight!==''){
                navigation.push("Calories",weight);
              }else{
                alert('Please enter details')
              }
             
            }}>
            <Text style={Styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      </View>
    </ScrollView>
  );
};
export default index;
