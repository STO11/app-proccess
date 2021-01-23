import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Container} from '../../styles/details';
// import { Container } from './styles';

//
// ─── DETAILS SCREEN RENDER ───────────────────────────────────────────────────────
//
const detailsScreen: React.FC = () => {
    return (
        <Container>
            <SafeAreaView>
                <Text>Ola tudo bem</Text>
            </SafeAreaView>
        </Container>
    );
};
export default detailsScreen;
