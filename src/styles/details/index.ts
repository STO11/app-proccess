import styled from 'styled-components/native';
import {Props} from '../../screens/details/DetailsScreen';
import {colors} from '../colors';

export const Container = styled.ScrollView`
    background-color: white;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 3px;
    flex: 1;
`;

export const TextTitle = styled.Text<Props>`
    font-size: ${(props) => props.fontSizeText}px;
    font-weight: 500;
    font-family: Roboto-Light;
`;

export const ViewAnexo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ViewHistory = styled.View`
    flex: 1;
    padding-bottom: 40px;
`;

export const ItemsHistory = styled.View`
    flex-direction: row;
`;

export const NumberDay = styled.View`
    background-color: ${colors.primaryColor};
    padding: 10px;
    border-radius: 10px;
    width: 40px;
    justify-content: center;
    align-items: center;
    height: 40px;
`;

export const TextNumberDay = styled.Text`
    font-size: 15px;
    color: white;
    font-weight: bold;
`;
export const TextMonth = styled.Text`
    font-size: 14px;
    color: black;
    padding-left: 15px;
`;
export const TextYear = styled.Text`
    font-size: 10px;
    color: grey;
    padding-left: 15px;
`;

export const PaineHistory = styled.View`
    flex-direction: column;
    width: 85%;
`;
export const TextHistory = styled.Text`
    font-size: 14px;
    color: black;
    padding-left: 15px;
    text-align: justify;
    color: ${colors.textColor};
`;

export const ViewHeaderHistory = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const ButtonOrderBy = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`;
export const TextButtonOrderBy = styled.Text`
    font-size: 14px;
    color: ${colors.textColor};
`;
