import request from '../request/request';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export const getWorth = (val, navigation) => async dispatch => {
  //   const route = 'loan/worthy';
  const data = {
    income: val,
  };
  try {
    await axios
      .post('http://ukdion-loan-app.herokuapp.com/api/loan/worthy', data)
      .then(res => {
        console.log(res.data.amount);
        AsyncStorage.setItem('income', res.data.amount);
        // dispatch({type: 'IS_LOADING'});
        dispatch({type: 'IS_INCOME', payload: res.data.amount});
        dispatch({type: 'IS_SUCCESS'});
        navigation.navigate('Worth');
      });
  } catch (err) {
    console.log(err);
  }
};

export const submitLoan = (details, navigation) => async dispatch => {
  try {
    await axios
      .post('http://ukdion-loan-app.herokuapp.com/api/auth/register', details)
      .then(res => {
        console.log(res.data);
        AsyncStorage.setItem('first_user', 'No');
        dispatch({type: 'IS_SUCCESS'});
        navigation.navigate('PhoneVerificationScreen');
      });
  } catch (error) {
    console.log(error);
  }
};

export const login = details => async dispatch => {
  try {
    await axios
      .post('http://ukdion-loan-app.herokuapp.com/api/auth/login', details)
      .then(res => {
        console.log(res.data);
        AsyncStorage.setItem('USERS', JSON.stringify(res.data.user));
        // dispatch({type: 'IS_LOADING'});
        dispatch({type: 'AUTH_USER', payload: res.data.user});
        dispatch({type: 'IS_SUCCESS'});
      });
  } catch (error) {
    console.log(error.errors);
  }
};

export const logOut = navigation => async dispatch => {
  try {
    await AsyncStorage.removeItem('USERS');
    await AsyncStorage.removeItem('first_user');
    dispatch({type: 'LOG_OUT'});
  } catch (error) {
    console.log(error.errors);
  }
};

// const authContext = React.useMemo(() => ({
//   signIn: async(foundUser) => {
//     // setUserToken('fgkj');
//     // setIsLoading(false);
//     const userToken = String(foundUser[0].userToken);
//     const userName = foundUser[0].username;

//     try {
//       await AsyncStorage.setItem('userToken', userToken);
//     } catch(e) {
//       console.log(e);
//     }
//     // console.log('user token: ', userToken);
//     dispatch({ type: 'LOGIN', id: userName, token: userToken });
//   },
//   signOut: async() => {
//     // setUserToken(null);
//     // setIsLoading(false);
//     try {
//       await AsyncStorage.removeItem('userToken');
//     } catch(e) {
//       console.log(e);
//     }
//     dispatch({ type: 'LOGOUT' });
//   },
//   signUp: () => {
//     // setUserToken('fgkj');
//     // setIsLoading(false);
//   },
//   toggleTheme: () => {
//     setIsDarkTheme( isDarkTheme => !isDarkTheme );
//   }
// }), []);

// useEffect(() => {
//   setTimeout(async() => {
//     // setIsLoading(false);
//     let userToken;
//     userToken = null;
//     try {
//       userToken = await AsyncStorage.getItem('userToken');
//     } catch(e) {
//       console.log(e);
//     }
//     // console.log('user token: ', userToken);
//     dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
//   }, 1000);
// }, []);

// if( loginState.isLoading ) {
//   return(
//     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//       <ActivityIndicator size="large"/>
//     </View>
//   );
// }
