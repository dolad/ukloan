import * as React from 'react';
import {TextInput, Text, useTheme, Button} from 'react-native-paper';
// eslint-disable-next-line prettier/prettier
import {Dimensions, View, StatusBar, StyleSheet, ScrollView} from 'react-native';

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
  const FormTemp = ({formValue, formLabel}) => {
    return (
      <TextInput
        label={formLabel}
        value={formValue}
        mode="outlined"
        onChangeText={formValue => setData(formValue)}
        style={styles.formField}
      />
    );
  };
  const saveGuarantor = () => {
    console.log(data);
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <View style={styles.header} />
      <View style={styles.sendButton}>
        <Button
          icon="content-save-all-outline"
          mode="outlined"
          onPress={() => saveGuarantor()}>
          Save
        </Button>
      </View>
      <ScrollView style={styles.guarantor}>
        <View style={styles.fieldSet}>
          <Text>Guarantor Personal Information</Text>
          <FormTemp formValue={data.title} formLabel={'Title'} />
          <FormTemp formValue={data.first_name} formLabel={'First Name'} />
          <FormTemp formValue={data.last_name} formLabel={'Last Name'} />
          <FormTemp formValue={data.phone_number} formLabel={'Mobile Number'} />
        </View>
        <View style={styles.fieldSet}>
          <Text>Guarantor Contact Details</Text>
          <FormTemp formValue={data.relationship} formLabel={'Relationship'} />
          <FormTemp formValue={data.occupation} formLabel={'Occupation'} />
          <FormTemp formValue={data.home_address} formLabel={'Address'} />
          <FormTemp
            formValue={data.office_address}
            formLabel={'Office Address'}
          />
          <FormTemp formValue={data.religion} formLabel={'Religion'} />
        </View>
        <View style={styles.fieldSet}>
          <FormTemp formValue={data.nationality} formLabel={'Nationality'} />
          <FormTemp
            formValue={data.state_of_origin}
            formLabel={'State Of Nigeria'}
          />
          <FormTemp
            formValue={data.local_government}
            formLabel={'Local Government'}
          />
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
