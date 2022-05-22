import React, {useContext, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DataContext from '../../../DataContext/DataContext';

const MuscleGroup = ({navigation, route}) => {
  const {workoutGerneration} = useContext(DataContext);

  const prevParams = route.params;
  const muscleGroups = [
    'Arms',
    'Legs',
    'Chest',
    'Back',
    'Shoulders',
    'Abs',
    'fullBody',
  ];
  const [muscle, setMuscle] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          fontSize: 26,
          fontWeight: 'bold',
          color: '#E0E0E0',
          marginTop: 20,
          textAlign: 'center',
          marginBottom: 10,
        }}>
        Select a Targeted Muscle
      </Text>
      <View
        style={{
          justifyContent: 'center',
        }}>
        <FlatList
          style={styles.list}
          data={muscleGroups}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={async () => {
                setMuscle(item);
                // navigation.push('Workout', [
                //   {
                //     ...prevParams,
                //     muscle: item,
                //   },
                // ]);
                const a = await workoutGerneration([
                  ...prevParams,
                  {
                    muscle: item,
                  },
                ]);
                console.log(a);
                if (a.status == 'success') {
                  alert('added successfully');

                  navigation.navigate('Workout', a.message[0].exercises);
                } else {
                  alert("can't add");
                }
              }}>
              <Text style={styles.choice}>{item}</Text>
            </TouchableOpacity>
          )}></FlatList>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },

  choice: {
    color: '#E0E0E0',
    padding: 10,
    margin: 5,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default MuscleGroup;
