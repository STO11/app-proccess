import React from 'react';
import {GestureResponderEvent, TouchableOpacityProps} from 'react-native';
import {Button, ButtonText} from '../styles/general';

export interface Props extends TouchableOpacityProps {
    children: string;
    onPress: (event: GestureResponderEvent) => void;
}

const ButtonComponent: React.FC<Props> = ({Props, children, onPress}: any) => {
    return (
        <Button {...Props} onPress={onPress}>
            <ButtonText>{children}</ButtonText>
        </Button>
    );
};

export default ButtonComponent;
