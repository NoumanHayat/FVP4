import React, {useState, Component, useRef, useContext} from 'react';

import {CustomCalories as Styles} from '../Style/index';
import {Input, CheckBox} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import DataContext from '../../DataContext/DataContext';
import {ButtonGroup, Card} from 'react-native-elements';
import {SearchBar} from 'react-native-elements';
import {DataTable} from 'react-native-paper';

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
  console.log(props.route.params)
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [result, setResult] = useState('');
  const [selectedIndexes, setSelectedIndexes] = React.useState([]);
  const {addCalories, searchFood} = useContext(DataContext);
  const type = props.route.params[0];
  // const type = 'Dinner';
  const [foodName, setFoodName] = useState('');
  const [query, setQuery] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [corbs, setCorbs] = useState('');
  const [fats, setFats] = useState('');

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#ffff'}}>
      

      {/* <View style={Styles.bottom}> */}
      {/* <View style={Styles.buttonGroupStyle}>
          <ButtonGroup
            // buttonStyle={{width: 100}}
            buttonContainerStyle={{}}
            buttons={['Custom', 'Search']}
            containerStyle={{}}
            disabled={[3, 4]}
            disabledStyle={{}}
            disabledTextStyle={{}}
            disabledSelectedStyle={{}}
            disabledSelectedTextStyle={{}}
            innerBorderStyle={{}}
            onPress={selectedIdx => {
              if (selectedIdx == selectedIndex) {
              } else {
                setSelectedIndex(selectedIdx);
              }
            }}
            selectedButtonStyle={{}}
            selectedIndex={selectedIndex}
            selectedIndexes={selectedIndexes}
            selectedTextStyle={{}}
            textStyle={{}}
          />
        </View> */}
      {/* </View> */}
      {selectedIndex === 0 ? (
        <View style={Styles.loginContainer}>
          <View style={Styles.background}>
            <Text style={{color: 'black', fontSize: 23}}>
              {' '}
              Please Enter food details
            </Text>
          </View>
          <Input
            placeholder="Food Name"
            onChangeText={e => {
              setFoodName(e);
            }}
          />
          <Input
            placeholder="Calories in Kcal"
            onChangeText={e => {
              setCalories(e);
            }}
          />
          <Input
            placeholder="Proteins in gms"
            onChangeText={e => {
              setProtein(e);
            }}
          />
          <Input
            placeholder="Corbs in gms"
            onChangeText={e => {
              setCorbs(e);
            }}
          />
          <Input
            placeholder="Fats in gms"
            onChangeText={e => {
              setFats(e);
            }}
          />

          <View style={Styles.ButtonRow}>
            <TouchableOpacity
              style={Styles.button}
              onPress={async () => {
                const result = await addCalories({
                  type,
                  foodName,
                  calories,
                  protein,
                  corbs,
                  fats,
                });

                result
                  ? navigation.push('Dashboard')
                  : alert('Please check your details');
              }}>
              <Text style={{color: 'black'}}>Add Food</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.button1}
              onPress={selectedIdx => {
                if (selectedIdx == selectedIndex) {
                } else {
                  setSelectedIndex(selectedIdx);
                }
              }}>
              <Text style={{color: 'white'}}> Search</Text>
            </TouchableOpacity>
          </View>

          {/* <LinearGradient
            start={{x: 0.3, y: 0.25}}
            end={{x: 0.5, y: 0.7}}
            locations={[0.3, 1.6, 0.6]}
            colors={['#328AE5', '#328AE5', '#2C639C']}
            style={Styles.linearGradient}>
            <TouchableOpacity
              onPress={async () => {
                const result = await addCalories({
                  type,
                  foodName,
                  calories,
                  protein,
                  corbs,
                  fats,
                });

                result
                  ? navigation.push('Dashboard')
                  : alert('Please check your details');
              }}>
              <Text style={Styles.buttonText}>Add</Text>
            </TouchableOpacity>
          </LinearGradient> */}
        </View>
      ) : (
        //================================================================================================
        <View style={Styles.loginContainer2}>
          <SearchBar
            placeholder="100 gram chicken or 1 pratha"
            onChangeText={e => {
              setQuery(e);
            }}
            onEndEditing={async () => {
              const results = await searchFood(query);
              setResult(results);
            }}
            value={query}
          />

          {result === '' ? (
            // <LinearGradient
            //   start={{x: 0.3, y: 0.25}}
            //   end={{x: 0.5, y: 0.7}}
            //   locations={[0.3, 1.6, 0.6]}
            //   colors={['#328AE5', '#328AE5', '#2C639C']}
            //   style={Styles.linearGradient}>
            //   <TouchableOpacity
            //     //=======================================================================================================
            //     onPress={async () => {
            //       const results = await searchFood(query);
            //       setResult(results);
            //     }}>
            //     <Text style={Styles.buttonText}>Search</Text>
            //   </TouchableOpacity>
            // </LinearGradient>
            <Text></Text>
          ) : (
            <View style={Styles.details}>
             
              <DataTable>
                <DataTable.Header>
                  <DataTable.Title>Food Name</DataTable.Title>
                  <DataTable.Title>{result.FoodName}</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                  <DataTable.Cell>Calories</DataTable.Cell>
                  <DataTable.Cell>{result.Calories}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Carbs</DataTable.Cell>
                  <DataTable.Cell>{result.Carbs}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Protein</DataTable.Cell>
                  <DataTable.Cell>{result.Protein}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Fats</DataTable.Cell>
                  <DataTable.Cell>{result.Fats}</DataTable.Cell>
                </DataTable.Row>
    
              </DataTable>

              <LinearGradient
                start={{x: 0.3, y: 0.25}}
                end={{x: 0.5, y: 0.7}}
                locations={[0.3, 1.6, 0.6]}
                colors={['#328AE5', '#328AE5', '#328AE5']}
                style={Styles.linearGradient}>
                <TouchableOpacity
                  //=======================================================================================================
                  onPress={async () => {
                    const foodName = result.FoodName;
                    const calories = result.Calories;
                    const protein = result.Protein;
                    const corbs = result.Carbs;
                    const fats = result.Fats;
                    const res = await addCalories({
                      type,
                      foodName,
                      calories,
                      protein,
                      corbs,
                      fats,
                    });

                    res
                      ? navigation.push('Dashboard')
                      : alert('Please check your details');
                  }}>
                  <Text style={Styles.buttonText}>Add Food</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          )}
        </View>
      )}
    </ScrollView>
  );
};
export default index;
