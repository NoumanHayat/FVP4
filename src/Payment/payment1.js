import React, {useContext} from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {
  Alert,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView, 
  ScrollView,
} from 'react-native';
import LottieView from 'lottie-react-native';
import CreditCardForm, {Button, FormModel} from 'rn-credit-card';
import DataContext from '../DataContext/DataContext';

var react_hook_form_1 = require('react-hook-form');
var react_native_1 = require('react-native');

const App = (props) => {
  const navigation = props.navigation;
  const packageType=props.route.params?props.route.params[0]:"PREMIUM";
  const amount= props.route.params?props.route.params[1]:30;
  const {addPaymentMethod} = useContext(DataContext);

  var formMethods = (0, react_hook_form_1.useForm)({
    // to trigger the validation on the blur event
    mode: 'onBlur',
    defaultValues: {
      holderName: '',
      cardNumber: '',
      expiration: '',
      cvv: '',
    },
  });
  var handleSubmit = formMethods.handleSubmit,
    formState = formMethods.formState;
  function onSubmit(model) {
    react_native_1.Alert.alert('Success: ' + JSON.stringify(model, null, 2));
  }
  return (
    <ScrollView>
      <FormProvider {...formMethods}>
        <View style={styles.container}>
          <KeyboardAvoidingView
            style={styles.avoider}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <CreditCardForm
              LottieView={LottieView}
              horizontalStart
              overrides={{
                labelText: {
                  marginTop: 16,
                },
              }}
            />
          </KeyboardAvoidingView>
          {formState.isValid && (
            <Button
              style={styles.button}
              title={'CONFIRM PAYMENT'}
              onPress={async () => {
                console.log(formMethods.control._formValues);
                const res =await addPaymentMethod(formMethods.control._formValues.cardNumber,formMethods.control._formValues.cvv,formMethods.control._formValues.holderName,amount,packageType)
                if(res===200){
                  alert("You have subscribe success")
                  navigation.push('Dashboard')
                }
              }}
            />
          )}
        </View>
      </FormProvider>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  avoider: {
    flex: 1,
    padding: 36,
    paddingBottom: 10,
  },
  button: {
    margin: 36,
    marginTop: 0,
  },
});

export default App;
