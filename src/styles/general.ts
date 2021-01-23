import styled from 'styled-components/native';
import {colors} from '../styles/colors';
import {Props} from '../components/inputComponents';

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
    height: 40px;
    width: 100%;
    background-color: ${colors.primaryColor};
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled.Text`
    color: white;
`;
