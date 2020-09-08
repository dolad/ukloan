import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Dimensions,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {getWorth} from '../actions/action';
import {useTheme, configureFonts} from 'react-native-paper';
import {connect} from 'react-redux';

import PropTypes from 'prop-types';

import Users from '../model/users';
import {cos} from 'react-native-reanimated';

const Colors = {
  greenButton: '#009387',
  redButtom: '#d62828',
  redButtomTransparent: '#f3722c',
  background: '#009387',
  footerColor: '#fff',
};

const Income = ({navigation, getWorth}) => {
  const [amount, setAmount] = React.useState(0);

  const {colors} = useTheme();

  const isValidUser = val => {
    if (val.trim().length >= 1 && isNaN(val) === false) {
      setAmount(val);
    } else {
      console.log('isInvalid');
      //   dispatch an error
    }
  };

  const submitIncome = () => {
    getWorth(amount, navigation);
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
          keyboardType="numeric"
          onChangeText={val => inputChange(val)}
        />
      </View>
    </>
  );

  const Buttons = () => (
    <TouchableOpacity
      style={styles.signIn}
      onPress={() => {
        submitIncome();
      }}>
      <LinearGradient
        colors={[Colors.background, Colors.greenButton]}
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
  );

  //   const loginHandle = (userName, password) => {
  //     const foundUser = Users.filter(item => {
  //       return userName == item.username && password == item.password;
  //     });

  //     if (data.username.length == 0 || data.password.length == 0) {
  //       Alert.alert(
  //         'Wrong Input!',
  //         'Username or password field cannot be empty.',
  //         [{text: 'Okay'}],
  //       );
  //       return;
  //     }

  //     if (foundUser.length == 0) {
  //       Alert.alert('Invalid User!', 'Username or password is incorrect.', [
  //         {text: 'Okay'},
  //       ]);
  //       return;
  //     }
  //   };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Plaease Tell us your Income</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
          },
        ]}>
        {InputText(isValidUser, 'Income', 'income', true, 'money')}
        <View style={{paddingLeft: 100, paddingTop: 100}}>{Buttons()}</View>
      </Animatable.View>
    </View>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    income: state,
  };
};

Income.propTypes = {
  getWorth: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  {getWorth},
)(Income);

const {height, width} = Dimensions.get('screen');

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
    flex: 3,
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
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: width * 0.4,
    height: 50,
    justifyContent: 'center',
    marginHorizontal: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
