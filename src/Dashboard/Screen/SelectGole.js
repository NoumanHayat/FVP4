import React, {useState, Component, useRef} from 'react';
import {selectGole as Styles} from '../Style/index';
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
  const [selectedFat, setSelectedFat] = React.useState({
    alignItems: 'center',
    fontSize: 35,
    margin: 20,
    borderRadius: 10,
    padding: 3,
    borderWidth: 1,
    borderColor: 'blue',
  });
  const [selectedMG, setSelectedMG] = React.useState({
    alignItems: 'center',
    fontSize: 35,
    margin: 20,
    borderRadius: 10,
    padding: 3,
    borderWidth: 1,
    borderColor: 'blue',
  });
  const [selectedMW, setSelectedMW] = React.useState({
    alignItems: 'center',
    fontSize: 35,
    margin: 20,
    borderRadius: 10,
    padding: 3,
    borderWidth: 1,
    borderColor: 'blue',
  });

  const onPressButton = s => {
    if (s === 'Fat loss') {
      setSelectedFat({
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
      setSelectedFat({
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
    if (s === 'Muscle gain') {
      setSelectedMG({
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
      setSelectedMG({
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
    if (s === 'Maintan weight') {
      setSelectedMW({
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
      setSelectedMW({
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
      <View style={{marginTop: 130}}>
        <View style={Styles.bottom}>
          <View style={Styles.bottomContainer}>
            <Text style={Styles.welcomeText}>Please Select Goal</Text>
            {/* <TouchableOpacity
              onPress={() => {
                navigation.navigate('chatBot');
              }}>
              <Text style={{color: 'black'}}>
                Need help ? 
                <Text style={{color: 'red', padding: 10, fontSize: 16}}>
                  Click here
                </Text>
              </Text>
            </TouchableOpacity> */}
          </View>
        </View>

        <View style={Styles.loginContainer}>
          <TouchableOpacity
            style={selectedFat}
            onPress={() => {
              setSelectedItem('Fat loss');
              onPressButton('Fat loss');
            }}>
            <Text style={Styles.selectGoleText}>Fat loss</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={selectedMG}
            onPress={() => {
              setSelectedItem('Muscle gain');
              onPressButton('Muscle gain');
            }}>
            <Text style={Styles.selectGoleText}>Muscle gain</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={selectedMW}
            onPress={() => {
              onPressButton('Maintan weight');
              setSelectedItem('Maintan weight');
            }}>
            <Text style={Styles.selectGoleText}>Maintan weight</Text>
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
                  //============================================================================
                  if (selectedItem === 'null') {
                    alert('Please select Goal')
                  } else {
                    navigation.push('activityLevel', [
                      ...props.route.params,
                      selectedItem,
                    ]);
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
