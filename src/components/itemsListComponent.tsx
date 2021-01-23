import React from 'react';
import {GestureResponderEvent} from 'react-native';
import {ItemList, ItemListTextTitle} from '../styles/general';

// import { Container } from './styles';
export interface Props {
    fontSizeText?: number;
    color?: string;
    title: string;
    fontWeight?: string;
    onPress?: (event: GestureResponderEvent) => void;
}

const ItemsListComponent: React.FC<Props> = ({
    Props,
    title,
    fontSizeText,
    color,
    fontWeight,
    onPress,
}: any) => {
    return (
        <ItemList onPress={onPress}>
            <ItemListTextTitle
                {...Props}
                fontSizeText={fontSizeText}
                color={color}
                fontWeight={fontWeight}>
                {title}
            </ItemListTextTitle>
        </ItemList>
    );
};

export default ItemsListComponent;
