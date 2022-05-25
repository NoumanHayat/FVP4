import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {DataTable} from 'react-native-paper';
import Plus from 'react-native-vector-icons/dist/FontAwesome';
import Icon from 'react-native-vector-icons/Entypo';
import DataContext from '../../DataContext/DataContext';
import {homeStyle as styles} from './testStyles';

// get pureComponent

const Logger = props => {
  const navigation = props.navigation;
  const route = props.route;
  const [total, setTotal] = useState([
    [
      {
        name: 'Incline Barbell Bench Press',
        sets: 3,
        reps: 12,
        _id: '6288d19c82585e5fdda9c489',
      },
      {
        name: 'Flat Dumbbell Bench Press',
        sets: 3,
        reps: 15,
        _id: '6288d19c82585e5fdda9c48a',
      },
      {
        name: 'Cable Crossover',
        sets: 3,
        reps: 12,
        _id: '6288d19c82585e5fdda9c48b',
      },
      {
        name: 'Cable Crossover lower pec',
        sets: 3,
        reps: 12,
        _id: '6288d19c82585e5fdda9c48c',
      },
      {
        name: 'Dumbbell Fly',
        sets: 3,
        reps: 12,
        _id: '6288d19c82585e5fdda9c48d',
      },
      {
        name: 'Dumbbell Fly lower pec',
        sets: 3,
        reps: 12,
        _id: '6288d19c82585e5fdda9c48e',
      },
      {
        name: 'Dumbbell Fly upper pec',
        sets: 3,
        reps: 12,
        _id: '6288d19c82585e5fdda9c48f',
      },
      {
        name: 'Incline Barbell Bench Press',
        sets: 3,
        reps: 12,
        _id: '6288d293596f93a13b3072cc',
      },
      {
        name: 'Flat Dumbbell Bench Press',
        sets: 3,
        reps: 15,
        _id: '6288d293596f93a13b3072cd',
      },
      {
        name: 'Cable Crossover',
        sets: 3,
        reps: 12,
        _id: '6288d293596f93a13b3072ce',
      },
      {
        name: 'Cable Crossover lower pec',
        sets: 3,
        reps: 12,
        _id: '6288d293596f93a13b3072cf',
      },
      {
        name: 'Dumbbell Fly',
        sets: 3,
        reps: 12,
        _id: '6288d293596f93a13b3072d0',
      },
      {
        name: 'Dumbbell Fly lower pec',
        sets: 3,
        reps: 12,
        _id: '6288d293596f93a13b3072d1',
      },
      {
        name: 'Dumbbell Fly upper pec',
        sets: 3,
        reps: 12,
        _id: '6288d293596f93a13b3072d2',
      },
    ],
    [
      {
        name: 'Incline Barbell Bench Press',
        sets: 3,
        reps: 12,
        _id: '6288d1a682585e5fdda9c494',
      },
      {
        name: 'Flat Dumbbell Bench Press',
        sets: 3,
        reps: 15,
        _id: '6288d1a682585e5fdda9c495',
      },
      {
        name: 'Cable Crossover',
        sets: 3,
        reps: 12,
        _id: '6288d1a682585e5fdda9c496',
      },
      {
        name: 'Cable Crossover lower pec',
        sets: 3,
        reps: 12,
        _id: '6288d1a682585e5fdda9c497',
      },
      {
        name: 'Dumbbell Fly',
        sets: 3,
        reps: 12,
        _id: '6288d1a682585e5fdda9c498',
      },
      {
        name: 'Dumbbell Fly lower pec',
        sets: 3,
        reps: 12,
        _id: '6288d1a682585e5fdda9c499',
      },
      {
        name: 'Dumbbell Fly upper pec',
        sets: 3,
        reps: 12,
        _id: '6288d1a682585e5fdda9c49a',
      },
    ],
    [
      {
        name: 'Incline Barbell Bench Press',
        sets: 3,
        reps: 12,
        _id: '6288d1a882585e5fdda9c49f',
      },
      {
        name: 'Flat Dumbbell Bench Press',
        sets: 3,
        reps: 15,
        _id: '6288d1a882585e5fdda9c4a0',
      },
      {
        name: 'Cable Crossover',
        sets: 3,
        reps: 12,
        _id: '6288d1a882585e5fdda9c4a1',
      },
      {
        name: 'Cable Crossover lower pec',
        sets: 3,
        reps: 12,
        _id: '6288d1a882585e5fdda9c4a2',
      },
      {
        name: 'Dumbbell Fly',
        sets: 3,
        reps: 12,
        _id: '6288d1a882585e5fdda9c4a3',
      },
      {
        name: 'Dumbbell Fly lower pec',
        sets: 3,
        reps: 12,
        _id: '6288d1a882585e5fdda9c4a4',
      },
      {
        name: 'Dumbbell Fly upper pec',
        sets: 3,
        reps: 12,
        _id: '6288d1a882585e5fdda9c4a5',
      },
    ],
    [
      {
        name: 'Incline Barbell Bench Press',
        sets: 3,
        reps: 12,
        _id: '6288d1a982585e5fdda9c4aa',
      },
      {
        name: 'Flat Dumbbell Bench Press',
        sets: 3,
        reps: 15,
        _id: '6288d1a982585e5fdda9c4ab',
      },
      {
        name: 'Cable Crossover',
        sets: 3,
        reps: 12,
        _id: '6288d1a982585e5fdda9c4ac',
      },
      {
        name: 'Cable Crossover lower pec',
        sets: 3,
        reps: 12,
        _id: '6288d1a982585e5fdda9c4ad',
      },
      {
        name: 'Dumbbell Fly',
        sets: 3,
        reps: 12,
        _id: '6288d1a982585e5fdda9c4ae',
      },
      {
        name: 'Dumbbell Fly lower pec',
        sets: 3,
        reps: 12,
        _id: '6288d1a982585e5fdda9c4af',
      },
      {
        name: 'Dumbbell Fly upper pec',
        sets: 3,
        reps: 12,
        _id: '6288d1a982585e5fdda9c4b0',
      },
    ],
    [
      {
        name: 'Incline Barbell Bench Press',
        sets: 3,
        reps: 12,
        _id: '6288d1a982585e5fdda9c4b5',
      },
      {
        name: 'Flat Dumbbell Bench Press',
        sets: 3,
        reps: 15,
        _id: '6288d1a982585e5fdda9c4b6',
      },
      {
        name: 'Cable Crossover',
        sets: 3,
        reps: 12,
        _id: '6288d1a982585e5fdda9c4b7',
      },
      {
        name: 'Cable Crossover lower pec',
        sets: 3,
        reps: 12,
        _id: '6288d1a982585e5fdda9c4b8',
      },
      {
        name: 'Dumbbell Fly',
        sets: 3,
        reps: 12,
        _id: '6288d1a982585e5fdda9c4b9',
      },
      {
        name: 'Dumbbell Fly lower pec',
        sets: 3,
        reps: 12,
        _id: '6288d1a982585e5fdda9c4ba',
      },
      {
        name: 'Dumbbell Fly upper pec',
        sets: 3,
        reps: 12,
        _id: '6288d1a982585e5fdda9c4bb',
      },
    ],
    [
      {
        name: 'Incline Barbell Bench Press',
        sets: 3,
        reps: 12,
        _id: '6288d1aa82585e5fdda9c4c0',
      },
      {
        name: 'Flat Dumbbell Bench Press',
        sets: 3,
        reps: 15,
        _id: '6288d1aa82585e5fdda9c4c1',
      },
      {
        name: 'Cable Crossover',
        sets: 3,
        reps: 12,
        _id: '6288d1aa82585e5fdda9c4c2',
      },
      {
        name: 'Cable Crossover lower pec',
        sets: 3,
        reps: 12,
        _id: '6288d1aa82585e5fdda9c4c3',
      },
      {
        name: 'Dumbbell Fly',
        sets: 3,
        reps: 12,
        _id: '6288d1aa82585e5fdda9c4c4',
      },
      {
        name: 'Dumbbell Fly lower pec',
        sets: 3,
        reps: 12,
        _id: '6288d1aa82585e5fdda9c4c5',
      },
      {
        name: 'Dumbbell Fly upper pec',
        sets: 3,
        reps: 12,
        _id: '6288d1aa82585e5fdda9c4c6',
      },
    ],
    [
      {
        name: 'Incline Barbell Bench Press',
        sets: 3,
        reps: 12,
        _id: '6288d1ab82585e5fdda9c4cb',
      },
      {
        name: 'Flat Dumbbell Bench Press',
        sets: 3,
        reps: 15,
        _id: '6288d1ab82585e5fdda9c4cc',
      },
      {
        name: 'Cable Crossover',
        sets: 3,
        reps: 12,
        _id: '6288d1ab82585e5fdda9c4cd',
      },
      {
        name: 'Cable Crossover lower pec',
        sets: 3,
        reps: 12,
        _id: '6288d1ab82585e5fdda9c4ce',
      },
      {
        name: 'Dumbbell Fly',
        sets: 3,
        reps: 12,
        _id: '6288d1ab82585e5fdda9c4cf',
      },
      {
        name: 'Dumbbell Fly lower pec',
        sets: 3,
        reps: 12,
        _id: '6288d1ab82585e5fdda9c4d0',
      },
      {
        name: 'Dumbbell Fly upper pec',
        sets: 3,
        reps: 12,
        _id: '6288d1ab82585e5fdda9c4d1',
      },
    ],
    [
      {
        name: 'Incline Barbell Bench Press',
        sets: 3,
        reps: 12,
        _id: '6288d1ab82585e5fdda9c4d6',
      },
      {
        name: 'Flat Dumbbell Bench Press',
        sets: 3,
        reps: 15,
        _id: '6288d1ab82585e5fdda9c4d7',
      },
      {
        name: 'Cable Crossover',
        sets: 3,
        reps: 12,
        _id: '6288d1ab82585e5fdda9c4d8',
      },
      {
        name: 'Cable Crossover lower pec',
        sets: 3,
        reps: 12,
        _id: '6288d1ab82585e5fdda9c4d9',
      },
      {
        name: 'Dumbbell Fly',
        sets: 3,
        reps: 12,
        _id: '6288d1ab82585e5fdda9c4da',
      },
      {
        name: 'Dumbbell Fly lower pec',
        sets: 3,
        reps: 12,
        _id: '6288d1ab82585e5fdda9c4db',
      },
      {
        name: 'Dumbbell Fly upper pec',
        sets: 3,
        reps: 12,
        _id: '6288d1ab82585e5fdda9c4dc',
      },
    ],
  ]);
  const {getWorkout} = useContext(DataContext);
  useEffect(() => {
    async function fetchData() {
      const a = await getWorkout();

      setTotal(a);
    }
    fetchData();
  }, []);
  const [date, setDate] = useState(new Date());
  var displayDate = useRef(0);
  return (
    <View style={Styles.container}>
      <View style={styles.DateButton}>
        <TouchableOpacity
          onPress={() => {
            if (displayDate.current < 7) {
              displayDate.current = displayDate.current + 1;
              var dat = new Date();
              dat.setDate(dat.getDate() - displayDate.current);
              setDate(dat);
            }
          }}>
          <Icon name="arrow-left" size={32} color="#0070ff" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            alert('hello');
          }}>
          <Text
            style={{
              color: '#E0E0E0',
              fontSize: 18,
              marginBottom: 14,
              marginTop: 14,
            }}>
            {date.toDateString()}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (displayDate.current > 0) {
              displayDate.current = displayDate.current - 1;
              var dat = new Date();
              dat.setDate(dat.getDate() - displayDate.current);
              setDate(dat);
            }
          }}>
          <Icon name="arrow-right" size={32} color="#0070ff" />
        </TouchableOpacity>
      </View>
      {displayDate.current === 0 ? (
        <View style={styles.dynamic}>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#E0E0E0',
                  }}>
                  Exercise
                </Text>
              </DataTable.Title>
              <DataTable.Title>
                {' '}
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#E0E0E0',
                  }}>
                  Sets
                </Text>
              </DataTable.Title>
              <DataTable.Title>
                {' '}
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#E0E0E0',
                  }}>
                  Reps
                </Text>
              </DataTable.Title>
            </DataTable.Header>
            <ScrollView style={styles.scrollContainer}>
              {total[0].map(item => (
                <DataTable.Row key={item._id}>
                  <DataTable.Cell>
                    <Text style={{color: '#E0E0E0', textAlign: 'center'}}>
                      {item.name}
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text style={{color: '#E0E0E0', textAlign: 'center'}}>
                      {item.sets}
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text style={{color: '#E0E0E0', textAlign: 'center'}}>
                      {item.reps}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </ScrollView>
          </DataTable>
        </View>
      ) : (
        <View style={styles.dynamic}>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#E0E0E0',
                  }}>
                  Exercise
                </Text>
              </DataTable.Title>
              <DataTable.Title>
                {' '}
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#E0E0E0',
                  }}>
                  Sets
                </Text>
              </DataTable.Title>
              <DataTable.Title>
                {' '}
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#E0E0E0',
                  }}>
                  Reps
                </Text>
              </DataTable.Title>
            </DataTable.Header>
            <ScrollView style={styles.scrollContainer}>
              {total[displayDate.current].map(item => (
                <DataTable.Row key={item._id}>
                  <DataTable.Cell>
                    <Text style={{color: '#E0E0E0', textAlign: 'center'}}>
                      {item.name}
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text style={{color: '#E0E0E0', textAlign: 'center'}}>
                      {item.sets}
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text style={{color: '#E0E0E0', textAlign: 'center'}}>
                      {item.reps}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </ScrollView>
          </DataTable>
        </View>
      )}

      {/* use data table from react native paper */}

      <TouchableOpacity
        style={Styles.roundButton}
        onPress={() => {
          navigation.navigate('CreateWorkout');
        }}>
        <Plus name="plus" size={14} color="white" />
      </TouchableOpacity>
    </View>
    // useMemo on SelectBox
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  roundButton: {
    backgroundColor: '#0070ff',
    width: 55,
    height: 55,
    borderRadius: 50,
    position: 'absolute',
    bottom: 25,
    right: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.9,
    borderColor: '#E0E0E0',
    shadowColor: '#E0E0E0',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 1,
  },
  scrollContainer: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'space-between',
  },
});
export default Logger;
