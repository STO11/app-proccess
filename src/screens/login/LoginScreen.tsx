import React from 'react';
//import {Text, TouchableOpacity} from 'react-native';
//import {Routes} from '../../navigation/routes';
import {Container, TextLogin} from '../../styles/login';
import {NavigationProp} from '@react-navigation/native';
import InputComponent from '../../components/inputComponent';
import ButtonComponent from '../../components/buttonComponent';
import {Routes} from '../../navigation/routes';
import {PaddingBottomArea} from '../../styles/general';
//
// ─── SCREEN LOGIN RENDER ────────────────────────────────────────────────────────
//

export interface Props
    extends NavigationProp<Record<string, object | undefined>> {
    routes: any;
    navigation: any;
}

const loginScreen: React.FC<Props> = ({navigation}) => {
    function goTo() {
        navigation.replace(Routes.TABS.name);
    }
    return (
        <>
            <Container>
                <TextLogin>Login</TextLogin>
                <InputComponent placeholder="Usuário" bgColor={'white'} />
                <PaddingBottomArea padding={10} />
                <InputComponent placeholder="Senha" bgColor={'white'} />
                <PaddingBottomArea padding={20} />
                <ButtonComponent
                    width="100%"
                    height="50px"
                    children="ENTRAR"
                    paddingArea="0px"
                    fontsize={20}
                    onPress={() => goTo()}
                />
            </Container>
        </>
    );
};

export default loginScreen;
