import React, {useState} from 'react';
import {View, Text} from 'react-native';
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
passport.use(
  new GoogleStrategy(
    {
      clientID:
        '168949803118-rs7pire7tguo4asfvs1iiun5jq5o60ch.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:5000/auth/google/callback',
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
    },
  ),
);
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
const screen = () => {
  return (
    <View>
      <Text>hello</Text>
    </View>
  );
};
export default screen;
// Facebook.initializeAsync(appId: string | undefined, appName: string | undefined): Promise<void>
