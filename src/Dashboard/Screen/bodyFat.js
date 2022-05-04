import React, {useState, Component, useRef, useContext} from 'react';
import {bodyFat as Styles} from '../Style/index';

import LinearGradient from 'react-native-linear-gradient';
import {RadioButton} from 'react-native-paper';
import DataContext from '../../DataContext/DataContext';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-paper';

const index = props => {
  const navigation = props.navigation;
  const {predictBodyFat} = useContext(DataContext);
  const [bodyfat, setBodyFat] = useState('null');

  const [value, setValue] = React.useState('Yes');
  const yesPart = () => {
    return (
      <TextInput
        mode="outlined"
        label="Enter Body Fat percentage"
        placeholder=""
        onChangeText={e => {
          setBodyFat(e);
        }}
        style={{paddingBottom: 20}}
        right={<TextInput.Affix text="%" />}
      />
    );
  };
  const noPart = () => {
    return (
      <View>
        <TextInput
          mode="outlined"
          label="Waist in cm"
          placeholder=""
          onChangeText={e => {
            setBodyFat(e);
          }}
          style={{paddingBottom: 20}}
          right={<TextInput.Affix text="cm" />}
        />
      </View>
    );
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#ffff'}}>
      <View style={Styles.Container}>
        <View style={Styles.bottom}>
          <Text style={Styles.welcomeText}>Body Fat</Text>
          <Text style={{color: '#1f1b5c', paddingLeft: 30}}>
            Please Provide your Body Fat details
          </Text>
        </View>

        <View style={Styles.loginContainer}>
          <Text style={{fontSize: 16, marginBottom: 20, color: '#1f1b5c'}}>
            Do you know your Fat %
          </Text>
          <RadioButton.Group
            onValueChange={newValue => setValue(newValue)}
            value={value}
            style={Styles.RadioButton}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{paddingRight: 60, paddingTop: 5}}>Yes</Text>
              <RadioButton value="Yes" />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{paddingRight: 63, paddingTop: 5}}>No</Text>
              <RadioButton value="No" />
            </View>
          </RadioButton.Group>
          {value === 'Yes' ? yesPart() : noPart()}
          <LinearGradient
            start={{x: 0.3, y: 0.25}}
            end={{x: 0.5, y: 0.7}}
            locations={[0.3, 1.6, 0.6]}
            colors={['#5362D5', '#5362D5', '#5362D5']}
            style={Styles.linearGradient}>
            <TouchableOpacity
              onPress={async () => {
                if (bodyfat === 'null') {
                  alert('Please enter a valid value')
                } else {
                  if (value === 'No') {
                    var result = await predictBodyFat({bodyfat});
                    setBodyFat(result);
                    navigation.push('choseGole', [
                      ...props.route.params,
                      result,
                    ]);
                  } else {
                    navigation.push('choseGole', [
                      ...props.route.params,
                      bodyfat,
                    ]);
                  }
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
