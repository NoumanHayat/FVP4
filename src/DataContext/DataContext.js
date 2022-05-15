import React, {useState} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ip = '172.27.192.1';
// var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjAzMzlhYjIxNmJiZjE4NmZmOTdjZCIsImlhdCI6MTY1MDQ4MzE5NiwiZXhwIjoxNjU4MjU5MTk2fQ.b3PibfH5oa86FFGq97SxHLZsqhwZpkuie1CW8KSi14c';
var userId = '';
var token = ' ';

// const DATA="okkkkkkkkkk";
const autoLogin = async props => {
  try {
    const value = await AsyncStorage.getItem('Token');
    if (value === '' || value === null) {
      return false;
    } else {
      token = value;
      console.log(token);

      return true;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};
const logout = async props => {
  try {
    await AsyncStorage.setItem('Token', '');
  } catch (error) {
    console.error(error);
  }
};
const signin = async props => {
  try {
    const response = await axios.post(`http://${ip}:3000/api/user/signIn`, {
      email: props.email,
      password: props.password,
    });

    token = response.data.token;
    userId = response.data.id;
    try {
      await AsyncStorage.setItem('Token', response.data.token);
    } catch (error) {
      alert(error);
    }
    if (response.data.status === 'success') {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    alert(error.message);
  }
};
const signup = async props => {
  try {
    const response = await axios.post(`http://${ip}:3000/api/user/signup`, {
      name: props[1],
      email: props[0],
      password: props[2],
      passwordConfirm: props[3],
      age: props[4],
      Weight: props[5],
      Height: props[6],
      Gender: props[7],
      Goal: props[8],
      ActivityLevel: props[9],
      BodyFat: props[10],
      TargetWeight: props[11],
      weeklyGoal: props[12],
    });

    token = response.data.token;
    userId = response.data.id;
    await AsyncStorage.setItem('Token', response.data.token);
    await AsyncStorage.setItem('id', response.data.id);
    if (response.data.status === 'success') {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log('Error' + error);
    alert('Please Check your Details');
  }
};
const predictBodyFat = async props => {
  try {
    const response = await axios.post(
      `http://${ip}:3000/api/user/predictBodyFat`,
      {
        waist: 45,
      },
    );

    return response.data;
  } catch (error) {
    console.log('Error' + error);
    alert(error.message);
  }
};
const addCalories = async props => {
  console.log(props);
  try {
    const response = await axios.post(
      `http://${ip}:3000/api/meal/addMeal`,
      {
        MealType: props.type,
        FoodName: props.foodName,
        Calories: props.calories,
        Protein: props.protein,
        Carbs: props.corbs,
        Fats: props.fats,
      },
      {
        authorization: 'Check ' + token,
      },
    );
    if (response.data.status === 'success') {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log('Error' + error);
    alert(error.message);
  }
};
const findFood = async props => {
  try {
    const response = await axios.post(
      `http://${ip}:3000/api/meal/getMeal`,
      {
        MealType: props.type,
        token,
      },
      {
        authorization: 'Check ' + token,
      },
    );
    return response.data.result;
  } catch (error) {
    console.log('Error' + error);
    alert(error.message);
  }
};
const DeleteFood = async props => {
  try {
    const response = await axios.post(
      `http://${ip}:3000/api/meal/delete`,
      {
        id: props,
      },
      {
        authorization: 'Check ' + token,
      },
    );
    return response.data.result;
  } catch (error) {
    console.log('Error' + error);
    alert(error.message);
  }
};
const searchFood = async props => {
  try {
    const response = await axios.post(
      `https://trackapi.nutritionix.com/v2/natural/nutrients`,
      {
        query: props,
      },
      {
        headers: {
          Connection: 'keep-alive',
          'Content-Type': 'application/json',
          'x-app-id': '0c77ef17',
          'x-app-key': '9d318186320499a030ae51573a28f342',
        },
      },
    );

    const FoodName = response.data.foods[0].food_name;
    const Calories = response.data.foods[0].nf_calories;
    const Protein = response.data.foods[0].nf_protein;
    const Carbs = response.data.foods[0].nf_total_carbohydrate;
    const Fats = response.data.foods[0].nf_total_fat;
    console.log({FoodName, Calories, Protein, Carbs, Fats});
    return {FoodName, Calories, Protein, Carbs, Fats};
  } catch (error) {
    console.log('Error' + error);
    alert(error.message);
  }
};
const forgotPassword = async props => {
  try {
    const response = await axios.post(
      `http://${ip}:3000/api/user/forgotPassword`,
      {
        email: props.email,
      },
    );

    console.log(response.data);
    if (response.data.status === 'success') {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};
const resetPassword = async props => {
  try {
    const response = await axios.post(
      `  http://${ip}:3000/api/user/resetPassword`,
      {
        email: props.email,
        token: props.token,
        password: props.password,
      },
    );

    console.log(response.data);
    token = response.data.token;
    userId = response.data.id;
    if (response.data.status === 'success') {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};
const userDetails = async props => {
  try {
    const response = await axios.post(`http://${ip}:3000/api/user/details`, {
      token: token,
    });
    return response;
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};
const previousCalories = async props => {
  try {
    const response = await axios.post(
      `http://${ip}:3000/api/coachingRoute/previousWeek`,
      {
        token: token,
      },
    );
    return response.data;
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};
const weeklyCheckIn = async props => {
  try {
    const response = await axios.post(
      `  http://${ip}:3000/api/coachingRoute/weeklyCheckIn`,
      {
        currentWeight: props,
        token: token,
      },
      {
        authorization: 'Check ' + token,
      },
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};
const currentCalories = async props => {
  try {
    const response = await axios.post(
      `http://${ip}:3000/api/coachingRoute/currentWeek`,
      {
        token: token,
      },
    );
    return response.data;
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};
const initialCoaching = async props => {
  try {
    const response = await axios.post(
      `http://${ip}:3000/api/coachingRoute/initialCoaching`,
      {
        token: token,
      },
    );
    return response.data;
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};
const todayDiaryDetail = async props => {
  try {
    const response = await axios.post(
      `http://${ip}:3000/api/meal/getTodayMeals`,
      {
        token: token,
      },
    );
    // console.log(response.data.reasult)

    return response.data.reasult;
  } catch (error) {
    alert("todayDiaryDetail");
    // alert(error.message);
  }
};
const currentWeekPercentage = async props => {
  try {
    const response = await axios.post(
      `http://${ip}:3000/api/coachingRoute/currentWeekPercentage`,
      {
        token: token,
      },
    );
    // console.log(response.data.reasult)

    return response.data;
  } catch (error) {
    alert("currentWeekPercentage");
    // alert(error.message);
  }
};
const helpAndSupport = async props => {
  try {
    const response = await axios.post(
      `http://${ip}:3000/api/user/helpAndSupport`,
      {
        token: token,
        title: props.title,
        type: props.type,
        details: props.details,
      },
    );
    // console.log(response.data.reasult)

    return response.data;
  } catch (error) {
    alert(error.message);
  }
};
const diaryhistory = async props => {
  try {
    const response = await axios.post(
      `http://${ip}:3000/api/meal/diaryhistory`,
      {
        token: token,
      },
    );
    // console.log(response.data.reasult[0])
    var test = [
      {
        title: response.data.reasult[0].title,
        Calories: response.data.reasult[0].Calories[2],
        Protein: response.data.reasult[0].Protein[2],
        Carbs: response.data.reasult[0].Carbs[2],
        Fats: response.data.reasult[0].Fats[2],
      },
      {
        title: response.data.reasult[1].title,
        Calories: response.data.reasult[1].Calories[2],
        Protein: response.data.reasult[1].Protein[2],
        Carbs: response.data.reasult[1].Carbs[2],
        Fats: response.data.reasult[1].Fats[2],
      },
      {
        title: response.data.reasult[2].title,
        Calories: response.data.reasult[2].Calories[2],
        Protein: response.data.reasult[2].Protein[2],
        Carbs: response.data.reasult[2].Carbs[2],
        Fats: response.data.reasult[2].Fats[2],
      },
    ];
    console.log(test);
    return response.data.reasult;
  } catch (error) {
    alert(error.message);
  }
};
const checkInHsitory = async props => {
  try {
    const response = await axios.post(
      `http://${ip}:3000/api/coachingRoute/weeklyCheckInHistory`,
      {
        token,
      },
    );
    console.log(response.data);

    return response.data;
  } catch (error) {
    alert(error.message);
  }
};
const addDailyWeight = async (weight,bodyFatPercentage) => {
  
  try { 
    const response = await axios.post(
      `http://${ip}:3000/api/coachingRoute/addDailyWeight`,
      {
        token,
        weight: weight,
        bodyFatPercentage: bodyFatPercentage,
      },
    );
    console.log(response.data);

    return response.data;
  } catch (error) {
    alert(error.message);
  }
};
const getDailyWeight = async props => {
  try {
    const response = await axios.post(
      `http://${ip}:3000/api/coachingRoute/getDailyWeight`,
      {
        token,
      },
    );
    console.log(response.data);

    return response.data;
  } catch (error) {
    alert(error.message);
  }
};
const DataContext = React.createContext();
export const DataProvider = ({children}) => {
  return (
    <DataContext.Provider
      value={{
        signin,
        logout,
        initialCoaching,
        signup,
        currentCalories,
        resetPassword,
        forgotPassword,
        getDailyWeight,
        currentWeekPercentage,
        todayDiaryDetail,
        token,
        userId,
        checkInHsitory,
        predictBodyFat,
        addCalories,
        findFood,
        addDailyWeight,
        DeleteFood,
        searchFood,
        userDetails,
        autoLogin,
        previousCalories,
        weeklyCheckIn,
        helpAndSupport,
        diaryhistory,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
