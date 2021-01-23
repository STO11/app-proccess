import React from 'react';
import {ItemList, ItemListTextTitle} from '../styles/general';

// import { Container } from './styles';
export interface Props {
    fontSizeText?: number;
    color?: string;
    title: string;
    fontWeight: string;
}

const ItemsListComponent: React.FC<Props> = ({
    Props,
    title,
    fontSizeText,
    color,
    fontWeight,
}: any) => {
    return (
        <ItemList>
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
