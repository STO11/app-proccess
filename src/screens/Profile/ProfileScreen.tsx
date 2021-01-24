import React, {useState, useEffect} from 'react';
import ButtonComponent from '../../components/buttonComponent';
import {LoginController} from '../../controllers/LoginController';
import {Routes} from '../../navigation/routes';
import {PaddingBottomArea} from '../../styles/general';
import {Container, TextTitle} from '../../styles/profiles';

const ProfileScreen: React.FC = ({navigation}: any) => {
    const [email, setEmail] = useState('');

    const logout = async () => {
        let response = await LoginController.logout();
        if (response) {
            navigation.replace(Routes.LOGINOFFLINE.name);
        }
    };

    useEffect(() => {
        const userInfo = async () => {
            let user = await LoginController.getUser();
            if (user) {
                setEmail(user.user);
            }
        };
        userInfo();
    }, []);

    return (
        <Container>
            <TextTitle fontSizeText={40}>Usuário</TextTitle>
            <PaddingBottomArea padding={10} />
            <TextTitle fontSizeText={20}>{email}</TextTitle>
            <PaddingBottomArea padding={50} />
            <ButtonComponent
                width={'100%'}
                height={'50px'}
                fontsize={20}
                children={'SAIR'}
                paddingArea="0px"
                onPress={() => logout()}
            />
        </Container>
    );
};

export default ProfileScreen;
