/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
//import {Text, TouchableOpacity} from 'react-native';
//import {Routes} from '../../navigation/routes';
import {Container, TextLogin, TextMessageError} from '../../styles/login';
import {NavigationProp} from '@react-navigation/native';
import InputComponent from '../../components/inputComponent';
import ButtonComponent from '../../components/buttonComponent';
import {Routes} from '../../navigation/routes';
import {PaddingBottomArea} from '../../styles/general';
import {LoginController} from '../../controllers/LoginController';
//
// ─── SCREEN LOGIN RENDER ────────────────────────────────────────────────────────
//

export interface Props
    extends NavigationProp<Record<string, object | undefined>> {
    routes: any;
    navigation: any;
}

const loginScreen: React.FC<Props> = ({navigation}: any) => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const login = async () => {
        if (user.length < 1 || password.length < 1) {
            setErrorMessage('Campos usuário e senha são obrigatórios!');
            return false;
        }
        let response = await LoginController.login(user, password);
        if (response) {
            goTo();
        } else {
            setErrorMessage('Login inválido!');
        }
    };

    const goTo = () => {
        navigation.replace(Routes.TABS.name);
    };

    return (
        <Container>
            <TextLogin>Login</TextLogin>
            <InputComponent
                autoCapitalize="none"
                placeholder="Usuário"
                bgColor={'white'}
                value={user}
                onChangeText={(v: any) => setUser(v)}
            />
            <PaddingBottomArea padding={10} />
            <InputComponent
                autoCapitalize="none"
                placeholder="Senha"
                secureTextEntry={true}
                bgColor={'white'}
                value={password}
                onChangeText={(v: any) => setPassword(v)}
            />
            <PaddingBottomArea padding={10} />
            <TextMessageError>{errorMessage}</TextMessageError>
            <PaddingBottomArea padding={10} />
            <ButtonComponent
                width="100%"
                height="50px"
                children="ENTRAR"
                paddingArea="0px"
                fontsize={20}
                onPress={() => login()}
            />
        </Container>
    );
};

export default loginScreen;
