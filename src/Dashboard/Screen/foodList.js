import React, {useState, useContext, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {Dimensions, FlatList, TouchableOpacity} from 'react-native';
import {foodList as styles} from '../Style/index';
import Icon from 'react-native-vector-icons/AntDesign';
import {ButtonGroup, Card} from 'react-native-elements';
import DataContext from '../../DataContext/DataContext';
const FoodList = props => {
  const navigation = props.navigation;

  const {findFood,DeleteFood} = useContext(DataContext);

  const [DATA, setDATA] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const type = props.route.params[0];
      const DAT = await findFood({type});
      setDATA(DAT);
    }
    fetchData();
  }, []); 

  return (
    <View>
      <FlatList
        ItemSeparatorComponent={
          Platform.OS !== 'android' &&
          (({highlighted}) => (
            <View style={[style.separator, highlighted && {marginLeft: 0}]} />
          ))
        }
        data={DATA}
        renderItem={({item, index, separators}) => {
          return (
            <Card
              style={styles.cardStyle}
              containerStyle={styles.cardStyle}
              wrapperStyle={{}}>
              <Card.Title>{item.FoodName}</Card.Title>
              <Card.Divider />
              <View
                style={{
                  position: 'relative',
                  flex: 1,
                  // alignItems: 'center',
                }}>
                <Text>
                  {item.Calories}cals , {item.Protein} p , {item.Carbs} c ,{' '}
                  {item.Protein} p{' '}
                </Text>
                <View style={styles.touchableSymble}>
                  <TouchableOpacity
                    onPress={() => {DeleteFood(item._id);navigation.push('Dashboard')}}
                    style={styles.plus}>
                    <Icon style={{paddingTop:30,paddingLeft:50}} name={'delete'} size={25} color={'blue'} />
                  </TouchableOpacity>
                </View>
              </View>
            </Card>
          );
        }}
      />
    </View>
  );
};

export default FoodList;
