import {useForm, SubmitHandler, Controller} from 'react-hook-form'
import { Text, View, TextInput, Dimensions, Button } from 'react-native';
import { ISignUp } from '@/constants/Types';
import { FormInput } from '@/components/FormInput';
import { useRouter } from 'expo-router';
import { styles } from '@/constants/Styles';

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function SignUp () {

    const{
        control,
        handleSubmit,
        formState:{errors, isDirty, isValid},
        watch
    } = useForm<ISignUp>()

    const onSubmit: SubmitHandler<ISignUp> = data => console.log(data);
    const pwdMatch = watch('password');
    const router = useRouter();

    return (
        <View>
            <View>
                <FormInput
                control={control}
                name='username'
                placeholder='username'
                rules={
                {required:'username is required'}
                }/>
            </View>

            <View>
                <FormInput
                control={control}
                name='email'
                placeholder='email'
                rules={{
                    required:'email is required',
                    pattern: {value: EMAIL_REGEX, message:'Email is invalid'},
                    maxLength:{value:15, message:'username should be maximum 15 char'}
                    }}/>
            </View>

            <View>
                <FormInput
                control={control}
                name='phoneNumber'
                placeholder='phone number'
                rules={{required:'phone number is required'}}/>
            </View>

            <View>
                <FormInput
                control={control}
                name='password'
                placeholder='password'
                rules={{
                    required:'password is required',
                    minLength:{value:4, message:'password should be minimum 4 char'}
                    }}/>
            </View>

            <View>
                <FormInput
                control={control}
                name='repeatPassword'
                placeholder='password'
                rules={{
                    required:'Field is empty!',
                    validate: (v:string) => v===pwdMatch? true: "Passwords don't match!"
                    }}/>
            </View>
            
            <View style={[{flexDirection:'row'}, {justifyContent:'center'}]}>
                <View style={{padding:10}}>
                    <Button title='Register' disabled = {!isDirty || isValid} onPress={handleSubmit(onSubmit)} />
                </View>
                <View style={styles.separator}/>
                <View style={{padding:10}}>
                    <Button title='LogIn' onPress={()=>router.push('/index')}/>
                </View>
            </View>
            
        </View>
    );
}