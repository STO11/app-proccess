import React from 'react';
//import {TextInputProps} from 'react-native';
import {InputText} from '../styles/general';

// import { Container } from './styles';
export interface Props {
    // added extends TextInputProps and renamed interface
    mode?: 'flat' | 'outlined';
    disabled?: boolean;
    label?: string;
    placeholder?: string;
    error?: boolean;
    underlineColor?: string;
    multiline?: boolean;
    numberOfLines?: number;
    onFocus?: () => any;
    onBlur?: () => any;
    value?: string;
    style?: any;
    bgColor?: string;
    paddingBottom?: number;
    onChangeText: Function;
    autoCapitalize?: string;
    secureTextEntry?: boolean;
    width?: string;
    //theme?: ThemeShape;
}

const InputComponent: React.FC<Props> = ({
    Props,
    onChangeText,
    value,
    bgColor,
    placeholder,
    autoCapitalize,
    secureTextEntry,
    width,
}: any) => {
    return (
        <InputText
            {...Props}
            autoCapitalize={autoCapitalize}
            placeholder={placeholder}
            onChangeText={onChangeText}
            bgColor={bgColor}
            width={width}
            value={value}
            secureTextEntry={secureTextEntry}
        />
    );
};

export default InputComponent;
