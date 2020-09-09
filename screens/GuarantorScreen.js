import * as React from 'react';
import {TextInput, Text, useTheme, Button} from 'react-native-paper';
// eslint-disable-next-line prettier/prettier
import {
  Dimensions,
  View,
  StatusBar,
  StyleSheet,
  ScrollView,
} from 'react-native';

const GuarantorScreen = ({navigation}) => {
  const {colors} = useTheme();
  const theme = useTheme();
  const [data, setData] = React.useState({
    email: '',
    title: '',
    first_name: '',
    last_name: '',
    phone_number: '',
    relationship: '',
    occupation: '',
    home_address: '',
    office_address: '',
    religion: '',
    nationality: '',
    state_of_origin: '',
    local_government: '',
  });

  const manageState = (name, val) => {
    setData({
      ...data,
      [name]: val,
    });
  };

  const FormTemp = (formValue, formLabel, formName) => {
    return (
      <TextInput
        label={formLabel}
        value={formValue}
        mode="outlined"
        onChangeText={formValue => manageState(formName, formValue)}
        style={styles.formField}
      />
    );
  };
  const saveGuarantor = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#fff"
        barStyle={theme.dark ? 'light-content' : 'dark-content'}
      />
      <View style={styles.header} />
      <View style={styles.sendButton}>
        <Button
          icon="content-save-all-outline"
          mode="outlined"
          onPress={() => saveGuarantor()}>
          Go back
        </Button>
      </View>
      <ScrollView style={styles.guarantor}>
        <View style={styles.fieldSet}>
          <Text>Guarantor Personal Information</Text>
          {FormTemp(data.title, 'Title', 'title')}
          {FormTemp(data.first_name, 'First Name', 'first_name')}
          {FormTemp(data.last_name, 'Last Name', 'last_name')}
          {FormTemp(data.phone_number, 'Mobile Number', 'phone_number')}
        </View>
        <View style={styles.fieldSet}>
          <Text>Guarantor Contact Details</Text>
          {FormTemp(data.relationship, 'Relationship', 'relationship')}
          {FormTemp(data.occupation, 'Occupation', 'occupation')}
          {FormTemp(data.home_address, 'Address', 'home_address')}
          {FormTemp(data.office_address, 'Office Address', 'office_address')}
          {FormTemp(data.religion, 'Religion', 'religion')}
        </View>
        <View style={styles.fieldSet}>
          {FormTemp(data.nationality, 'Religion', 'nationality')}
          {FormTemp(
            data.state_of_origin,
            'State Of Nigeria',
            'state_of_origin',
          )}
          {FormTemp(
            data.local_government,
            'Local Government',
            'local_government',
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default GuarantorScreen;
const {height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sendButton: {
    // flex: 1,
    // justifyContent: 'center',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  text_header: {
    color: '#4EC5F1',
    fontSize: 18,
  },
  guarantor: {
    marginTop: 12,
    paddingLeft: 12,
    paddingRight: 12,
  },
  fieldSet: {
    // borderWidth: 1,
    padding: 12,
    borderColor: '#b3b3b3',
    marginBottom: 15,
    borderRadius: 10,
    elevation: 2,
  },
  formField: {
    borderWidth: 0,
    borderColor: 'transparent',
  },
});
