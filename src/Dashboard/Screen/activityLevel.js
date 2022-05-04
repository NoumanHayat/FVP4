

// //=================================================================
import React, {useState, Component, useRef} from 'react';
import {activityLevel as Styles} from '../Style/index';
import LinearGradient from 'react-native-linear-gradient';

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
  const [selectedItem, setSelectedItem] = React.useState('null');

  const [selectedSedentary, setSelectedSedentary] = React.useState({
    alignItems: 'center',
    fontSize: 35,
    margin: 20,
    borderRadius: 10,
    padding: 3,
    borderWidth: 1,
    borderColor: 'blue',
  });
  const [selectedLightActivity, setSelectedLightActivity] = React.useState({
    alignItems: 'center',
    fontSize: 35,
    margin: 20,
    borderRadius: 10,
    padding: 3,
    borderWidth: 1,
    borderColor: 'blue',
  });
  const [selectedModerateActivity, setSelectedModerateActivity] =
    React.useState({
      alignItems: 'center',
      fontSize: 35,
      margin: 20,
      borderRadius: 10,
      padding: 3,
      borderWidth: 1,
      borderColor: 'blue',
    });
  const [selectedHighlyActive, setSelectedHighlyActive] = React.useState({
    alignItems: 'center',
    fontSize: 35,
    margin: 20,
    borderRadius: 10,
    padding: 3,
    borderWidth: 1,
    borderColor: 'blue',
  });

  const onPressButton = s => {
    if (s === 'Sedentary') {
      setSelectedSedentary({
        alignItems: 'center',
        fontSize: 35,
        margin: 20,
        borderRadius: 10,
        padding: 3,
        borderWidth: 1,
        borderColor: 'blue',
        backgroundColor: '#DDF7FC',
      });
    } else {
      // default button style
      setSelectedSedentary({
        alignItems: 'center',
        fontSize: 35,
        margin: 20,
        borderRadius: 10,
        padding: 3,
        borderWidth: 1,
        borderColor: 'blue',
        backgroundColor: 'white',
      });
    }

    //==========================================================
    if (s === 'LightActivity') {
      setSelectedLightActivity({
        alignItems: 'center',
        fontSize: 35,
        margin: 20,
        borderRadius: 10,
        padding: 3,
        borderWidth: 1,
        borderColor: 'blue',
        backgroundColor: '#DDF7FC',
      });
    } else {
      // default button style
      setSelectedLightActivity({
        alignItems: 'center',
        fontSize: 35,
        margin: 20,
        borderRadius: 10,
        padding: 3,
        borderWidth: 1,
        borderColor: 'blue',
        backgroundColor: 'white',
      });
    }
    //=============================================================
    if (s === 'ModerateActivity') {
      setSelectedModerateActivity({
        alignItems: 'center',
        fontSize: 35,
        margin: 20,
        borderRadius: 10,
        padding: 3,
        borderWidth: 1,
        borderColor: 'blue',
        backgroundColor: '#DDF7FC',
      });
    } else {
      // default button style
      setSelectedModerateActivity({
        alignItems: 'center',
        fontSize: 35,
        margin: 20,
        borderRadius: 10,
        padding: 3,
        borderWidth: 1,
        borderColor: 'blue',
        backgroundColor: 'white',
      });
    }

    if (s === 'HighlyActive') {
      setSelectedHighlyActive({
        alignItems: 'center',
        fontSize: 35,
        margin: 20,
        borderRadius: 10,
        padding: 3,
        borderWidth: 1,
        borderColor: 'blue',
        backgroundColor: '#DDF7FC',
      });
    } else {
      // default button style
      setSelectedHighlyActive({
        alignItems: 'center',
        fontSize: 35,
        margin: 20,
        borderRadius: 10,
        padding: 3,
        borderWidth: 1,
        borderColor: 'blue',
        backgroundColor: 'white',
      });
    }
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#ffff'}}>
      <View style={{marginTop: 55}}>
        <View style={Styles.bottom}>
          <View style={Styles.bottomContainer}>
            <Text style={Styles.welcomeText}>Select Activity Level</Text>
            <Text>Please Select Goal</Text>
          </View>
        </View>

        <View style={Styles.loginContainer}>
          <TouchableOpacity
            style={selectedSedentary}
            onPress={() => {
              setSelectedItem('Sedentary');
              onPressButton('Sedentary');
            }}>
            <Text style={Styles.selectGoleText}>Sedentary</Text>
            <Text>Little or No exercise</Text>
            <Text>Desk Job</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={selectedLightActivity}
            onPress={() => {
              setSelectedItem('Light Activity');
              onPressButton('LightActivity');
            }}>
            <Text style={Styles.selectGoleText}>Light Activity</Text>
            <Text>Little activity thoroughout the day</Text>
            <Text>sports/exercise 1-3 days/week</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={selectedModerateActivity}
            onPress={() => {
              onPressButton('ModerateActivity');
              setSelectedItem('Moderate Activity');
            }}>
            <Text style={Styles.selectGoleText}>Moderate Activity</Text>
            <Text>Some Walking and moving around</Text>
            <Text>Sports/exercise 6-7 days/week</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={selectedHighlyActive}
            onPress={() => {
              onPressButton('HighlyActive');
              setSelectedItem('Highly Active');
            }}>
            <Text style={Styles.selectGoleText}>Highly Active</Text>
            <Text>Some Walking and moving around</Text>
            <Text>Sports/exercise 6-7 days/week</Text>
          </TouchableOpacity>
          <View style={Styles.Continue}>
            <LinearGradient
              start={{x: 0.3, y: 0.25}}
              end={{x: 0.5, y: 0.7}}
              locations={[0.3, 1.6, 0.6]}
              colors={['#5362D5', '#5362D5', '#5362D5']}
              style={Styles.linearGradient}>
              <TouchableOpacity
                onPress={() => {
                  if(selectedItem==="null"){
                    alert("Please select Activity Level ")
                  }else{
                    navigation.push('bodyFat', [...props.route.params, selectedItem])
                  }
                }}>
                <Text style={Styles.buttonTextContinue}>Continue</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default index;
