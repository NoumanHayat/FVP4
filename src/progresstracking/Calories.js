import React, {useState} from 'react';
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

const weight = () => {
   //Calories
  //=============================================================================
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
  const [listData,setListData]= React.useState([
    {
      Date: '05-01',
      Calories: '70',
    },
    {
      Date: '05-02',
      Calories: '72',
    },
    {
      Date: '05-03',
      Calories: '78',
    },
    {
      Date: '05-04',
      Calories: '78',
    },
    {
      Date: '05-05',
      Calories: '78',
    },
  ])

  //=============================================================================
  const detail = 
    {
      DailyLabel: [
        '05-02',
        '05-03',
        '05-04',
        '05-05',
        '05-06',
        '05-07',
      ],
      weeklyLabel: [
        '05-02',
        '05-09',
        '05-15',
        '05-22',
        '05-29',
        '06-06',
      ],
      MonthlyLabel: [
        '06-01',
        '07-01',
        '08-01',
        '09-01',
        '10-01',
        '11-01',
      ],
      DailyData: [
        74,
        74,
        75,
        77,
        76,
        78,
      ],
      weeklyData: [
        65,
        68,
        69,
        65,
        70,
        78,
      ],
      MonthlyData: [
        63,
        74,
        75,
        62,
        76,
        78,
      ],
    }
  ;
  // const listData = [
  //   {
  //     Date: '05-01',
  //     weight: '70',
  //   },
  //   {
  //     Date: '05-02',
  //     weight: '72',
  //   },
  //   {
  //     Date: '05-03',
  //     weight: '78',
  //   },
  //   {
  //     Date: '05-04',
  //     weight: '78',
  //   },
  //   {
  //     Date: '05-05',
  //     weight: '78',
  //   },
  // ];

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
              console.log(selectedIdx)
              if(selectedIdx==0){
                
                setLabels(detail.DailyLabel)
                setValues(detail.DailyData)
                setListData([
                  {
                    Date: detail.DailyLabel[0],
                    Calories: detail.DailyData[0],
                  },
                  {
                    Date: detail.DailyLabel[1],
                    Calories: detail.DailyData[1],
                  },
                  {
                    Date: detail.DailyLabel[2],
                    Calories: detail.DailyData[2],
                  },
                  {
                    Date: detail.DailyLabel[3],
                    Calories: detail.DailyData[3],
                  },
                  {
                    Date: detail.DailyLabel[4],
                    Calories: detail.DailyData[4],
                  },
                  {
                    Date: detail.DailyLabel[5],
                    Calories: detail.DailyData[5],
                  },
                ])
              }else if(selectedIdx==1){
                setLabels(detail.weeklyLabel)
                setValues(detail.weeklyData)
                setListData([
                  {
                    Date: detail.weeklyLabel[0],
                    Calories: detail.weeklyData[0],
                  },
                  {
                    Date: detail.weeklyLabel[1],
                    Calories: detail.weeklyData[1],
                  },
                  {
                    Date: detail.weeklyLabel[2],
                    Calories: detail.weeklyData[2],
                  },
                  {
                    Date: detail.weeklyLabel[3],
                    Calories: detail.weeklyData[3],
                  },
                  {
                    Date: detail.weeklyLabel[4],
                    Calories: detail.weeklyData[4],
                  },
                  {
                    Date: detail.weeklyLabel[5],
                    Calories: detail.weeklyData[5],
                  },
                ])
              }else{
                setLabels(detail.MonthlyLabel)
                setValues(detail.MonthlyData) 
                setListData([
                  {
                    Date: detail.MonthlyLabel[0],
                    Calories: detail.MonthlyData[0],
                  },
                  {
                    Date: detail.MonthlyLabel[1],
                    Calories: detail.MonthlyData[1],
                  },
                  {
                    Date: detail.MonthlyLabel[2],
                    Calories: detail.MonthlyData[2],
                  },
                  {
                    Date: detail.MonthlyLabel[3],
                    Calories: detail.MonthlyData[3],
                  },
                  {
                    Date: detail.MonthlyLabel[4],
                    Calories: detail.MonthlyData[4],
                  },
                  {
                    Date: detail.MonthlyLabel[5],
                    Calories: detail.MonthlyData[5],
                  },
                ])
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
          <DataTable.Title>Calories</DataTable.Title>
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
                <DataTable.Cell>{item.Calories}</DataTable.Cell>
              </DataTable.Row>
            );
          }}
        />
      </DataTable>
    </View>
  );
};
export default weight;
