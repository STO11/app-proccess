import styled from 'styled-components/native';
import {Props} from '../../screens/home/HomeScreen';

export const Container = styled.View`
    background-color: white;
    padding-right: 30px;
    padding-left: 30px;
    padding-top: 30px;
    padding-bottom: 3px;
    flex: 1;
`;

export const TitleView = styled.View<Props>`
    flex-direction: row;
    margin-top: 60px;
    justify-content: space-between;
    align-items: flex-start;
`;

export const TextTitle = styled.Text<Props>`
    font-size: ${(props) => props.fontSizeText}px;
    font-weight: 600;
    font-family: Roboto-Light;
`;

//justify-content: center;
//align-items: center;
