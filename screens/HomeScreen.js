import React, {useEffect} from 'react';
import {View, Text, Button, StyleSheet, StatusBar} from 'react-native';

import {
  TouchableOpacity,
  TextInput,
  Platform,
  Dimensions,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {useTheme, configureFonts} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';

const userLoans = [
  {
    id: 1,
    reference_number: 345,
    expiry_date: '24/06/2012',
    balance: 456,
    loan_amount: 567,
  },
  {
    id: 2,
    reference_number: 345,
    expiry_date: '24/06/2012',
    balance: 456,
    loan_amount: 567,
  },
  {
    id: 3,
    reference_number: 345,
    expiry_date: '24/06/2012',
    balance: 456,
    loan_amount: 567,
  },
  {
    id: 3,
    reference_number: 345,
    expiry_date: '24/06/2012',
    balance: 456,
    loan_amount: 567,
  },
  {
    id: 3,
    reference_number: 345,
    expiry_date: '24/06/2012',
    balance: 456,
    loan_amount: 567,
  },
  {
    id: 4,
    reference_number: 345,
    expiry_date: '24/06/2012',
    balance: 456,
    loan_amount: 567,
  },
  {
    id: 5,
    reference_number: 345,
    expiry_date: '24/06/2012',
    balance: 456,
    loan_amount: 567,
  },
];

const HomeScreen = ({navigation, income}) => {
  const {colors} = useTheme();

  const theme = useTheme();

  const [data, setData] = React.useState({
    amount: 0,
    isValidInput: false,
  });

  useEffect(() => {
    mapData();
  }, []);

  const mapData = () => {
    {
    }
  };

  const textInputChange = val => {
    if (isNaN(val) === false && val.length > 1) {
      console.log(typeof val);
      setData({
        ...data,
        amount: val,
        isValidInput: false,
      });
    } else {
      console.log('not Valid');
      setData({
        ...data,
        isValidInput: !data.isValidInput,
      });
    }
  };

  const loginHandle = amount => {
    console.log(amount);
    // perform some async fucntion
    navigation.navigate('Worth');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <View style={styles.header}>
        <View style={styles.incomeContainer}>
          <Text style={styles.text_header}>{income}</Text>
        </View>
        <View style={styles.btns}>
          <View style={styles.incomeContainer2}>
            <Text style={styles.text_btns}>Add Guarantor</Text>
          </View>
          <View style={styles.incomeContainer2}>
            <Text style={styles.text_btns}>Request Loan</Text>
          </View>
        </View>
      </View>
      <View style={styles.listView}>
        <ScrollView>
          <View style={styles.loanContainerHeader}>
            <View style={styles.refContaner}>
              <Text style={styles.smallText}>#ref</Text>
            </View>
            <View style={styles.expiryDate}>
              <Text style={styles.smallText}>ExpiryDate</Text>
            </View>
            <View style={styles.loan}>
              <Text style={styles.smallText}>Loan</Text>
            </View>
            <View style={styles.balance}>
              <Text style={styles.smallText}>Balance</Text>
            </View>
          </View>
          {userLoans.map(el => {
            return (
              <View style={styles.loanContainer}>
                <View style={styles.refContaner}>
                  <Text style={styles.smallText}>{el.reference_number}</Text>
                </View>
                <View style={styles.expiryDate}>
                  <Text style={styles.smallText}>{el.expiry_date}</Text>
                </View>
                <View style={styles.loan}>
                  <Text style={styles.smallText}>{el.loan_amount}</Text>
                </View>
                <View style={styles.balance}>
                  <Text style={styles.smallText}>{el.balance}</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    income: state.income,
  };
};

HomeScreen.propTypes = {
  income: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(HomeScreen);

const {height, width} = Dimensions.get('screen');
const height_textInput = height * 0.06;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    position: 'relative',
    height: height,
    width: width,
  },
  header: {
    height: height * 0.25,
    width: width * 0.8,
    left: width * 0.1,
    top: height * 0.05,
    borderWidth: 2,
    borderColor: '#009387',
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingBottom: 50,
    position: 'absolute',
    display: 'flex',
  },
  incomeContainer: {
    height: height * 0.07,
    width: width * 0.7,
    left: 2,
    top: 30,
    borderWidth: 0.5,
    borderColor: '#009387',
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btns: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  incomeContainer2: {
    height: height * 0.07,
    width: width * 0.3,
    top: 70,
    borderWidth: 0.5,
    backgroundColor: '#009387',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listView: {
    position: 'absolute',
    height: height * 0.4,
    width: width * 0.85,
    borderWidth: 0.5,
    borderColor: '#009387',
    top: height * 0.35,
    left: 35,
    borderRadius: 10,
    bottom: 50,
    display: 'flex',
  },
  loanContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: '#009387',
    borderBottomWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: 80,
  },
  loanContainerHeader: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: '#009387',
    borderBottomWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: 50,
  },
  refContaner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  expiryDate: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loan: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  balance: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
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
    fontWeight: 'bold',
    fontSize: 30,
    color: '#009387',
  },
  text_btns: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#fff',
  },
  text_footer: {
    color: '#05375a',
    fontSize: 25,
    height: 50,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#009387',
    paddingBottom: 5,
    height: height_textInput,
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
});
