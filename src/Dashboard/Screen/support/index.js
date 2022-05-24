import React, {useState, useContext} from 'react';
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
  const navigation = props.navigation;
  const [issue, setIssue] = useState('subscription');
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  return (
    <View style={styles.container}>
      {/* <Text style={styles.hello}>Say Hello!</Text> */}
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
          style={{backgroundColor: 'white'}}
          onChangeText={e => {
            setDetail(e);
          }}
          multiline={true}
          numberOfLines={17}
          mode="outlined"
          label="Please provide details"
          placeholder="Type something"
        />

        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            // width: 200,
            // height: 40,
            borderRadius: 15,
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}
          onPress={async () => {
            if (title == '' || detail == '') {
              alert('Please provide details');
            } else {
              await helpAndSupport(title, issue, detail);
              alert(
                'Your issue is recorded. We will context your on your email',
              );
              navigation.push('Dashboard');
            }
          }}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default index;
