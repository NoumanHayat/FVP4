import React, {useState, useContext, useEffect} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {profile as styles} from '../Style/index';
import {Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import DataContext from '../../DataContext/DataContext';

const profile = (props) => {
  const navigation = props.navigation;
  const {userDetails,logout} = useContext(DataContext);
  const [detail,setDetail] = useState({});
  let det; 
  
 
  useEffect(() => { 
    async function fetchData() {
      userDetails().then((data) => {
        setDetail(data.data)
      }).catch((error)=>{
        
     });
      // details(res.data);
    }
    fetchData();
  }, []);
  
  
  return (
    <View style={styles.container}> 
      <ScrollView style={{backgroundColor:'white'}}>
        <View style={{alignSelf: 'center'}}> 
          <View style={styles.profileImage}>
            <Image
              source={require('./../Images/profile-Image.jpg')}
              style={styles.image}
              resizeMode="center"></Image>
          </View>
          <View style={styles.add}>
            <TouchableOpacity>
              <Icon name="ios-add-circle-sharp" size={60} color="gray" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.namePart}>
          <Text style={{fontSize: 25,color:'#3C5AC4'}}>{detail.name}</Text>
          <Text style={{fontSize: 17,color:'#3C5AC4'}}>Take a look at your long-term Progress</Text>
        </View>
        <View style={styles.lowerPart}> 
        
          <TouchableOpacity style={styles.touchableOpacity}>
            <Icon
              name="briefcase"
              style={{paddingRight: 10}}
              size={30}
              color="#4F72EF"
            />
            <Text style={{fontSize: 20,color:'#3C5AC4'}}>Subscription</Text>
          </TouchableOpacity>
          <Divider />
          <TouchableOpacity style={styles.touchableOpacity}>
            <Icon
              name="bar-chart-outline"
              style={{paddingRight: 10}}
              size={30}
              color="#4F72EF"
            />
            <Text style={{fontSize: 20,color:'#3C5AC4'}}>Couch Setting</Text>
          </TouchableOpacity>
          <Divider />
          <TouchableOpacity style={styles.touchableOpacity}>
            <Icon
              name="ios-call-outline"
              style={{paddingRight: 10}}
              size={30}
              color="#4F72EF"
            />
            <Text style={{fontSize: 20,color:'#3C5AC4'}}>Support</Text>
          </TouchableOpacity>
          <Divider />
          <TouchableOpacity style={styles.touchableOpacity} onPress={()=>{

          logout();
          navigation.push('WelcomePage')
          }} >
            <Icon
              name="arrow-forward-outline"
              style={{paddingRight: 10}}
              size={30}
              color="#4F72EF"
            />
            <Text style={{fontSize: 20,color:'#3C5AC4'}}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default profile;
