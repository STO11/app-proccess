import React from 'react';
import ButtonComponent from '../../components/buttonComponent';
import ItemsListComponent from '../../components/itemsListComponent';
import {Container, ViewAnexo} from '../../styles/details';
import {PaddingBottomArea} from '../../styles/general';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HistoryComponent from '../../components/historyComponent';

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
            <PaddingBottomArea padding={2} />
            <ViewAnexo>
                <ButtonComponent
                    width={'70%'}
                    height={'40px'}
                    fontsize={15}
                    paddingArea="5px"
                    children={'NomeDoAnexoMax20Car.pdf'}
                    onPress={() => null}
                />
                <Icon name={'close'} size={25} style={{paddingLeft: 15}} />
            </ViewAnexo>
            <PaddingBottomArea padding={10} />
            <HistoryComponent />
            <HistoryComponent />
            <HistoryComponent />
            <HistoryComponent />
            <HistoryComponent />
        </Container>
    );
};
export default detailsScreen;
