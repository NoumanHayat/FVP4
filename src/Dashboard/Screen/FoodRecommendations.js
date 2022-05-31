import React, {useState, Component, useRef, useContext} from 'react';

import {CustomCalories as Styles} from '../Style/index';
import LinearGradient from 'react-native-linear-gradient';
import DataContext from '../../DataContext/DataContext';
import {SearchBar} from 'react-native-elements';
import {DataTable} from 'react-native-paper';

import {View, Text, TouchableOpacity} from 'react-native';
const screen = props => {
  const navigation = props.navigation;

  const [result, setResult] = useState('');
  const {searchRecommendations} = useContext(DataContext);

  const [query, setQuery] = useState('');

  return (
    <View>
      <View style={Styles.loginContainer2}>
        <SearchBar
          placeholder="Enter your preferable food"
          onChangeText={e => {
            setQuery(e);
          }}
          onEndEditing={async () => {
            console.log('Working');
            const results = await searchRecommendations(query);
            console.log(results);
            setResult(results);
          }}
          value={query}
        />

        {result === '' ? (
          <Text></Text>
        ) : (
          <View style={Styles.details}>
            <DataTable>
            <DataTable.Row>
                <DataTable.Cell>{result.recomendation[0]}</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>{result.recomendation[1]}</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>{result.recomendation[2]}</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>{result.recomendation[3]}</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>{result.recomendation[4]}</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>{result.recomendation[5]}</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>{result.recomendation[5]}</DataTable.Cell>
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
    </View>
  );
};
export default screen;
