import React, {useState, Component, useRef} from 'react';
import {weightLoseSpeed as Styles} from '../Style/index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Input, CheckBox, Slider} from 'react-native-elements';
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
  const [value, setValue] = useState(0);

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#ffff',padding: 20}}>
      {/* <ImageBackground
        source={require('../Images/welcomePage.jpg')}
        style={Styles.background}>
        <Text style={Styles.Fitnessio}>Fitnessio</Text>
      </ImageBackground> */}
      <View style={Styles.background}></View>

      <View style={Styles.bottom}>
        <View style={Styles.bottomContainer}>
          <Text style={Styles.welcomeText}>
            How Fast you want to lose your weight?
          </Text>
        </View>
      </View>
      <View style={Styles.lowestContainer}>
        <View
          style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
          <Slider
            value={value}
            disabled={false}
            onValueChange={setValue}
            maximumValue={5}
            minimumValue={0}
            step={1}
            trackStyle={{height: 10, backgroundColor: 'transparent'}}
            thumbStyle={{
              height: 20,
              width: 20,
              backgroundColor: 'transparent',
            }}
            thumbProps={{
              children: (
                <Icon
                  name="weight-hanging"
                  type="font-awesome"
                  size={20}
                  reverse
                  containerStyle={{bottom: 20, right: 20}}
                  color="#f50"
                />
              ),
            }}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 20}}>{value / 2}/KG per week</Text>
        </View>
      </View>

      <LinearGradient
        start={{x: 0.3, y: 0.25}}
        end={{x: 0.5, y: 0.7}}
        locations={[0.3, 1.6, 0.6]}
        colors={['#5362D5', '#5362D5', '#5362D5']}
        style={Styles.linearGradient}>
        <TouchableOpacity
          onPress={() =>
            navigation.push('Confirm', [...props.route.params, value / 2])
          }>
          <Text style={Styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </LinearGradient>
    </ScrollView>
  );
};
export default index;
