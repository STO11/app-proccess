import styled from 'styled-components/native';
import {Props} from '../../screens/details/DetailsScreen';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    padding: 30px;
    background-colot white;
`;

export const TextTitle = styled.Text<Props>`
    font-size: ${(props) => props.fontSizeText}px;
    font-weight: 500;
    font-family: Roboto-Light;
`;
