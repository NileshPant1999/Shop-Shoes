import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput as RNTextInput } from 'react-native';
import { Box, theme } from '../../../components/Theme'
import { Feather as Icon } from "@expo/vector-icons";

interface TextInputProps {
    placeholder: string;
    icon: string;
    validator: boolean;
}

const SIZE = theme.borderRadii.m * 2;
const Valid = true;
const Invalid = false;
const Pristine = null;


type InputState = typeof Valid | typeof Invalid | typeof Pristine

const TextInput = ({icon, validator, ...props }: TextInputProps) => {
    const [text, setText] = useState("");
    const [state, setState] = useState<InputState>(Pristine);

    const validate = () => {
        const valid = validator;
        setState(valid);
    } 

    const onChangeText= (text: string) => {
        setText(text);
        if (state !== Pristine){
            validate();
        }
    };


    const recolor: keyof typeof theme.colors = state === Pristine ? "darkGrey" : state === Valid ? "primary" : "danger"

    const color = theme.colors[recolor];

    return (
        <Box 
            flexDirection="row" 
            height={48} 
            borderRadius="s" 
            alignItems="center"
            borderWidth={StyleSheet.hairlineWidth}
            borderColor={recolor}
            padding="s"
        >
            <Box padding="s">
               <Icon name={icon} size={16} { ... { color }} />
            </Box>
            <RNTextInput 
                underlineColorAndroid="tranparent" 
                placeholderTextColor={color}
                onBlur={validate}
                {...{onChangeText}}
                {...props}
            />
            {
                (state === Valid || state === Invalid) && (
                    <Box height={SIZE} width={SIZE} borderRadius="m">
                        <Icon name={state === Valid ? 'check' : "x"} color="white" />
                    </Box>
                )
            }
        </Box>
    )
}

export default TextInput

const styles = StyleSheet.create({})
