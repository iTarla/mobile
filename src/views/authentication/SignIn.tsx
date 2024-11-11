import React, {useState} from 'react';
import {
  Dimensions,
  Pressable,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {Text} from 'react-native';
import WaveIcon from '../../assets/icons/Wave.svg';
import GoogleIcon from '../../assets/icons/Google.svg';
import FacebookIcon from '../../assets/icons/Facebook.svg';
import VisibilityOffIcon from '../../assets/icons/VisibilityOff.svg';
import {useNavigation} from '@react-navigation/native';

export const SignIn = () => {
  const navigation = useNavigation();

  const [usernameFocus, setUsernameFocus] = useState(false);

  const [passwordFocus, setPasswordFocus] = useState(false);

  const [passwordZVisibility, setPasswordZVisibility] = useState(false);

  const signIn = () => {
    navigation.navigate('ChooseFarm');
  };

  return (
    <SafeAreaView style={styles.contentContainer}>
      <View style={styles.iconContainer}>
        <WaveIcon fill={'green'} />
      </View>

      <View style={styles.signInContainer}>
        <Text style={styles.signIn}>Sign In</Text>

        <Text style={styles.getConnected}>
          Get connected with you smart farm!
        </Text>
      </View>

      <View style={styles.signInFormContainer}>
        <View style={styles.providers}>
          <Pressable style={styles.provider}>
            <FacebookIcon />

            <Text style={styles.providerName}>Facebook</Text>
          </Pressable>

          <Pressable style={styles.provider}>
            <GoogleIcon />

            <Text style={styles.providerName}>Google</Text>
          </Pressable>
        </View>

        <View style={styles.separatorCotainer}>
          <View style={styles.line}></View>

          <Text style={styles.separatorText}>Or</Text>

          <View style={styles.line}></View>
        </View>

        <View
          style={
            usernameFocus ? styles.focusedInputContainer : styles.inputContainer
          }>
          <TextInput
            onFocus={() => setUsernameFocus(true)}
            onBlur={() => setUsernameFocus(false)}
            style={styles.input}
            inputMode="email"
            autoCapitalize="none"
            placeholder="Email"
            placeholderTextColor={'#DCE5E2'}
          />
        </View>

        <View style={styles.passwordContainer}>
          <View
            style={
              passwordFocus
                ? styles.focusedInputContainer
                : styles.inputContainer
            }>
            <TextInput
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
              style={styles.input}
              secureTextEntry={!passwordZVisibility}
              autoCapitalize="none"
              placeholder="Password"
              placeholderTextColor={'#DCE5E2'}
            />

            <Pressable
              onPressIn={() => setPasswordZVisibility(true)}
              onPressOut={() => setPasswordZVisibility(false)}>
              <VisibilityOffIcon />
            </Pressable>
          </View>

          <Pressable>
            <Text style={styles.forgetPassword}>Forget Password?</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.signInButtonContainer}>
        <Pressable onPress={signIn} style={styles.logInButton}>
          <Text style={styles.logInText}>Log In</Text>
        </Pressable>

        <Text style={styles.dontHaveAccount}>
          Don't have account?
          <Text style={styles.signUp}> Sign Up</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const providerWidth = (Dimensions.get('window').width - 80) / 2;

const lineWidth = (Dimensions.get('window').width - 100) / 2;

const logInButtonWidth = Dimensions.get('window').width - 60;

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    gap: 50,
  },
  iconContainer: {
    backgroundColor: '#E3FFD6',
    width: 90,
    height: 90,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInContainer: {
    gap: 4,
  },
  signIn: {
    color: '#0A973A',
    fontSize: 32,
    fontWeight: '600',
    fontFamily: 'Helvetica',
    textAlign: 'center',
  },
  getConnected: {
    color: '#6C7F77',
    fontSize: 14,
    fontFamily: 'Helvetica',
    textAlign: 'center',
  },
  signInFormContainer: {
    gap: 16,
  },
  providers: {
    gap: 20,
    flexDirection: 'row',
  },
  providerName: {
    fontSize: 15,
    fontFamily: 'Helvetica',
    lineHeight: 24,
    color: '#6C7F77',
  },
  provider: {
    flexDirection: 'row',
    padding: 16,
    gap: 16,
    backgroundColor: '#F5F9FE',
    borderRadius: 14,
    width: providerWidth,
  },
  separatorCotainer: {
    gap: 11,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    borderWidth: 1,
    height: 1,
    width: lineWidth,
    borderColor: '#DCE5E2',
  },
  separatorText: {
    color: '#0A973A',
    fontSize: 14,
    fontFamily: 'Poppins',
  },
  input: {
    color: '#2F403A',
    fontSize: 16,
    fontFamily: 'Helvetica',
    borderRadius: 14,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 18,
    boxShadow: '1 1 1 1 rgba(0, 0, 0, 0.2)',
    borderRadius: 14,
  },
  focusedInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 18,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#0A973A',
    borderStyle: 'solid',
  },
  passwordContainer: {
    gap: 8,
  },
  forgetPassword: {
    textAlign: 'right',
    color: '#A8B4AE',
    fontFamily: 'Helvetica',
    fontSize: 12,
  },
  logInButton: {
    backgroundColor: '#0A973A',
    width: logInButtonWidth,
    borderRadius: 14,
    paddingHorizontal: 24,
    paddingVertical: 18,
  },
  logInText: {
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  signInButtonContainer: {
    gap: 8,
  },
  dontHaveAccount: {
    fontFamily: 'Helvetica',
    fontSize: 14,
    color: '#6C7F77',
  },
  signUp: {
    fontFamily: 'Helvetica',
    fontSize: 14,
    color: '#0A973A',
  },
});
