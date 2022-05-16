// import * as React from 'react';
// import {
//   Avatar,
//   Button,
//   Card,
//   Title,
//   Paragraph,
//   Divider,
// } from 'react-native-paper';
// import {View, ScrollView, Text} from 'react-native';
// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

// const MyComponent = () => (
//   <View style={{margin: 10, flex: 1}}>
//     <View
//       style={{justifyContent: 'center', alignItems: 'center', width: '100%',margin: 20}}>
//       <Text style={{fontSize:23,color: 'black'}}>Subscription Plan</Text>
//     </View>
//     <ScrollView >
//       <View style={{margin: 5,width: '90%'}}>
//         <Card style={{width: '100%'}}>
//           <Card.Cover
//             source={{
//               uri: 'https://cdn.mos.cms.futurecdn.net/KLZwUWe4JwyyXY7pV7CpaU-1024-80.jpg.webp',
//             }}
//           />
//           <Card.Content>
//             <Title>Basic Plan</Title>
//             <Paragraph>Conent 1 </Paragraph>
//             <Paragraph>Conent 1 </Paragraph>
//             <Paragraph>Conent 1 </Paragraph>
//             <Paragraph>Conent 1 </Paragraph>
//             <Paragraph>Conent 1 </Paragraph>
//             <Paragraph>Conent 1 </Paragraph>
//           </Card.Content>
//           <Card.Actions>
//             <Button>Subscription</Button>
//           </Card.Actions>
//           <Divider />
//         </Card>
//       </View>
//       <View style={{margin: 5,width: '90%'}}>
//         <Card style={{width: '100%'}}>
//           <Card.Cover
//             source={{
//               uri: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201911/barbell-3704578_960_720.jpeg?oFwa7w4RGXJrvmB9T64Zy1xTmhdChjAc&size=770:433',
//             }}
//           />
//           <Card.Content>
//             <Title>Basic Plan</Title>
//             <Paragraph>Conent 1 </Paragraph>
//             <Paragraph>Conent 1 </Paragraph>
//             <Paragraph>Conent 1 </Paragraph>
//             <Paragraph>Conent 1 </Paragraph>
//             <Paragraph>Conent 1 </Paragraph>
//             <Paragraph>Conent 1 </Paragraph>
//           </Card.Content>
//           <Card.Actions>
//             <Button>Subscription</Button>
//           </Card.Actions>
//           <Divider />
//         </Card>
//       </View>
//       <View style={{margin: 5,width: '90%'}}>
//         <Card style={{width: '100%'}}>
//           <Card.Cover
//             source={{
//               uri: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
//             }}
//           />
//           <Card.Content>
//             <Title>Basic Plan</Title>
//             <Paragraph>Conent 1 </Paragraph>
//             <Paragraph>Conent 1 </Paragraph>
//             <Paragraph>Conent 1 </Paragraph>
//             <Paragraph>Conent 1 </Paragraph>
//             <Paragraph>Conent 1 </Paragraph>
//             <Paragraph>Conent 1 </Paragraph>
//           </Card.Content>
//           <Card.Actions>
//             <Button>Subscription</Button>
//           </Card.Actions>
//           <Divider />
//         </Card>
//       </View>
//     </ScrollView>
//   </View>
// );

// export default MyComponent;
import * as React from 'react';
// import {
//   Avatar,
//   Button,
//   Card,
//   Title,
//   Paragraph,
//   Divider,
// } from 'react-native-paper';
// import {View, ScrollView, Text} from 'react-native';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;