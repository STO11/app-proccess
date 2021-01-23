import React from 'react';
import {TextInputProps} from 'react-native';
import {InputText} from '../styles/general';

// import { Container } from './styles';
export interface Props extends TextInputProps {
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
    //theme?: ThemeShape;
}

const InputComponent: React.FC<Props> = (Props) => {
    return (
        <InputText
            placeholder="Type here to translate!"
            {...Props}
            onChangeText={() => null}
            value=""
        />
    );
};

export default InputComponent;
