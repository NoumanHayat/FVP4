// import React, {useState, Component, useRef, useContext} from 'react';

// // import LinearGradient from 'react-native-linear-gradient';
// import {SignupStyle as Styles} from '../Style/index';
// import Icon from 'react-native-vector-icons/Entypo';
// import {Input, CheckBox} from 'react-native-elements';
// import LinearGradient from 'react-native-linear-gradient';
// // import DataContext from '../../DataContext/DataContext';
// import {
//   View,
//   Text,
//   ScrollView,
//   ImageBackground,
//   Animated,
//   TouchableOpacity,
// } from 'react-native';

// const index = props => {
//   const navigation = props.navigation;
//   // const {signup} = useContext(DataContext);

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [age, setAge] = useState('');
//   const [passwordConfirm, setPasswordConfirm] = useState('');

//   const fadeAnim = useRef(new Animated.Value(1)).current;

//   const fadeOut = () => {
//     // Will change fadeAnim value to 0 in 3 seconds
//     Animated.timing(fadeAnim, {
//       toValue: 0,
//       duration: 3000,
//       useNativeDriver: false,
//     }).start();
//   };
//   return (
//     <ScrollView style={{flex: 1, backgroundColor: '#ffff'}}>
//       <Animated.View
//         style={[
//           ,
//           {
//             // Bind opacity to animated value
//             opacity: fadeAnim,
//           },
//         ]}>
//         <ImageBackground
//           source={require('../Images/welcomePage.jpg')}
//           style={Styles.background}>
//           <Text style={Styles.Fitnessio}>Fitnessio</Text>
//         </ImageBackground>

//         <View style={Styles.bottom}>
//           <View style={Styles.bottomContainer}>
//             <Text style={Styles.welcomeText}>Welcome</Text>
//             <TouchableOpacity
//               onPress={() => {
//                 fadeOut();
//                 setTimeout(() => navigation.push('Login'), 3001);
//               }}>
//               <Text style={{color: 'black'}}>
//                 Have Account?
//                 <Text style={{color: 'red', padding: 10, fontSize: 16}}>
//                   Login
//                 </Text>
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//         <View style={Styles.loginContainer}>
//           <Input
//             placeholder="User Name"
//             onChangeText={e => {
//               setName(e);
//             }}
//             leftIcon={<Icon name="user" size={15} color="black" />}
//           />
//           <Input
//             placeholder="Email"
//             onChangeText={e => {
//               setEmail(e);
//             }}
//             leftIcon={<Icon name="email" size={15} color="black" />}
//           />
//           <Input
//             placeholder="Password"
//             onChangeText={e => {
//               setPassword(e);
//             }}
//             secureTextEntry={true}
//             leftIcon={<Icon name="lock" size={15} color="black" />}
//           />
//           <Input
//             placeholder="Confirm Password"
//             onChangeText={e => {
//               setPasswordConfirm(e);
//             }}
//             secureTextEntry={true}
//             leftIcon={<Icon name="lock" size={15} color="black" />}
//           />
//           <Input
//             placeholder="Age"
//             onChangeText={e => {
//               setAge(e);
//             }}

//             leftIcon={<Icon name="new-message" size={15} color="black" />}
//           />
//           <LinearGradient
//             start={{x: 0.3, y: 0.25}}
//             end={{x: 0.5, y: 0.7}}
//             locations={[0.3, 1.6, 0.6]}
//             colors={['#0E98F4', '#2DA4F4', '#0E98F4']}
//             style={Styles.linearGradient}>
//             <TouchableOpacity
//               onPress={ async () => {
//                 if(email!==null &&  name!==null && password!==null && passwordConfirm!==null && age!==null){
//                   navigation.push("heightWeight",[email, name, password, passwordConfirm,age]);
//                 }else{
//                   alert("Please provide details");
//                 }
//               }}>
//               <Text style={Styles.buttonText}>Create Account</Text>
//             </TouchableOpacity>
//           </LinearGradient>
//         </View>
//       </Animated.View>
//     </ScrollView>
//   );
// };
// export default index;
import React, {useRef, useState} from 'react';
// import DataContext from '../../DataContext/DataContext';
import {
  Animated,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Input} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Entypo';
// import LinearGradient from 'react-native-linear-gradient';
import {SignupStyle as Styles} from '../Style/index';

const index = props => {
  const navigation = props.navigation;
  // const {signup} = useContext(DataContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const fadeAnim = useRef(new Animated.Value(1)).current;

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#ffff'}}>
      <Animated.View
        style={[
          ,
          {
            // Bind opacity to animated value
            opacity: fadeAnim,
          },
        ]}>
        <ImageBackground
          source={require('../Images/welcomePage.jpg')}
          style={Styles.background}></ImageBackground>

        <View style={Styles.bottom}>
          <View style={Styles.bottomContainer}>
            <Text style={Styles.welcomeText}>Welcome</Text>
            <TouchableOpacity
              onPress={() => {
                fadeOut();
                setTimeout(() => navigation.push('Login'), 3001);
              }}>
              <Text style={{color: 'black'}}>
                Have Account?
                <Text style={{color: 'red', padding: 10, fontSize: 16}}>
                  Login
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={Styles.loginContainer}>
          <Input
            placeholder="User Name"
            onChangeText={e => {
              setName(e);
            }}
            leftIcon={<Icon name="user" size={15} color="black" />}
          />
          <Input
            placeholder="Email"
            onChangeText={e => {
              setEmail(e);
            }}
            leftIcon={<Icon name="email" size={15} color="black" />}
          />
          <Input
            placeholder="Password"
            onChangeText={e => {
              setPassword(e);
            }}
            secureTextEntry={true}
            leftIcon={<Icon name="lock" size={15} color="black" />}
          />
          <Input
            placeholder="Confirm Password"
            onChangeText={e => {
              setPasswordConfirm(e);
            }}
            secureTextEntry={true}
            leftIcon={<Icon name="lock" size={15} color="black" />}
          />
          <Input
            placeholder="Age"
            onChangeText={e => {
              setAge(e);
            }}
            leftIcon={<Icon name="new-message" size={15} color="black" />}
          />
          <LinearGradient
            start={{x: 0.3, y: 0.25}}
            end={{x: 0.5, y: 0.7}}
            locations={[0.3, 1.6, 0.6]}
            colors={['#5362D5', '#5362D5', '#5362D5']}
            style={Styles.linearGradient}>
            <TouchableOpacity
              onPress={async () => {
                if (
                  email !== '' &&
                  name !== '' &&
                  password !== '' &&
                  passwordConfirm !== '' &&
                  age !== ''
                ) {
                  if(password===passwordConfirm){
                    if(password.length>7){
                    navigation.push('heightWeight', [
                      email,
                      name,
                      password,
                      passwordConfirm,
                      age,
                    ]);
                  }else{
                    alert('Password is too short')
                  }
                  }else{
                    alert('Password and Confirm Password are not same')
                  }
                  

                } else {
                  alert('Please provide details');
                }
              }}>
              <Text style={Styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </Animated.View>
    </ScrollView>
  );
};
export default index;
