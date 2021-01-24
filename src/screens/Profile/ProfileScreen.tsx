import React from 'react';
import ButtonComponent from '../../components/buttonComponent';
import {PaddingBottomArea} from '../../styles/general';
import {Container, TextTitle} from '../../styles/profiles';

// import { Container } from './styles';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProfileScreen: React.FC = ({navigation}: any) => {
    return (
        <Container>
            <TextTitle fontSizeText={40}>Usuário</TextTitle>
            <PaddingBottomArea padding={10} />
            <TextTitle fontSizeText={20}>
                candidato_mobile@aurum.com.br
            </TextTitle>
            <PaddingBottomArea padding={50} />
            <ButtonComponent
                width={'100%'}
                height={'50px'}
                fontsize={20}
                children={'SAIR'}
                paddingArea="0px"
                onPress={() => null}
            />
        </Container>
    );
};

export default ProfileScreen;
