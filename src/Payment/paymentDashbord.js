import React, {useContext, useEffect, useState} from 'react';
// import LinearGradient from 'react-native-linear-gradient';
import {paymentDashboard as Styles} from './styles';

import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import DataContext from '../DataContext/DataContext';

const index = props => {
  const [detail, setDetail] = useState({});
  const navigation = props.navigation;
  const {checkPayment} = useContext(DataContext);
  useEffect(() => {
    async function fetchData() {
      const CPayment = await checkPayment();
      console.log(CPayment);
      setDetail(CPayment);
      if (!CPayment.available) {
        navigation.push('paymentPlan');
      }
    }
    fetchData();
  }, []);
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#ffff'}}
      showsVerticalScrollIndicator={false}>
      <View>
        <View style={Styles.bottomContainer}>
          <Text style={Styles.welcomeText}>Welcome</Text>
          <Text style={{color: 'black'}}>Here are your Subscription Details</Text>
          <View style={Styles.lowerPart}>
            <Text style={{fontSize: 26, color: 'black'}}>
              Subscription Type:
            </Text>
            <Text style={{fontSize: 26, color: 'red'}}>
              {detail.packageType}
            </Text>

            <Text style={{fontSize: 26, color: 'black'}}>ExpireDate: </Text>
            <Text style={{fontSize: 26, color: 'red'}}>
              {detail.ExpireDate}
            </Text>
            <View style={Styles.checkInButton}>
              {detail.packageType == 'Trial' ? (
                <TouchableOpacity
                  style={{
                    backgroundColor: 'blue',
                    borderRadius: 15,
                    position: 'relative',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20,
                  }}
                  onPress={() => {
                    navigation.push('paymentPlan');
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: 'Gill Sans',
                      textAlign: 'center',
                      margin: 10,
                      color: '#ffffff',
                      backgroundColor: 'transparent',
                    }}>
                    Buy Subscription
                  </Text>
                </TouchableOpacity>
              ) : (
                <Text></Text>
              )}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default index;
