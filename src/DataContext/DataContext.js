import React, {useState} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ip = '172.23.192.1';
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
    alert(error.message);
  }
};
const addCalories = async props => {
  try {
    const response = await axios.post(
      `http://${ip}:3000/api/meal/addMeal`,
      {
        token: token,
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
    alert(error.message);
  }
};
// const searchFood = async props => {
//   console.log("=============================")
//   console.log(props)
//   try {
//     const response = await axios.post(
//       `https://trackapi.nutritionix.com/v2/natural/nutrients`,
//       {
//         query: props,
//       },
//       {
//         headers: {
//           Connection: 'keep-alive',
//           'Content-Type': 'application/json',
//           'x-app-id': '0c77ef17',
//           'x-app-key': '9d318186320499a030ae51573a28f342',
//         },
//       },
//     );
//     console.log(response)
//     const FoodName = response.data.foods[0].food_name;
//     const Calories = response.data.foods[0].nf_calories;
//     const Protein = response.data.foods[0].nf_protein;
//     const Carbs = response.data.foods[0].nf_total_carbohydrate;
//     const Fats = response.data.foods[0].nf_total_fat;
//       console.log("=============================")
//     return {FoodName, Calories, Protein, Carbs, Fats};
//   } catch (error) {
//     alert(error.message);
//   }
// };
const searchFood = async props => {
  try {
    const response = await axios.post(
      `http://${ip}:3000/api/external/searchFood`,
      {
        query: props,
      },
    );
    console.log(response.data);
    const FoodName = response.data.food_name;
    const Calories = response.data.nf_calories;
    const Protein = response.data.nf_protein;
    const Carbs = response.data.nf_total_carbohydrate;
    const Fats = response.data.nf_total_fat;

    return {FoodName, Calories, Protein, Carbs, Fats};
  } catch (error) {
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

    if (response.data.status === 'success') {
      return true;
    } else {
      return false;
    }
  } catch (error) {
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

    token = response.data.token;
    userId = response.data.id;
    if (response.data.status === 'success') {
      return true;
    } else {
      return false;
    }
  } catch (error) {
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

    return response.data;
  } catch (error) {
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

    return response.data.reasult;
  } catch (error) {
    alert('todayDiaryDetail');
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

    return response.data;
  } catch (error) {
    alert('currentWeekPercentage');
    // alert(error.message);
  }
};
const helpAndSupport = async (title, type, details) => {
  try {
    const response = await axios.post(
      `http://${ip}:3000/api/user/helpAndSupport`,
      {
        token: token,
        title: title,
        type: type,
        details: details,
      },
    );
    console.log(response);
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

    return response.data;
  } catch (error) {
    alert(error.message);
  }
};
const addDailyWeight = async (weight, bodyFatPercentage) => {
  try {
    const response = await axios.post(
      `http://${ip}:3000/api/coachingRoute/addDailyWeight`,
      {
        token,
        weight: weight,
        bodyFatPercentage: bodyFatPercentage,
      },
    );

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

    return response.data;
  } catch (error) {
    alert(error.message);
  }
};
const addPaymentMethod = async (cardNumber, cvc, name, amount, packageType) => {
  console.log(
    cardNumber + ' ' + cvc + ' ' + name + ' ' + amount + ' ' + packageType,
  );
  try {
    const response = await axios.post(
      `http://${ip}:3000/api/payment/addPayment`,
      {
        token,
        cardNumber: cardNumber,
        cvc: cvc,
        amount: amount,
        packageType: packageType,
      },
    );
    console.log(response.status);
    return response.status;
  } catch (error) {
    alert(error.message);
  }
};
const progressTracking_getWeight = async () => {
  try {
    const response = await axios.post(
      `http://${ip}:3000/api/progressTracking/getWeight`,
      {
        token,
      },
    );

    return response.data;
  } catch (error) {
    alert(error.message);
  }
};
const progressTracking_getBodyFatPercentage = async () => {
  try {
    const response = await axios.post(
      `http://${ip}:3000/api/progressTracking/getBodyFatPercentage`,
      {
        token,
      },
    );

    return response.data;
  } catch (error) {
    alert(error.message);
  }
};
const progressTracking_getMaintenanceCalories = async () => {
  try {
    const response = await axios.post(
      `http://${ip}:3000/api/progressTracking/getMaintenanceCalories`,
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
const progressTracking_getCalories = async () => {
  try {
    const response = await axios.post(
      `http://${ip}:3000/api/progressTracking/getCalories`,
      {
        token,
      },
    );

    return response.data;
  } catch (error) {
    alert(error.message);
  }
};
const progressTracking_getProtein = async () => {
  try {
    const response = await axios.post(
      `http://${ip}:3000/api/progressTracking/getProtein`,
      {
        token,
      },
    );

    return response.data;
  } catch (error) {
    alert(error.message);
  }
};
const progressTracking_getCarbs = async () => {
  try {
    const response = await axios.post(
      `http://${ip}:3000/api/progressTracking/getCarbs`,
      {
        token,
      },
    );

    return response.data;
  } catch (error) {
    alert(error.message);
  }
};
const progressTracking_getFats = async () => {
  try {
    const response = await axios.post(
      `http://${ip}:3000/api/progressTracking/getFats`,
      {
        token,
      },
    );

    return response.data;
  } catch (error) {
    alert(error.message);
  }
};

const workoutGerneration = async props => {
  try {
    const response = await axios.post(
      `http://${ip}:3000/api/workoutbuilderRoutes/generateWorkout`,
      {
        token: token,
        trainingIntensity: props[1].intensity,
        targetMuscle: props[4].muscle,
        trainingType: props[0].type,
      },
    );

    return response.data;
  } catch (error) {
    alert(error.message);
  }
};
const LogWorkout = async props => {
  try {
    const response = await axios.post(
      `http://${ip}:3000/api/workoutbuilderRoutes/logWorkout`,
      {
        token: token,
        Type: props.type,
        workoutName: props.name,
        targetMuscle: props.targetMuscle,
        intensity: props.intensity,
        Exercise: props.exercises,
      },
    );
    console.log(response.status);
    return response.status;
  } catch (error) {
    alert(error.message);
  }
};
const getWorkout = async props => {
  try {
    const response = await axios.post(
      `http://${ip}:3000/api/workoutbuilderRoutes/getWorkout`,
      {
        token: token,
      },
    );

    return response.data;
  } catch (error) {
    alert(error.message);
  }
};

const plansCard = async props => {
  try {
    const response = await axios.post(
      `http://${ip}:3000/api/workoutbuilderRoutes/plansCard`,
      {
        token: token,
      },
    );

    return response.data;
  } catch (error) {
    alert(error.message);
  }
};
const checkPayment = async props => {
  try {
    const response = await axios.post(
      `http://${ip}:3000/api/payment/checkPayment`,
      {
        token: token,
      },
    );

    return response.data;
  } catch (error) {
    alert(error.message);
  }
};
const exercisedb = async props => {
  try {
    const response = await axios.post(
      `http://${ip}:3000/api/external/exercisedb`,
      {
        token: token,
      },
    );

    return response.data;
  } catch (error) {
    alert(error.message);
  }
};
const customMadeWorkout = async props => {
  const Exercise = props.map(({id, item, sets, reps, RPE}) => {
    return {
      id,
      name: item,
      sets,
      reps,
      RPE,
    };
  });
  try {
    const response = await axios.post(
      `http://${ip}:3000/api/workoutbuilderRoutes/logWorkout`,
      {
        token: token,
        Type: 'Custom',
        workoutName: 'Custom',
        targetMuscle: 'Custom',
        intensity: 'Custom',
        Exercise: Exercise,
      },
    );

    console.log(response.data);
    return response.status;
  } catch (error) {
    alert(error.message);
  }
};
const resetAccount = async props => {
  console.log(props[0]);
  console.log(props[1]);
  console.log(props[2]);
  console.log(props[3]);
  console.log(props[4]);
  console.log(props[5]);
  console.log(props[6]);
  console.log(props[7]);
  // try {
  //   const response = await axios.post(
  //     `http://${ip}:3000/api/user/resetAccount`,
  //     {
  //       Weight: props[5],
  //       Height: props[6],
  //       Gender: props[7],
  //       Goal: props[8],
  //       ActivityLevel: props[9],
  //       BodyFat: props[10],
  //       TargetWeight: props[11],
  //       weeklyGoal: props[12],
  //     },
  //   );

  //   token = response.data.token;
  //   userId = response.data.id;
  //   await AsyncStorage.setItem('Token', response.data.token);
  //   await AsyncStorage.setItem('id', response.data.id);
  //   if (response.data.status === 'success') {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // } catch (error) {
  //   alert('Please Check your Details');
  // }
};
const searchRecommendations = async props => {
  try {
    const response = await axios.post(
      `http://${ip}:3000/api/workoutbuilderRoutes/recomendations`,
      {
        query: props,
      },
    );

    return response.data;
  } catch (error) {
    alert(error.message);
  }
};
const weeklyCheckInStatus = async props => {
  try {
    const response = await axios.post(
      `http://${ip}:3000/api/coachingRoute/weeklyCheckInStatus`,
      {
        token: token,
      },
    );

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
        searchRecommendations,
        weeklyCheckInStatus,
        customMadeWorkout, 
        resetAccount,
        checkPayment,
        exercisedb,
        progressTracking_getCalories,
        progressTracking_getProtein,
        progressTracking_getCarbs,
        progressTracking_getFats,
        signin,
        addPaymentMethod,
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
        progressTracking_getWeight,
        progressTracking_getBodyFatPercentage,
        progressTracking_getMaintenanceCalories,
        LogWorkout,
        getWorkout,
        plansCard,
        workoutGerneration,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
