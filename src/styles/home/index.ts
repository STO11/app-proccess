import styled from 'styled-components/native';
import {Props} from '../../screens/home/HomeScreen';

export const Container = styled.View`
    background-color: white;
    flex: 1;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 30px;
    padding-bottom: 5px;
    justify-content: center;
`;
export const Scroll = styled.ScrollView``;
/**
 * flex: 1;
 * padding-right: 20px;
    padding-left: 20px;
    padding-top: 30px;
    padding-bottom: 5px; */
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
