import React, {useState, useContext, useEffect} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {Me as styles} from '../Style/index';
import {Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import DataContext from '../../DataContext/DataContext';
const profile = () => {
  const {userDetails} = useContext(DataContext);
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
        </View>



        <View style={styles.namePart}>
          <Text style={{fontSize: 25, color:"#000000"}}>Hi! {detail.name}</Text>
          <Text style={{fontSize: 17}}>
            Please Take a Look at your long term project
          </Text>
        </View>
        <View style={styles.lowerPart}>
        <Text style={{fontSize: 25, color:"#000000"}}>Body Value</Text>
          <TouchableOpacity style={styles.touchableOpacity}>
            <Text style={{fontSize: 15}}>Weight</Text>
            <View style={styles.arrow}>
              <Icon
                name="arrow-forward"
                style={{paddingRight: 10,paddingTop: 12}}
                size={20}
                color="gray"
              />
            </View>
          </TouchableOpacity>
          <Divider />
          <TouchableOpacity style={styles.touchableOpacity}>
            <Text style={{fontSize: 15}}>Body Fat Percentage</Text>
            <View style={styles.arrow}>
              <Icon
                name="arrow-forward"
                style={{paddingRight: 10,paddingTop: 12}}
                size={20}
                color="gray"
              />
            </View>
          </TouchableOpacity>
          <Divider />
          <TouchableOpacity style={styles.touchableOpacity}>
            <Text style={{fontSize: 15}}>Learn Body Mass</Text>
            <View style={styles.arrow}>
              <Icon
                name="arrow-forward"
                style={{paddingRight: 10,paddingTop: 12}}
                size={20}
                color="gray"
              />
            </View>
          </TouchableOpacity>
          <Divider />
          <TouchableOpacity style={styles.touchableOpacity}>
            <Text style={{fontSize: 15}}>Maintenence Calories</Text>
            <View style={styles.arrow}>
              <Icon
                name="arrow-forward"
                style={{paddingRight: 10,paddingTop: 12}}
                size={20}
                color="gray"
              />
            </View>
          </TouchableOpacity>
          <Divider />
          <Text style={{fontSize: 25, color:"#000000"}}>Nutrition & Workout</Text>
          <Divider />
          <TouchableOpacity style={styles.touchableOpacity}>
            <Text style={{fontSize: 15}}>Calories</Text>
            <View style={styles.arrow}>
              <Icon
                name="arrow-forward"
                style={{paddingRight: 10,paddingTop: 12}}
                size={20}
                color="gray"
              />
            </View>
          </TouchableOpacity>
          <Divider />
          <TouchableOpacity style={styles.touchableOpacity}>
            <Text style={{fontSize: 15}}>Protein</Text>
            <View style={styles.arrow}>
              <Icon
                name="arrow-forward"
                style={{paddingRight: 10,paddingTop: 12}}
                size={20}
                color="gray"
              />
            </View>
          </TouchableOpacity>
          <Divider />
          <TouchableOpacity style={styles.touchableOpacity}>
            <Text style={{fontSize: 15}}>Carbs</Text>
            <View style={styles.arrow}>
              <Icon
                name="arrow-forward"
                style={{paddingRight: 10,paddingTop: 12}}
                size={20}
                color="gray"
              />
            </View>
          </TouchableOpacity>
          <Divider />
          <TouchableOpacity style={styles.touchableOpacity}>
            <Text style={{fontSize: 15}}>Fats</Text>
            <View style={styles.arrow}>
              <Icon
                name="arrow-forward"
                style={{paddingRight: 10,paddingTop: 12}}
                size={20}
                color="gray"
              />
            </View>
          </TouchableOpacity>
          <Divider />
          <TouchableOpacity style={styles.touchableOpacity}>
            <Text style={{fontSize: 15}}>Workout Sessions</Text>
            <View style={styles.arrow}>
              <Icon
                name="arrow-forward"
                style={{paddingRight: 10,paddingTop: 12}}
                size={20}
                color="gray"
              />
            </View>
          </TouchableOpacity>
          <Divider />

        </View>
      </ScrollView>
    </View>
  );
};
export default profile;
