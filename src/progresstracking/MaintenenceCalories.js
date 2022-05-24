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

const weight = () => {
  //MaintenenceCalories
  //=============================================================================
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [selectedIndexes, setSelectedIndexes] = React.useState([]);
  const [labels, setLabels] = React.useState([
    '13-4',
    '6-4',
    '29-3',
    '22-3',
    '15-3',
    '8-3',
    '1-3',
  ]);
  const [values, setValues] = React.useState([
    2464.713802, 2464.713802, 2464.713802, 2464.713802, 2464.713802,
    2464.713802, 2764.958779,
  ]);
  const [listData, setListData] = React.useState([
    {
      Date: '05-01',
      MaintenenceCalories: '70',
    },
    {
      Date: '05-02',
      MaintenenceCalories: '72',
    },
    {
      Date: '05-03',
      MaintenenceCalories: '78',
    },
    {
      Date: '05-04',
      MaintenenceCalories: '78',
    },
    {
      Date: '05-05',
      MaintenenceCalories: '78',
    },
  ]);
  const [detail, setDetail] = React.useState([]);

  const {progressTracking_getMaintenanceCalories} = useContext(DataContext);

  //=============================================================================
  useEffect(() => {
    async function fetchData() {
      const d = await progressTracking_getMaintenanceCalories();
      var a={
        
        weeklyLabel:d.weeklyLabel.reverse(),
        weeklyData:d.weeklyData.reverse(),
        MonthlyLabel:d.MonthlyLabel.reverse(),
        MonthlyData:d.MonthlyData.reverse(),
      }
      setDetail(a);
      setLabels(a.weeklyLabel);
      setValues(a.weeklyData);
      setListData([
        {
          Date: a.weeklyLabel[0],
          MaintenenceCalories: a.weeklyData[0],
        },
        {
          Date: a.weeklyLabel[1],
          MaintenenceCalories: a.weeklyData[1],
        },
        {
          Date: a.weeklyLabel[2],
          MaintenenceCalories: a.weeklyData[2],
        },
        {
          Date: a.weeklyLabel[3],
          MaintenenceCalories: a.weeklyData[3],
        },
        {
          Date: a.weeklyLabel[4],
          MaintenenceCalories: a.weeklyData[4],
        },
        {
          Date: a.weeklyLabel[5],
          MaintenenceCalories: a.weeklyData[5],
        },
      ]);
    }
    fetchData();
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center', padding: 15}}>
      <Text>Bezier Line Chart</Text>
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
        yAxisSuffix="cls"
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
          buttons={['weekly', 'Monthly']}
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
                setLabels(detail.weeklyLabel);
                setValues(detail.weeklyData);
                setListData([
                  {
                    Date: detail.weeklyLabel[0],
                    MaintenenceCalories: detail.weeklyData[0],
                  },
                  {
                    Date: detail.weeklyLabel[1],
                    MaintenenceCalories: detail.weeklyData[1],
                  },
                  {
                    Date: detail.weeklyLabel[2],
                    MaintenenceCalories: detail.weeklyData[2],
                  },
                  {
                    Date: detail.weeklyLabel[3],
                    MaintenenceCalories: detail.weeklyData[3],
                  },
                  {
                    Date: detail.weeklyLabel[4],
                    MaintenenceCalories: detail.weeklyData[4],
                  },
                  {
                    Date: detail.weeklyLabel[5],
                    MaintenenceCalories: detail.weeklyData[5],
                  },
                ]);
              } else {
                setLabels(detail.MonthlyLabel);
                setValues(detail.MonthlyData);
                setListData([
                  {
                    Date: detail.MonthlyLabel[0],
                    MaintenenceCalories: detail.MonthlyData[0],
                  },
                  {
                    Date: detail.MonthlyLabel[1],
                    MaintenenceCalories: detail.MonthlyData[1],
                  },
                  {
                    Date: detail.MonthlyLabel[2],
                    MaintenenceCalories: detail.MonthlyData[2],
                  },
                  {
                    Date: detail.MonthlyLabel[3],
                    MaintenenceCalories: detail.MonthlyData[3],
                  },
                  {
                    Date: detail.MonthlyLabel[4],
                    MaintenenceCalories: detail.MonthlyData[4],
                  },
                  {
                    Date: detail.MonthlyLabel[5],
                    MaintenenceCalories: detail.MonthlyData[5],
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
          <DataTable.Title>Maintenence Calories</DataTable.Title>
        </DataTable.Header>
        <FlatList
          ItemSeparatorComponent={
            Platform.OS !== 'android' &&
            (({highlighted}) => (
              <View style={[Style.separator, highlighted && {marginLeft: 0}]} />
            ))
          }
          data={listData}
          renderItem={({item, index, separators}) => {
            return (
              <DataTable.Row>
                <DataTable.Cell>{item.Date}</DataTable.Cell>
                <DataTable.Cell>{item.MaintenenceCalories}</DataTable.Cell>
              </DataTable.Row>
            );
          }}
        />
      </DataTable>
    </View>
  );
};
export default weight;
