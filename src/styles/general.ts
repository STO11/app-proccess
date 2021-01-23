import styled from 'styled-components/native';
import {colors} from '../styles/colors';
import {Props} from '../components/inputComponent';
import {Props as PropItemListText} from '../components/itemsListComponent';

export const InputText = styled.TextInput<Props>`
    height: 50px;
    width: 100%;
    border-width: 2px;
    border-radius: 10px;
    border-color: ${colors.inputBorder};
    padding: 15px;
    font-size: 20px;
    background-color: ${(props) => props.bgColor};
`;

export const Button = styled.TouchableOpacity`
    height: 50px;
    width: 100%;
    background-color: ${colors.primaryColor};
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled.Text`
    color: white;
`;

//
// ─── ITEMS COMPONENT LIST PROCCESS FIRST PAGE TAB ───────────────────────────────
//
export const ItemList = styled.View`
    background-color: white;
`;
export const ItemListTextTitle = styled.Text<PropItemListText>`
    font-size: ${(props) => props?.fontSizeText}px;
    font-family: Roboto-Light;
    color: ${(props) => props?.color};
    font-weight: ${(props) => props?.fontWeight};
    font-family: Roboto-Light;
`;

//
// ─── PADDIN BOTTOM AREA SCREEN ────────────────────────────────────────────
//
interface propPaddingBottomArea {
    padding: number;
}

export const PaddingBottomArea = styled.View<propPaddingBottomArea>`
    padding-bottom: ${(props) => props.padding}px;
`;
