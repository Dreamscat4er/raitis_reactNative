import {TextInput, View, Text, Dimensions} from 'react-native'
import { ISignUp } from '@/constants/Types';
import {useForm, SubmitHandler, Controller,Control, ValidationRule, InputValidationRules, RegisterOptions, FieldValues} from 'react-hook-form'
import { Path } from 'react-hook-form/dist/types/path';
import { styles } from '@/constants/Styles';




interface FormInputProps<T extends FieldValues> {//checks that type passed to a generic extends field values of the form the passing type is controlling
    control: Control<T>;//The Control type is a generic type provided by react-hook-form
    name: Path<T>;//name prop should be a key of the ISignUp or ILogin interface. Path creates a union of all keys of interfaces passed to a genetic type
    placeholder: string;
    rules?: RegisterOptions<T>
}


export const FormInput = <T extends FieldValues>({control, name, placeholder, rules={}}:FormInputProps<T>) => {

    const {height, width} = Dimensions.get('screen');
    
    return(
        <Controller
                control={control}
                name={name}
                rules={rules}
                render={({ field: {value, onChange, onBlur }, fieldState:{error} }) => (
                    <>
                        <View style={[styles.input, {borderColor: error? 'red' : styles.input.borderColor, width:width*0.8}]}>
                            <TextInput
                                placeholder={placeholder}
                                value={value}
                                onChangeText={onChange}
                                onBlur={onBlur}
                            />
                                                
                        </View>
                        {error && 
                        (<Text style={{color:'red', alignSelf:'stretch'}}>{error?.message || 'Error'}</Text>
                        )}
                    </>    
                    
                )}
            />
    );
};