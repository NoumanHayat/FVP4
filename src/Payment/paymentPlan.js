import * as React from 'react';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Divider,
} from 'react-native-paper';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

const MyComponent = props => {
  const navigation = props.navigation;
  return (
    <View style={{margin: 10, flex: 1}}>
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            margin: 20,
          }}>
          <Text style={{fontSize: 23, color: 'black'}}>Subscription Plan</Text>
        </View>
        <View style={{margin: 5, marginBottom: 35}}>
          <Card style={{}}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 10,
              }}>
              <Text style={{fontSize: 40, color: 'black'}}>BASIC</Text>
            </View>
            {/* =================================================================================== */}
            <View style={styles.container}>
              <Text style={{fontSize: 32}}>10$</Text>

              <Text numberOfLines={1}>
                {' '}
                ________________________________________
              </Text>
              <Text style={{fontSize: 16, color: 'green', padding: 5}}>
                PREMIUM SUPPORT
              </Text>
              <Text style={{fontSize: 16, color: 'green', padding: 5}}>
                TEMPLATE UPDATES
              </Text>
              <Text style={{fontSize: 16, color: 'black', padding: 5}}>
                SUPPORT & UPDATES
              </Text>
              <Text style={{fontSize: 16, color: 'green', padding: 5}}>
                ACCESS ALL TEMPLATES
              </Text>
            </View>

            {/* =================================================================================== */}
            <Card.Actions>
              <TouchableOpacity
                style={{
                  marginTop: 65,
                  backgroundColor: '#1DBDFE',
                  padding: 10,
                  borderWidth: 0,
                  borderRadius: 10,
                }}
                onPress={() => {
                  navigation.push('payment', ["BASIC",10]);
                }}>
                <Text style={{color: 'white', fontSize: 15}}>
                  Subscription 10$
                </Text>
              </TouchableOpacity>
            </Card.Actions>
            <Divider />
          </Card>
        </View>
        <View style={{margin: 5, marginBottom: 35}}>
          <Card style={{}}>
            {/* <Card.Cover
              source={{
                uri: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201911/barbell-3704578_960_720.jpeg?oFwa7w4RGXJrvmB9T64Zy1xTmhdChjAc&size=770:433',
              }}
            /> */}
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 10,
              }}>
              <Text style={{fontSize: 40, color: 'black'}}>STANDARD</Text>
            </View>
            {/* =================================================================================== */}
            <View style={styles.container}>
              <Text style={{fontSize: 32}}>20$</Text>

              <Text numberOfLines={1}>
                {' '}
                ________________________________________
              </Text>
              <Text style={{fontSize: 16, color: 'green', padding: 5}}>
                PREMIUM SUPPORT
              </Text>
              <Text style={{fontSize: 16, color: 'green', padding: 5}}>
                TEMPLATE UPDATES
              </Text>
              <Text style={{fontSize: 16, color: 'black', padding: 5}}>
                SUPPORT & UPDATES
              </Text>
              <Text style={{fontSize: 16, color: 'green', padding: 5}}>
                ACCESS ALL TEMPLATES
              </Text>
            </View>

            {/* =================================================================================== */}
            <Card.Actions>
              <TouchableOpacity
                style={{
                  marginTop: 65,
                  backgroundColor: '#1DBDFE',
                  padding: 10,
                  borderWidth: 0,
                  borderRadius: 10,
                }}
                onPress={() => {
                  navigation.push('payment', ["STANDARD",10]);
                }}>
                <Text style={{color: 'white', fontSize: 15}}>
                  Subscription 20$
                </Text>
              </TouchableOpacity>
            </Card.Actions>
            <Divider />
          </Card>
        </View>
        <View style={{margin: 5, marginBottom: 35}}>
          <Card style={{}}>
            {/* <Card.Cover
              source={{
                uri: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
              }}
            /> */}
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 10,
              }}>
              <Text style={{fontSize: 40, color: 'black'}}>PREMIUM</Text>
            </View>
            {/* =================================================================================== */}
            <View style={styles.container}>
              <Text style={{fontSize: 32}}>30$</Text>

              <Text numberOfLines={1}>
                {' '}
                ________________________________________
              </Text>
              <Text style={{fontSize: 16, color: 'green', padding: 5}}>
                PREMIUM SUPPORT
              </Text>
              <Text style={{fontSize: 16, color: 'green', padding: 5}}>
                TEMPLATE UPDATES
              </Text>
              <Text style={{fontSize: 16, color: 'black', padding: 5}}>
                SUPPORT & UPDATES
              </Text>
              <Text style={{fontSize: 16, color: 'green', padding: 5}}>
                ACCESS ALL TEMPLATES
              </Text>
            </View>

            {/* =================================================================================== */}
            <Card.Actions>
              <TouchableOpacity
                style={{
                  marginTop: 65,
                  backgroundColor: '#1DBDFE',
                  padding: 10,
                  borderWidth: 0,
                  borderRadius: 10,
                }}
                onPress={() => {
                  navigation.push('payment', ["PREMIUM",30]);
                }}>
                <Text style={{color: 'white', fontSize: 15}}>
                  Subscription 30$
                </Text>
              </TouchableOpacity>
            </Card.Actions>
            <Divider />
          </Card>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default MyComponent;
// // export default MyComponent;
// import * as React from 'react';
// // import {
// //   Avatar,
// //   Button,
// //   Card,
// //   Title,
// //   Paragraph,
// //   Divider,
// // } from 'react-native-paper';
// // import {View, ScrollView, Text} from 'react-native';
// import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];

// const App = () => {
//   const renderItem = ({ item}) => (
//     <View style={styles.item}>
//     <Text style={styles.title}>SINGLE</Text>
//   </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={DATA}
//         // horizontal={true}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     alignItems: 'center',
//     backgroundColor: '#F7F7F7',
//     padding: 20,
//     marginVertical: 8,
//     marginBottom:5,
//     marginHorizontal: 16,
//     height: '70%',
//   },
//   title: {
//     fontSize: 32,
//   },
// });

// export default App;
