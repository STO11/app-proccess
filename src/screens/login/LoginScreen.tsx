import React from 'react';
//import {Text, TouchableOpacity} from 'react-native';
//import {Routes} from '../../navigation/routes';
import {Container, PaddingBottomArea, TextLogin} from '../../styles/login';
import {NavigationProp} from '@react-navigation/native';
import InputComponent from '../../components/inputComponents';
import ButtonComponent from '../../components/buttonComponents';
//
// ─── SCREEN LOGIN RENDER ────────────────────────────────────────────────────────
//

export interface Props
    extends NavigationProp<Record<string, object | undefined>> {
    routes: any;
    navigation: any;
}

const loginScreen: React.FC<Props> = ({}) => {
    // function goTo() {
    //     navigation.replace(Routes.TABS.name);
    // }
    return (
        <>
            <Container>
                <TextLogin>Login</TextLogin>
                <InputComponent placeholder="Usuário" bgColor={'white'} />
                <PaddingBottomArea padding={10} />
                <InputComponent placeholder="Senha" bgColor={'white'} />
                <PaddingBottomArea padding={20} />
                <ButtonComponent children="ENTRAR" />
            </Container>
        </>
    );
};

export default loginScreen;
