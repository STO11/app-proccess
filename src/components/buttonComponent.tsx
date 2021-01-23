import React from 'react';
import {GestureResponderEvent} from 'react-native';
import {Button, ButtonText} from '../styles/general';

export interface Props {
    children?: string;
    onPress: (event: GestureResponderEvent) => void;
    fontsize?: number;
    width?: string;
    height?: string;
    paddingArea?: string;
}

const ButtonComponent: React.FC<Props> = ({
    Props,
    children,
    onPress,
    fontsize,
    width,
    height,
    paddingArea,
}: any) => {
    return (
        <Button {...Props} onPress={onPress} width={width} height={height}>
            <ButtonText
                {...Props}
                fontsize={fontsize}
                paddingArea={paddingArea}>
                {children}
            </ButtonText>
        </Button>
    );
};

export default ButtonComponent;
