// import React, {useState, Component, useRef, useContext} from 'react';

// // import LinearGradient from 'react-native-linear-gradient';
// import {resetPassword as Styles} from '../Style/index';
// import Icon from 'react-native-vector-icons/Entypo';
// import {Input, CheckBox} from 'react-native-elements';
// import LinearGradient from 'react-native-linear-gradient';
// import {
//   View,
//   Text,
//   ScrollView,
//   ImageBackground,
//   Dimensions,
//   Button,
//   Animated,
//   TouchableOpacity,
//   Image,
// } from 'react-native';
// import DataContext from '../../DataContext/DataContext';

// const index = props => {
//     const navigation = props.navigation;
//     const email=props.route.params;

//   const [token, setToken] = useState('');
//   const [password, setPassword] = useState('');
//   const {resetPassword} = useContext(DataContext);
//   return (
//     <ScrollView
//       style={{flex: 1, backgroundColor: '#ffff'}}
//       showsVerticalScrollIndicator={false}>

//         <ImageBackground
//           source={require('../Images/welcomePage.jpg')}
//           style={Styles.background}>
//           <Image
//             style={Styles.logo}
//             source={require('../Images/Fitnessio-logos_transparent.png')}
//           />
//           <Text style={Styles.Fitnessio}>Fitnessio</Text>
//         </ImageBackground>

//         <View style={Styles.bottom}>
//           <View style={Styles.bottomContainer}>
//             <Text style={Styles.welcomeText}>Please Enter token and new password</Text>

//           </View>
//         </View>
//         <View style={Styles.loginContainer}>
//           <Input
//             placeholder="Token"
//             onChangeText={(e)=>{setToken(e)}}
//             leftIcon={<Icon name="tools" size={15} color="black" />}
//           />
//           <Input
//             placeholder="Password"
//             secureTextEntry={true}
//             onChangeText={(e)=>{setPassword(e)}}
//             leftIcon={<Icon name="lock" size={15} color="black" />}
//           />

//           <LinearGradient
//             start={{x: 0.3, y: 0.25}}
//             end={{x: 0.5, y: 0.7}}
//             locations={[0.3, 1.6, 0.6]}
//             colors={['#C0C0C0', '#5b5757', '#808080']}
//             style={Styles.linearGradient}>
//             <TouchableOpacity
//               onPress={async () => {
//                 var result =await resetPassword({email,token,password});
//                 result? navigation.push("Dashboard"):alert("please check the details");

//               }}>
//               <Text style={Styles.buttonText}>Forgot Password</Text>
//             </TouchableOpacity>
//           </LinearGradient>
//         </View>

//     </ScrollView>
//   );
// };
// export default index;
import React, {useState, Component, useRef, useContext} from 'react';

// import LinearGradient from 'react-native-linear-gradient';
import {forgotPassword as Styles} from '../Style/index';
import Icon from 'react-native-vector-icons/Entypo';
import {Input, CheckBox} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Dimensions,
  Button,
  Animated,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import DataContext from '../../DataContext/DataContext';

const index = props => {
  const navigation = props.navigation;

  const email = props.route.params;

  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');
  const {resetPassword} = useContext(DataContext);

  return (
    <View style={Styles.Container}>
      <View style={Styles.loginContainer}>
        <View style={Styles.upperPart}>
          <Text style={{fontSize: 25, fontWeight: 'bold', padding: 10}}>
            Reset your password!
          </Text>
          <Text>Please provide token and new password</Text>
        </View>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 20,
            margin: 15,
          }}
          placeholder="Please Enter new Password"
          secureTextEntry={true}
          onChangeText={e => {
            setPassword(e);
          }}
          leftIcon={<Icon name="email" size={15} color="black" />}
        />

        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 20,
            margin: 15,
          }}
          placeholder="Please Provide Token"
          onChangeText={e => {
            setToken(e);
          }}
          leftIcon={<Icon name="email" size={15} color="black" />}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.push('Login');
          }}>
          <Text style={{paddingTop: 5, paddingBottom: 10, marginLeft: 50}}>
            Remember your Password <Text style={{color: 'red'}}>Login?</Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={Styles.button}
          onPress={async () => {
            var result = await resetPassword({email, token, password});
            result
              ? navigation.push('Dashboard')
              : alert('please check the details');
          }}>
         
          <Text style={Styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default index;
