import React, {useState, useContext, useEffect, useRef} from 'react';
import {View, Text, Button} from 'react-native';
import {Dimensions, FlatList, TouchableOpacity} from 'react-native';
import {homeStyle as styles} from '../Style/index';
import Icon from 'react-native-vector-icons/Entypo';
import {ProgressChart} from 'react-native-chart-kit';
import {ButtonGroup, Card} from 'react-native-elements';
import DataContext from '../../DataContext/DataContext';
import LinearGradient from 'react-native-linear-gradient';


const HomeScreen = props => {
  const navigation = props.navigation;
  const {todayDiaryDetail, diaryhistory, checkPayment} =
    useContext(DataContext);
  const [todayDiary, setTodayDiary] = React.useState({});
  //=========================================New Content============================================================
  const {currentWeekPercentage} = useContext(DataContext);
  const [Calories, setCalories] = React.useState(0);
  const [Protein, setProtein] = React.useState(0);
  const [Carbs, setCarbs] = React.useState(0);
  const [Fats, setFats] = React.useState(0);
  const [Dhistory, setDHistory] = React.useState([]);
  useEffect(() => {
    async function fetchData() {
      const CPayment = await checkPayment();

      if (!CPayment.available) {
        navigation.push('paymentPlan');
      }

      setTodayDiary(await todayDiaryDetail());
      const a = await currentWeekPercentage();
      // const dh = await diaryhistory();
      //===========================
      diaryhistory()
        .then(dh => {
          setDHistory(dh);
        })
        .catch(error => {});
      //===========================
      setCalories(a[0].Calories);
      setProtein(a[0].Protein);
      setCarbs(a[0].Carbs);
      setFats(a[0].Fats);
    }
    fetchData();
  }, []);

  //=====================================================================================================
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [selectedIndexes, setSelectedIndexes] = React.useState([]);
  const [check, setCheck] = React.useState(false);

  const data = {
    labels: ['Calories', 'Protein', 'Carbs', 'Fat'], // optional
    data: [Calories, Protein, Carbs, Fats],
  };
  const data2 = {
    labels: ['Calories', 'Protein', 'Carbs', 'Fat'], // optional
    data: [1 - Calories, 1 - Protein, 1 - Carbs, 1 - Fats],
  };

  var displayDate = useRef(0);
  const [date, setDate] = useState(new Date());

  //====================================================================================================
  // const previousData = {
  //   labels: ['Calories', 'Protein', 'Carbs', 'Fat'], // optional
  //   data: [
  // Dhistory[3].Calories[2],
  // Dhistory[3].Protein[2],
  // Dhistory[3].Carbs[2],
  // Dhistory[3].Fats[2],
  //   ],
  // };
  // const previousData2 = {
  //   labels: ['Calories', 'Protein', 'Carbs', 'Fat'], // optional
  //   data: [
  //     1 - Dhistory[3].Calories[2],
  //     1 - Dhistory[3].Protein[2],
  //     1 - Dhistory[3].Carbs[2],
  //     1 - Dhistory[3].Fats[2],
  //   ],
  // };

  //====================================================================================================

  return (
    <View style={styles.container}>
      {/* <LinearGradient
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}} 
        locations={[0.2, 0.6]}
        colors={['#0E3155', '#020D19']}
        // colors={['#3C8CE7', '#00EAFF']}
        style={{flex: 1}}> */}
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
          <Icon name="arrow-left" size={32} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            alert('hello');
          }}>
          <Text style={{color: 'black'}}>{date.toDateString()}</Text>
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
          <Icon name="arrow-right" size={32} color="black" />
        </TouchableOpacity>
      </View>
      {displayDate.current === 0 ? (
        <View style={styles.dynamic}>
          
            <ProgressChart
              data={check ? data2 : data}
              width={Dimensions.get('window').width}
              height={220}
              strokeWidth={16}
              radius={32}
              chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#fb8c00',
                backgroundGradientTo: '#ffa726',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                  
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#ffa726',
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
              hideLegend={false}
            />
          
          <View style={styles.buttonGroupStyle}>
            <ButtonGroup
              // buttonStyle={{width: 100}}
              buttonContainerStyle={{}}
              buttons={['Consumed', 'Remaining']}
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
                  if (check) {
                    setCheck(false);
                  } else {
                    setCheck(true);
                  }
                }
              }}
              selectedButtonStyle={{}}
              selectedIndex={selectedIndex}
              selectedIndexes={selectedIndexes}
              selectedTextStyle={{}}
              textStyle={{}}
            />
          </View>
          <View style={styles.updateAdd}>
            <FlatList
              ItemSeparatorComponent={
                Platform.OS !== 'android' &&
                (({highlighted}) => (
                  <View
                    style={[style.separator, highlighted && {marginLeft: 0}]}
                  />
                ))
              }
              data={todayDiary}
              renderItem={({item, index, separators}) => {
                return (
                  <Card
                    style={styles.cardStyle}
                    containerStyle={styles.cardStyle}
                    wrapperStyle={{}}>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Divider />
                    <View
                      style={{
                        position: 'relative',
                        flexDirection: 'row',
                        flex: 1,
                        // alignItems: 'center',
                      }}>
                      <Text style={{color: 'black'}}>
                        {parseInt(item.Calories)} cals ,{' '}
                        {parseInt(item.Protein)} p ,{parseInt(item.Carbs)} car ,{' '}
                        {parseInt(item.Fats)} f{' '}
                      </Text>
                      <View style={styles.touchableSymble}>
                        <TouchableOpacity
                          onPress={() =>
                            navigation.push('FoodList', [item.title])
                          }
                          style={styles.plus}>
                          <Icon
                            name={'dots-three-horizontal'}
                            size={25}
                            color={'blue'}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={styles.plus}
                          onPress={() =>
                            navigation.push('customCalories', [item.title])
                          }>
                          <Icon name={'plus'} size={25} color={'blue'} />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </Card>
                );
              }}
            />
          </View>
        </View>
      ) : (
        //=================================================================================================
        <View style={styles.dynamic}>
          <View>
            <ProgressChart
              data={{
                labels: ['Calories', 'Protein', 'Carbs', 'Fat'], // optional
                data: [
                  Dhistory[3].Calories[displayDate.current - 1],
                  Dhistory[3].Protein[displayDate.current - 1],
                  Dhistory[3].Carbs[displayDate.current - 1],
                  Dhistory[3].Fats[displayDate.current - 1],
                ],
              }}
              width={Dimensions.get('window').width}
              height={220}
              strokeWidth={16}
              radius={32}
              chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#fb8c00',
                backgroundGradientTo: '#ffa726',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#ffa726',
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
              hideLegend={false}
            />
          </View>

          <View style={styles.updateAdd}>
            <FlatList
              ItemSeparatorComponent={
                Platform.OS !== 'android' &&
                (({highlighted}) => (
                  <View
                    style={[style.separator, highlighted && {marginLeft: 0}]}
                  />
                ))
              }
              data={[
                {
                  title: Dhistory[0].title,
                  Calories: Dhistory[0].Calories[displayDate.current - 1],
                  Protein: Dhistory[0].Protein[displayDate.current - 1],
                  Carbs: Dhistory[0].Carbs[displayDate.current - 1],
                  Fats: Dhistory[0].Fats[displayDate.current - 1],
                },
                {
                  title: Dhistory[1].title,
                  Calories: Dhistory[1].Calories[displayDate.current - 1],
                  Protein: Dhistory[1].Protein[displayDate.current - 1],
                  Carbs: Dhistory[1].Carbs[displayDate.current - 1],
                  Fats: Dhistory[1].Fats[displayDate.current - 1],
                },
                {
                  title: Dhistory[2].title,
                  Calories: Dhistory[2].Calories[displayDate.current - 1],
                  Protein: Dhistory[2].Protein[displayDate.current - 1],
                  Carbs: Dhistory[2].Carbs[displayDate.current - 1],
                  Fats: Dhistory[2].Fats[displayDate.current - 1],
                },
              ]}
              renderItem={({item, index, separators}) => {
                return (
                  <Card
                    style={styles.cardStyle}
                    containerStyle={styles.cardStyle}
                    wrapperStyle={{}}>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Divider />
                    <View
                      style={{
                        position: 'relative',
                        flexDirection: 'row',
                        flex: 1,
                        // alignItems: 'center',
                      }}>
                      <Text style={{color: 'black'}}>
                        {parseInt(item.Calories)} cals ,{' '}
                        {parseInt(item.Protein)} p ,{parseInt(item.Carbs)} car ,{' '}
                        {parseInt(item.Fats)} f{' '}
                      </Text>
                    </View>
                  </Card>
                );
              }}
            />
          </View>
        </View>

        //=================================================================================================
      )}
      {/* </LinearGradient> */}
    </View>
  );
};
export default HomeScreen;
