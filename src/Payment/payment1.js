
import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {
  Alert,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native';
import LottieView from 'lottie-react-native';
import CreditCardForm, {Button, FormModel} from 'rn-credit-card';

var react_hook_form_1 = require("react-hook-form");
var react_native_1 = require("react-native");



const App = () => {
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
            onPress={() => {
              alert('okkk');
            }}
          />
        )}
      </View>
    </FormProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avoider: {
    flex: 1,
    padding: 36,
  },
  button: {
    margin: 36,
    marginTop: 0,
  },
});

export default App;
