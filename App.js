import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import index from './src/Login/Screen/index';
import login from './src/Login/Screen/login';
import createAccount from './src/Login/Screen/createAccount';
import Dashboard from './src/Dashboard/Screen/dashbord';
import heightWeight from './src/Dashboard/Screen/heightWeight';
import SelectGole from './src/Dashboard/Screen/SelectGole';
import activityLevel from './src/Dashboard/Screen/activityLevel';
import bodyFat from './src/Dashboard/Screen/bodyFat';
import choseGole from './src/Dashboard/Screen/choseGole';
import weight_lose_speed from './src/Dashboard/Screen/weightLoseSpeed';
import {DataProvider} from './src/DataContext/DataContext';
import Confirm from './src/Dashboard/Screen/Confirm';
import customCalories from './src/Dashboard/Screen/customCalories';
import FoodList from './src/Dashboard/Screen/foodList';
import forgotPassword from './src/Login/Screen/forgotPassword';
import resetPassword from './src/Login/Screen/resetPassword';
import chatBot from './src/ChatBot/chat';
import Calories from './src/Dashboard/Screen/CheckIn/Calories';
import CheckIn1 from './src/Dashboard/Screen/CheckIn/Screen1';
import CheckIn2 from './src/Dashboard/Screen/CheckIn/Screen2';
import CheckIn3 from './src/Dashboard/Screen/CheckIn/Screen3';
import CheckIn4 from './src/Dashboard/Screen/CheckIn/Screen4';
import initialCoaching from './src/Dashboard/Screen/CheckIn/initialCoaching';
import helpSupport from './src/Dashboard/Screen/support/index';
import DailyWeight from './src/Dashboard/Screen/DailyWeight';
import checkInHsitory from './src/Dashboard/Screen/checkInHsitory';
import payment from './src/Payment/payment1';
import paymentPlan from './src/Payment/paymentPlan';
import weight from './src/progresstracking/weight';
import BodyFatPercentage from './src/progresstracking/BodyFatPercentage';
import MaintenenceCalories from './src/progresstracking/MaintenenceCalories';
import progresstrackingCalories from './src/progresstracking/Calories';
import Carbs from './src/progresstracking/Carbs';
import Protein from './src/progresstracking/Protein';
import Fats from './src/progresstracking/Fats';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="WelcomePage" component={index} />
          <Stack.Screen name="Login" component={login} />
          <Stack.Screen name="createAccount" component={createAccount} />
          <Stack.Screen name="forgotPassword" component={forgotPassword} />
          <Stack.Screen name="resetPassword" component={resetPassword} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="heightWeight" component={heightWeight} />
          <Stack.Screen name="SelectGole" component={SelectGole} />
          <Stack.Screen name="activityLevel" component={activityLevel} />
          <Stack.Screen name="bodyFat" component={bodyFat} />
          <Stack.Screen name="choseGole" component={choseGole} />
          <Stack.Screen
            name="weight_lose_speed"
            component={weight_lose_speed}
          />
          <Stack.Screen name="Confirm" component={Confirm} />
          <Stack.Screen name="customCalories" component={customCalories} />
          <Stack.Screen name="FoodList" component={FoodList} />
          <Stack.Screen name="chatBot" component={chatBot} />
          <Stack.Screen name="initialCoaching" component={initialCoaching} />
          <Stack.Screen name="Calories" component={Calories} />
          <Stack.Screen name="CheckIn1" component={CheckIn1} />
          <Stack.Screen name="CheckIn2" component={CheckIn2} />
          <Stack.Screen name="CheckIn3" component={CheckIn3} />
          <Stack.Screen name="CheckIn4" component={CheckIn4} />
          <Stack.Screen name="helpSupport" component={helpSupport} />
          <Stack.Screen name="DailyWeight" component={DailyWeight} />
          <Stack.Screen name="checkInHsitory" component={checkInHsitory} />
          <Stack.Screen name="paymentPlan" component={paymentPlan} />
          <Stack.Screen name="payment" component={payment} />
          <Stack.Screen name="weight" component={weight} />
          <Stack.Screen
            name="BodyFatPercentage"
            component={BodyFatPercentage}
          />
          <Stack.Screen
            name="MaintenenceCalories"
            component={MaintenenceCalories}
          />
          <Stack.Screen
            name="progresstrackingCalories"
            component={progresstrackingCalories}
          />
          <Stack.Screen name="Carbs" component={Carbs} />
          <Stack.Screen name="Protein" component={Protein} />
          <Stack.Screen name="Fats" component={Fats} />


        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
function AppRetuern() {
  return (
    <DataProvider>
      <App />
    </DataProvider>
  );
}
export default Ap = AppRetuern;
