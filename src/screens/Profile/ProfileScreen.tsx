import React from 'react';
import ButtonComponent from '../../components/buttonComponent';
import {PaddingBottomArea} from '../../styles/general';
import {Container, TextTitle} from '../../styles/profile';

// import { Container } from './styles';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const profileScreen: React.FC = ({navigation}: any) => {
    return (
        <Container>
            <TextTitle fontSizeText={40}>Usuário</TextTitle>
            <PaddingBottomArea padding={10} />
            <TextTitle fontSizeText={20}>
                candidato_mobile@aurum.com.br
            </TextTitle>
            <PaddingBottomArea padding={50} />
            <ButtonComponent children={'SAIR'} onPress={() => null} />
        </Container>
    );
};

export default profileScreen;
