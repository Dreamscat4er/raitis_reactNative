import { Text, View, TextInput, Dimensions, Button } from 'react-native';
import { useState } from 'react';
import {styles} from '../constants/Styles';
import {useRouter} from 'expo-router';
import {useForm, SubmitHandler} from 'react-hook-form';
import { ILogIn } from '@/constants/Types';
import { FormInput } from '@/components/FormInput';


const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function App() {

  const {
    control,
    handleSubmit,
    formState:{isDirty, isValid}
  } = useForm<ILogIn>(
    {mode:'onChange'}
  )

  const onSubmit: SubmitHandler<ILogIn> = data => console.log(data);
  const router = useRouter();
  
    const {height, width} = Dimensions.get('screen');
    
    return(
        <View>
      <View style={[styles.container, {width : width}, {height : height}]}>
        <View style={{flex:1}}>
          <Text style={[styles.text]}>Welcome to Raitis!</Text>
        </View>
        <View style={[{alignContent:'center'}, {flex:4}]}>
          <FormInput
          control={control}
          name='email'
          placeholder='Enter your email'
          rules={{
            required:'email is required',
            pattern: {value: EMAIL_REGEX, message:'Email is invalid'},
            maxLength:{value:15, message:'username should be maximum 15 char'}
          }}
          />
          
          <FormInput
          control={control}
          name='password'
          placeholder='Enter your password'
          rules={{required:'password is required'}}
          />

          <View style={[{flexDirection:'row'}, {justifyContent:'center'}]}>
            <View style={{padding:10}}>
              <Button title='LogIn' onPress={handleSubmit(onSubmit)}/>
            </View>
            <View style={styles.separator}/>
            <View style={{padding:10}}>
              <Button title='SignUp' onPress={()=>router.push('/SignUp')}/>
            </View>
          </View>
          
        </View>
        <View style={{flex:1}}>

        </View>
      </View>
    </View>
    );
  
}


