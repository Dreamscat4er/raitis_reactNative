    import { TextInput } from "react-native"
    import { styles } from "../constants/Styles"
    import React from "react"
    
    
    
    interface IInputProps {
        screenWidth:number,
        placeholder:string,
        callback: (text:string) => void
    }
    
    

    export const MyInput:React.FC<IInputProps> = ({screenWidth,placeholder, callback}) => {

        const handleChangeText = (text:string) => {
            callback(text);
        }
        return(        
            <TextInput style={[styles.input, 
            {width:screenWidth*0.8}]} 
            placeholder={placeholder}
            onChangeText={handleChangeText}
             />
            )

    }