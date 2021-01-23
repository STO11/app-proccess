import styled from 'styled-components/native';
import {Props} from '../../screens/details/DetailsScreen';

export const Container = styled.View`
    background-color: white;
    padding-right: 30px;
    padding-left: 30px;
    padding-top: 30px;
    padding-bottom: 3px;
    flex: 1;
`;

export const TextTitle = styled.Text<Props>`
    font-size: ${(props) => props.fontSizeText}px;
    font-weight: 500;
    font-family: Roboto-Light;
`;
