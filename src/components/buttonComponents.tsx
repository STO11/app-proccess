import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {Button, ButtonText} from '../styles/general';

export interface Props extends TouchableOpacityProps {
    children: string;
}

const ButtonComponent: React.FC<Props> = ({Props, children}: any) => {
    return (
        <Button {...Props}>
            <ButtonText>{children}</ButtonText>
        </Button>
    );
};

export default ButtonComponent;
