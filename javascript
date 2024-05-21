// React Native (using react-native-google-signin)
import * as GoogleSignIn from 'react-native-google-signin';

GoogleSignIn.configure({
  // Configure Google Sign In options
});

const handleGoogleSignIn = async () => {
  try {
    const userInfo = await GoogleSignIn.signIn();
    // Process user information and send to your backend
  } catch (error) {
    console.error(error);
  }
};

// Flutter (using flutter_signin_button)
import 'package:flutter_signin_button/flutter_signin_button.dart';

SignInButton(
  Buttons.Google,
  onPressed: () async {
    // Handle Google Sign In using the selected library
  },
);
