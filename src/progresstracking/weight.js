import React, {useState, useContext, useEffect} from 'react';
import {View, Text, Dimensions, FlatList} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {DataTable} from 'react-native-paper';
import {ButtonGroup, Card} from 'react-native-elements';
import DataContext from '../DataContext/DataContext';

const weight = props => {
  //=============================================================================

  const {progressTracking_getWeight} = useContext(DataContext);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [selectedIndexes, setSelectedIndexes] = React.useState([]);
  const [labels, setLabels] = React.useState([
    '05-02',
    '05-03',
    '05-04',
    '05-05',
    '05-06',
    '05-07',
  ]);
  const [values, setValues] = React.useState([
    '77',
    '78',
    '79',
    '80',
    '77',
    '76',
  ]);
  const [listData, setListData] = React.useState([
    {
      Date: '05-01',
      weight: '70',
    },
    {
      Date: '05-02',
      weight: '72',
    },
    {
      Date: '05-03',
      weight: '78',
    },
    {
      Date: '05-04',
      weight: '78',
    },
    {
      Date: '05-05',
      weight: '78',
    },
  ]);
  const [detail, setDetail] = React.useState([]);
  const [active, setActive] = React.useState(false);
  useEffect(() => {
    async function fetchData() {
      const d = await progressTracking_getWeight();
      if (d.DailyData[0] !== null) {
        setActive(true);
        var a = {
          DailyLabel: d.DailyLabel.reverse(),
          DailyData: d.DailyData.reverse(),
          weeklyLabel: d.weeklyLabel.reverse(),
          weeklyData: d.weeklyData.reverse(),
          MonthlyLabel: d.MonthlyLabel.reverse(),
          MonthlyData: d.MonthlyData.reverse(),
        };
        setDetail(a);
        setLabels(a.DailyLabel);
        setValues(a.DailyData);
        setListData([
          {
            Date: a.DailyLabel[0],
            weight: a.DailyData[0],
          },
          {
            Date: a.DailyLabel[1],
            weight: a.DailyData[1],
          },
          {
            Date: a.DailyLabel[2],
            weight: a.DailyData[2],
          },
          {
            Date: a.DailyLabel[3],
            weight: a.DailyData[3],
          },
          {
            Date: a.DailyLabel[4],
            weight: a.DailyData[4],
          },
          {
            Date: a.DailyLabel[5],
            weight: a.DailyData[5],
          },
        ]);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      {active ? (
        <View style={{flex: 1, alignItems: 'center', padding: 15}}>
         
          <LineChart
            data={{
              labels: labels,
              datasets: [
                {
                  data: values,
                },
              ],
            }}
            width={Dimensions.get('window').width} // from react-native
            height={220}
            // yAxisLabel="$"
            yAxisSuffix="KG"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: '#ffa726',
              backgroundGradientFrom: '#ffa726',
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
          />
          <View style={{width: Dimensions.get('window').width / 1.1}}>
            <ButtonGroup
              // buttonStyle={{width: 100}}
              buttonContainerStyle={{}}
              buttons={['Daily', 'weekly', 'Monthly']}
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
                  console.log(selectedIdx);
                  if (selectedIdx == 0) {
                    setLabels(detail.DailyLabel);
                    setValues(detail.DailyData);
                    setListData([
                      {
                        Date: detail.DailyLabel[0],
                        weight: detail.DailyData[0],
                      },
                      {
                        Date: detail.DailyLabel[1],
                        weight: detail.DailyData[1],
                      },
                      {
                        Date: detail.DailyLabel[2],
                        weight: detail.DailyData[2],
                      },
                      {
                        Date: detail.DailyLabel[3],
                        weight: detail.DailyData[3],
                      },
                      {
                        Date: detail.DailyLabel[4],
                        weight: detail.DailyData[4],
                      },
                      {
                        Date: detail.DailyLabel[5],
                        weight: detail.DailyData[5],
                      },
                    ]);
                  } else if (selectedIdx == 1) {
                    setLabels(detail.weeklyLabel);
                    setValues(detail.weeklyData);
                    setListData([
                      {
                        Date: detail.weeklyLabel[0],
                        weight: detail.weeklyData[0],
                      },
                      {
                        Date: detail.weeklyLabel[1],
                        weight: detail.weeklyData[1],
                      },
                      {
                        Date: detail.weeklyLabel[2],
                        weight: detail.weeklyData[2],
                      },
                      {
                        Date: detail.weeklyLabel[3],
                        weight: detail.weeklyData[3],
                      },
                      {
                        Date: detail.weeklyLabel[4],
                        weight: detail.weeklyData[4],
                      },
                      {
                        Date: detail.weeklyLabel[5],
                        weight: detail.weeklyData[5],
                      },
                    ]);
                  } else {
                    setLabels(detail.MonthlyLabel);
                    setValues(detail.MonthlyData);
                    setListData([
                      {
                        Date: detail.MonthlyLabel[0],
                        weight: detail.MonthlyData[0],
                      },
                      {
                        Date: detail.MonthlyLabel[1],
                        weight: detail.MonthlyData[1],
                      },
                      {
                        Date: detail.MonthlyLabel[2],
                        weight: detail.MonthlyData[2],
                      },
                      {
                        Date: detail.MonthlyLabel[3],
                        weight: detail.MonthlyData[3],
                      },
                      {
                        Date: detail.MonthlyLabel[4],
                        weight: detail.MonthlyData[4],
                      },
                      {
                        Date: detail.MonthlyLabel[5],
                        weight: detail.MonthlyData[5],
                      },
                    ]);
                  }
                  setSelectedIndex(selectedIdx);
                }
              }}
              selectedButtonStyle={{}}
              selectedIndex={selectedIndex}
              selectedIndexes={selectedIndexes}
              selectedTextStyle={{}}
              textStyle={{}}
            />
          </View>

          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Date</DataTable.Title>
              <DataTable.Title>Weight</DataTable.Title>
            </DataTable.Header>
            <FlatList
              ItemSeparatorComponent={
                Platform.OS !== 'android' &&
                (({highlighted}) => (
                  <View
                    style={[Style.separator, highlighted && {marginLeft: 0}]}
                  />
                ))
              }
              data={listData}
              renderItem={({item, index, separators}) => {
                return (
                  <DataTable.Row>
                    <DataTable.Cell>{item.Date}</DataTable.Cell>
                    <DataTable.Cell>{item.weight}</DataTable.Cell>
                  </DataTable.Row>
                );
              }}
            />
          </DataTable>
        </View>
      ) : (
        <Text style={{color: 'black'}}>Please wait for something...</Text>
      )}
    </>
  );
};
export default weight;
