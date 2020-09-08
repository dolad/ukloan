import React from 'react';
import {View, Text, Button, StyleSheet, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {
  TouchableOpacity,
  TextInput,
  Platform,
  Dimensions,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

import {useTheme} from 'react-native-paper';

const Colors = {
  greenButton: '#009387',
  redButtom: '#d62828',
  redButtomTransparent: '#f3722c',
  background: '#009387',
  footerColor: '#fff',
};

const WorthScreen = ({navigation, income}) => {
  const {colors} = useTheme();
  console.log(income);
  // const income = navigation.getParam('income');
  // console.log(income);
  const theme = useTheme();

  const acceptLoan = () => {
    console.log('i am responsive');
    navigation.navigate('SubmitLoan');
    // perform some async fucntion
  };
  const rejectLoan = () => {
    navigation.goBack();
    // perform some async fucntion
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <View style={styles.header}>
        <Text style={styles.text_header}>Your Loan Worth</Text>
      </View>

      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: Colors.footerColor,
          },
        ]}>
        <Text
          style={[
            styles.text_footer,
            {
              color: colors.text,
            },
          ]}>
          Your Worth
        </Text>
        <LinearGradient
          colors={['#08d4c4', Colors.greenButton]}
          style={styles.action}>
          <View>
            <Text
              style={[
                styles.text_worth,
                {
                  color: 'white',
                },
              ]}>
              {income}
            </Text>
          </View>
        </LinearGradient>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => {
              acceptLoan();
            }}>
            <LinearGradient
              colors={['#08d4c4', Colors.greenButton]}
              style={styles.signIn}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#fff',
                  },
                ]}>
                Accept
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => {
              rejectLoan();
            }}>
            <LinearGradient
              colors={[Colors.redButtomTransparent, Colors.redButtom]}
              style={styles.signIn}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#fff',
                  },
                ]}>
                Decline
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

const mapStateToProps = state => ({
  income: state.income,
});

WorthScreen.propTypes = {
  income: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  null,
)(WorthScreen);

const {height, width} = Dimensions.get('screen');
const height_textInput = height * 0.06;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
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
    fontSize: 25,
    height: 50,
  },
  text_worth: {
    color: 'white',
    fontSize: 30,
    height: 50,
  },
  action: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#fff',
    paddingBottom: 5,
    height: height_textInput * 1.6,
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
    height: 80,
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
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
