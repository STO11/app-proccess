import React from 'react';
import ItemsListComponent from '../../components/itemsListComponent';
import {Container} from '../../styles/details';
import {PaddingBottomArea} from '../../styles/general';
// import { Container } from './styles';

//
// ─── DETAILS SCREEN RENDER ───────────────────────────────────────────────────────
//

export interface Props {
    fontSizeText?: number;
}

const detailsScreen: React.FC<Props> = ({Props}: any) => {
    return (
        <Container>
            <ItemsListComponent
                {...Props}
                title="Cristiane Marcal de Arruda Candido x Aparedido Donizeti Rodrigues"
                fontSizeText={20}
                color={'black'}
                fontWeight={'400'}
            />
            <PaddingBottomArea padding={7} />
            <ItemsListComponent
                title="Número"
                fontSizeText={15}
                color={'grey'}
                fontWeight={'100'}
            />
            <PaddingBottomArea padding={2} />
            <ItemsListComponent
                title="475786869-34.2016.8.26.0650"
                fontSizeText={15}
                color={'black'}
                fontWeight={'300'}
            />
            <PaddingBottomArea padding={7} />
            <ItemsListComponent
                title="Cliente"
                fontSizeText={15}
                color={'grey'}
                fontWeight={'100'}
            />
            <PaddingBottomArea padding={2} />
            <ItemsListComponent
                title="Cristiane Marcal de Arruda Candido"
                fontSizeText={15}
                color={'black'}
                fontWeight={'300'}
            />
            <PaddingBottomArea padding={7} />
            <ItemsListComponent
                title="Parte"
                fontSizeText={15}
                color={'grey'}
                fontWeight={'100'}
            />
            <PaddingBottomArea padding={2} />
            <ItemsListComponent
                title="Requerente"
                fontSizeText={15}
                color={'black'}
                fontWeight={'300'}
            />
            <PaddingBottomArea padding={7} />
            <ItemsListComponent
                title="Fórum"
                fontSizeText={15}
                color={'grey'}
                fontWeight={'100'}
            />
            <PaddingBottomArea padding={2} />
            <ItemsListComponent
                title="2 Vara da Familina e Sucessões - Foro Central Cívil"
                fontSizeText={15}
                color={'black'}
                fontWeight={'300'}
            />

            <PaddingBottomArea padding={7} />
            <ItemsListComponent
                title="Valor"
                fontSizeText={15}
                color={'grey'}
                fontWeight={'100'}
            />
            <PaddingBottomArea padding={2} />
            <ItemsListComponent
                title="R$ 12.500,00"
                fontSizeText={15}
                color={'black'}
                fontWeight={'300'}
            />

            <PaddingBottomArea padding={7} />
            <ItemsListComponent
                title="Anexo"
                fontSizeText={15}
                color={'grey'}
                fontWeight={'100'}
            />
        </Container>
    );
};
export default detailsScreen;
