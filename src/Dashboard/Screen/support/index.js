import React, {useState,useContext} from 'react';
import {index as styles} from './Style';
import {View, Text, TouchableOpacity} from 'react-native';
import {Input} from 'react-native-elements';
import {TextInput} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import {Picker} from '@react-native-picker/picker';
import DataContext from '../../../DataContext/DataContext';

// import {View, Text} from 'react-native';
const index = props => {
  const {helpAndSupport} = useContext(DataContext);

  const [issue, setIssue] = useState('subscription');
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.hello}>Say Hello!</Text>
      <View style={styles.textArea}>
        <Input
          placeholder="Title"
          onChangeText={e => {
            setTitle(e);
          }}
        />
        <Picker
          selectedValue={issue}
          onValueChange={(itemValue, itemIndex) => setIssue(itemValue)}>
          <Picker.Item label="subscription" value="subscription" />
          <Picker.Item label="food delivery" value="food delivery" />
          <Picker.Item label="coaching" value="coaching" />
          <Picker.Item label="Other" value="Other" />
        </Picker>

        <TextInput
          onChangeText={e => {
            setDetail(e);
          }}
          multiline={true}
          numberOfLines={13}
          mode="outlined"
          label="Please provide details"
          placeholder="Type something"
        />
        <LinearGradient
          start={{x: 0.3, y: 0.25}}
          end={{x: 0.5, y: 0.7}}
          locations={[0.3, 1.0, 0.6]}
          colors={['#3D6ABA', '#2F569D', '#20478D']}
          style={styles.linearGradient}>
          <TouchableOpacity
            onPress={() => {
                if(title=="" || detail==""){
                    alert("Please provide details")
                }else{
                    alert("Your issue is recorded. We will context your on your email")
                }
            }}>
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};
export default index;
