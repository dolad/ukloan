import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {submitLoan} from '../actions/action';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Feather from 'react-native-vector-icons/Feather';

const SubmitLoanScreen = ({navigation, submitLoan}) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    password_confirmation: '',
    secureTextEntry: true,
    confirm_secureTextEntry: true,
    isValidNames: false,
    isValidEmail: false,
    isValidPassword: false,
    isValidPhone: false,
  });

  const validateName = val => {
    if (val.trim().length < 4) {
      setData({
        ...data,
        isValidNames: false,
      });
    } else {
      setData({
        ...data,
        isValidNames: true,
      });
    }
  };

  const validatePhone = val => {
    const phoneno = /^\d{10}$/;
    if (val.value.match(phoneno)) {
      setData({
        ...data,
        isValidPhone: !isValidPhone,
      });
    } else {
      setData({
        ...data,
        isValidPhone: false,
      });
    }
  };

  const validateEmail = val => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(email).toLowerCase()) === true) {
      setData({
        ...data,
        isValidEmail: !isValidEmail,
      });
    } else {
      setData({
        ...data,
        isValidEmail: false,
      });
    }
  };

  const textInputChange = val => {
    if (val.length !== 0) {
      validateName(val);
      setData({
        ...data,
        username: val,
      });
    }
  };

  const firstnameChange = val => {
    if (val.trim().length !== 0) {
      validateName(val);
      setData({
        ...data,
        first_name: val,
      });
    }
  };

  const lastNameChange = val => {
    if (val.trim().length !== 0) {
      validateName(val);
      setData({
        ...data,
        last_name: val,
      });
    }
  };

  const emailChange = val => {
    if (val.trim().length !== 0) {
      // validateEmail(val);
      setData({
        ...data,
        email: val,
      });
    }
  };

  const phoneChange = val => {
    if (val.trim().lenght !== 0) {
      // validatePhone(val);
      setData({
        ...data,
        phone_number: val,
      });
    }
  };

  const handlePasswordChange = val => {
    setData({
      ...data,
      password: val,
    });
  };

  const handleConfirmPasswordChange = val => {
    setData({
      ...data,
      password_confirmation: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  const {
    last_name,
    first_name,
    email,
    password,
    phone_number,
    username,
    password_confirmation,
  } = data;
  const submit = () => {
    const details = {
      last_name,
      first_name,
      email,
      password,
      phone_number,
      username,
      password_confirmation,
    };
    console.log(details);
    submitLoan(details, navigation);
  };

  const InputText = (
    inputChange,
    title,
    placeholder,
    fontawesome,
    iconName,
  ) => (
    <>
      <Text
        style={[
          styles.text_footer,
          {
            marginTop: 35,
          },
        ]}>
        {title}
      </Text>
      <View style={styles.action}>
        {fontawesome !== false ? (
          <FontAwesome name={iconName} color="#05375a" size={20} />
        ) : (
          <Feather name={iconName} color="#05375a" size={20} />
        )}
        <TextInput
          placeholder={placeholder}
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={val => inputChange(val)}
        />
      </View>
      {/* {validate && (
        <Text style={styles.errorMessage}>
          {validationMessage}
          {validate}
        </Text>
      )} */}
    </>
  );

  const PasswordInput = (passwordChange, updateTextEntry, isSecure) => (
    <>
      <Text
        style={[
          styles.text_footer,
          {
            marginTop: 35,
          },
        ]}>
        Password
      </Text>
      <View style={styles.action}>
        <Feather name="lock" color="#05375a" size={20} />
        <TextInput
          placeholder="Your Password"
          secureTextEntry={isSecure ? true : false}
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={val => passwordChange(val)}
        />
        <TouchableOpacity onPress={() => updateTextEntry()}>
          {isSecure ? (
            <Feather name="eye-off" color="grey" size={20} />
          ) : (
            <Feather name="eye" color="grey" size={20} />
          )}
        </TouchableOpacity>
      </View>

      {/* <Text style={styles.errorMessage}>Must be greater than 6</Text> */}
    </>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView>
          {InputText(
            textInputChange,
            'Username',
            'Your username',
            true,
            'user-o',
            data.isValidNames,
            'must be greater than 4',
          )}
          {InputText(
            firstnameChange,
            'Firstname',
            'Firstname',
            true,
            'user-o',
            data.isValidNames,
            'Must be more than 4',
          )}
          {InputText(
            lastNameChange,
            'Lastname',
            'Lastname',
            true,
            'user-o',
            data.isValidNames,
            'Must be more than 4',
          )}
          {InputText(
            emailChange,
            'email',
            'Email',
            false,
            'mail',
            data.isValidEmail,
            'Must be valid email',
          )}
          {InputText(
            phoneChange,
            'phone',
            'e.g 2348134544773',
            false,
            'phone',
            data.isValidPhone,
            'Must be more 10 digit',
          )}

          {PasswordInput(
            handlePasswordChange,
            updateSecureTextEntry,
            data.secureTextEntry,
          )}
          {PasswordInput(
            handleConfirmPasswordChange,
            updateConfirmSecureTextEntry,
            data.confirm_secureTextEntry,
          )}

          <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
              By signing up you agree to our
            </Text>
            <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
              {' '}
              Terms of service
            </Text>
            <Text style={styles.color_textPrivate}> and</Text>
            <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
              {' '}
              Privacy policy
            </Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity style={styles.signIn} onPress={() => submit()}>
              <LinearGradient
                colors={['#08d4c4', '#01ab9d']}
                style={styles.signIn}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: '#fff',
                    },
                  ]}>
                  Submit
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            {/* <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={[
                styles.signIn,
                {
                  borderColor: '#009387',
                  borderWidth: 1,
                  marginTop: 15,
                },
              ]}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#009387',
                  },
                ]}>
                Sign In
              </Text>
            </TouchableOpacity> */}
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

SubmitLoanScreen.propTypes = {
  submitLoan: PropTypes.func.isRequired,
};

export default connect(
  null,
  {submitLoan},
)(SubmitLoanScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: Platform.OS === 'ios' ? 3 : 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  color_textPrivate: {
    color: 'grey',
  },
  errorMessage: {
    color: 'red',
    fontSize: 12,
  },
});
