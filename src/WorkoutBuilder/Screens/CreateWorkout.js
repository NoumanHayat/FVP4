import {xorBy} from 'lodash';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import SelectBox from 'react-native-multi-selectbox';
import DataContext from '../../DataContext/DataContext';

const CreateWorkout = ({navigation}) => { 
  const [selectedItems, setSelectedItems] = useState([]);
  const {exercisedb,customMadeWorkout} = useContext(DataContext);
  const [data, setData] = useState([]);
  const [RPE, setRPE] = useState([]);
  const [reps, setreps] = useState([]);
  const [sets, setsets] = useState([]);
  // a function that takes in sets reps and rpe and makes objects inside array

  const customStyle = {
    backgroundColor: 'blue',
    padding: 10,
    margin: 5,
  };
  const optionFontStyles = {
    fontSize: 15,
    color: 'white',
  };
  // business Logic
  // fetchftn

  // api call
  useEffect(() => {
    async function fetchDatas() {
      var a = await exercisedb();
      setData(a);
     
    }
    fetchDatas();
  }, []);

  function onMultiChange() {
    return item => setSelectedItems(xorBy(selectedItems, [item], 'id'));
  }

  return (
    <View style={Styles.container}>
      <View>
        <SelectBox
          width={'100%'}
          initialNumToRender={50}
          multiOptionContainerStyle={customStyle}
          multiOptionsLabelStyle={optionFontStyles}
          inputPlaceholder="Search for exercises"
          label=" "
          arrowIconColor="#042c5c"
          searchIconColor="#042c5c"
          toggleIconColor="#042c5c"
          selectedItemStyle={{
            backgroundColor: '#042c5c',
            color: 'white',
          }}
          options={data}
          selectedValues={selectedItems}
          onMultiSelect={onMultiChange()}
          onTapClose={onMultiChange()}
          isMulti
        />
      </View>
      <View style={{flex: 1}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            textAlign: 'center',
            marginTop: 15,
          }}>
          Set Desired Volume
        </Text>
        <View
          style={{
            flex: 1,
          }}>
          <FlatList
            data={selectedItems}
            renderItem={({item}) => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  margin: 5,
                }}>
                <Text
                  style={{
                    width: '60%',
                  }}>
                  {item.item}
                </Text>
                <TextInput
                  placeholder="sets"
                  style={{
                    width: '15%',
                  }}
                  onChangeText={text => {
                    //  insert text into volum set part and expand array
                    setsets(prevState => [...prevState, text]);
                  }}
                />
                <TextInput
                  placeholder="reps"
                  style={{
                    width: '15%',
                  }}
                  onChangeText={text => {
                    //  insert text into volum rep part and expand array
                    setreps(prevState => [...prevState, text]);
                  }}
                />
                <TextInput
                  placeholder="RPE"
                  style={{
                    width: '10%',
                  }}
                  onChangeText={text => {
                    //  insert text into volum rpe part and expand array
                    setRPE(prevState => [...prevState, text]);
                  }}
                />
              </View>
            )}></FlatList>
        </View>
        <TouchableOpacity
          style={Styles.button}
          onPress={() => {
            var total = Array(selectedItems.length);

            for (var i = 0; i < selectedItems.length; i++) {
              total[i] = {
                id: selectedItems[i].id,
                item: selectedItems[i].item,
                sets: sets[i],
                reps: reps[i],
                RPE: RPE[i],
              };
            }

            // send this data to DB first.

            // sendData(total)
            customMadeWorkout(total);
            navigation.push('WorkoutDashboard');
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#E0E0E0',
            }}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    margin: 4,
  },
  button: {
    marginTop: 16,
    marginBottom: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0070ff',
    borderRadius: 10,
    padding: 10,
    width: '100%',
    height: 50,
  },
});
export default CreateWorkout;
