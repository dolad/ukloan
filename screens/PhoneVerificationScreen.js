import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const PhoneVerificationScreen = ({navigation}) => {
  let secondInput, thirdInput, fourthInput;
  let [state, setState] = useState({
    0: '',
    1: '',
    2: '',
    3: '',
  });
  const handleChange = (text, id) => {
    setState({...state, [id]: text});
    if (text == '') {
      return;
    }
    switch (id) {
      case 0:
        secondInput.focus();
        break;
      case 2:
        thirdInput.focus();
        break;
      case 3:
        fourthInput.focus();
        break;
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.info}>
        Please enter the verification code we sent to your mobile **56
      </Text>
      <View style={styles.TextContainer}>
        <TextInput
          style={styles.textInput}
          value={state.one}
          keyboardType="numeric"
          autoCapitalize="none"
          onChangeText={text => {
            handleChange(text, 0);
          }}
          maxLength={1}
        />
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          keyboardType="numeric"
          value={state.two}
          ref={input => {
            secondInput = input;
          }}
          onChangeText={text => {
            handleChange(text, 1);
          }}
          blurOnSubmit={false}
          maxLength={1}
        />
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          keyboardType="numeric"
          value={state.three}
          ref={input => {
            thirdInput = input;
          }}
          onChangeText={text => {
            handleChange(text, 2);
          }}
          maxLength={1}
        />
        <TextInput
          style={styles.textInput}
          keyboardType="numeric"
          autoCapitalize="none"
          value={state.four}
          ref={input => {
            fourthInput = input;
          }}
          onChangeText={text => {
            handleChange(text, 3);
          }}
          maxLength={1}
        />
      </View>
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.navigate('SignInScreen')}>
        <Text>Verify Account</Text>
      </TouchableOpacity>

      <Text style={styles.textDidNOt}>I didn't receive a code!</Text>
      {/* <Button
        title="Resend"
        color="#009387"
        onPress={() => alert('Button Clicked!')}
      /> */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btn}>
        <Text style={styles.btnText}>Resend</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PhoneVerificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  header: {
    marginTop: 45,
    padding: 10,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 10,
    color: '#009387',
    fontSize: 21,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 147, 135, 0.5)',
    position: 'absolute',
    top: '40%',
  },
  info: {
    color: '#303030',
    marginTop: 16,
    fontSize: 18,
    padding: 20,
    textAlign: 'center',
  },
  btn: {
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    // backgroundColor: 'rgba(0, 147, 135, 0.5)',
  },
  btnText: {
    color: '#009387',
    fontWeight: '500',
  },
  TextContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    marginTop: 25,
    // marginBottom: 40,
  },
  textDidNOt: {
    color: '#303030',
    fontSize: 16,
  },
  textInput: {
    width: 50,
    borderRadius: 5,
    padding: 5,
    color: '#303030',
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    height: 50,
    borderWidth: 1,
    borderColor: '#b7b7b7',
  },
});
