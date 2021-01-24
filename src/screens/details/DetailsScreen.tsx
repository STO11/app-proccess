import React from 'react';
import ButtonComponent from '../../components/buttonComponent';
import ItemsListComponent from '../../components/itemsListComponent';
import {
    ButtonOrderBy,
    Container,
    TextButtonOrderBy,
    ViewAnexo,
    ViewHeaderHistory,
} from '../../styles/details';
import {PaddingBottomArea} from '../../styles/general';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HistoryComponent from '../../components/historyComponent';
import Historical from '../../models/Historical';

//
// ─── DETAILS SCREEN RENDER ───────────────────────────────────────────────────────
//

export interface Props {
    fontSizeText?: number;
}

const detailsScreen: React.FC<Props> = ({Props, route}: any) => {
    const {item} = route.params;

    return (
        <Container>
            <ItemsListComponent
                letterSpacing={0}
                {...Props}
                //title="Cristiane Marcal de Arruda Candido x Aparedido Donizeti Rodrigues"
                title={item.title}
                fontSizeText={20}
                color={'black'}
                fontWeight={'400'}
            />
            <PaddingBottomArea padding={7} />
            <ItemsListComponent
                letterSpacing={0}
                title="Número"
                fontSizeText={15}
                color={'grey'}
                fontWeight={'100'}
            />
            <PaddingBottomArea padding={2} />
            <ItemsListComponent
                letterSpacing={0}
                title={item.number}
                fontSizeText={15}
                color={'black'}
                fontWeight={'300'}
            />
            <PaddingBottomArea padding={7} />
            <ItemsListComponent
                letterSpacing={0}
                title="Cliente"
                fontSizeText={15}
                color={'grey'}
                fontWeight={'100'}
            />
            <PaddingBottomArea padding={2} />
            <ItemsListComponent
                letterSpacing={0}
                title={item?.customers[0].name ?? item.customers[0].name}
                fontSizeText={15}
                color={'black'}
                fontWeight={'300'}
            />
            <PaddingBottomArea padding={7} />
            <ItemsListComponent
                letterSpacing={0}
                title="Parte"
                fontSizeText={15}
                color={'grey'}
                fontWeight={'100'}
            />
            <PaddingBottomArea padding={2} />
            <ItemsListComponent
                letterSpacing={0}
                title={
                    item?.customers[0].roleName ?? item.customers[0].roleName
                }
                fontSizeText={15}
                color={'black'}
                fontWeight={'300'}
            />

            <PaddingBottomArea padding={7} />
            <ItemsListComponent
                letterSpacing={0}
                title="Fórum"
                fontSizeText={15}
                color={'grey'}
                fontWeight={'100'}
            />
            <PaddingBottomArea padding={2} />
            <ItemsListComponent
                letterSpacing={0}
                title={item.court}
                fontSizeText={15}
                color={'black'}
                fontWeight={'300'}
            />

            <PaddingBottomArea padding={7} />
            <ItemsListComponent
                letterSpacing={0}
                title="Valor"
                fontSizeText={15}
                color={'grey'}
                fontWeight={'100'}
            />
            <PaddingBottomArea padding={2} />
            <ItemsListComponent
                letterSpacing={0}
                title={'R$ ' + item.amount}
                fontSizeText={15}
                color={'black'}
                fontWeight={'300'}
            />

            <PaddingBottomArea padding={7} />
            <ItemsListComponent
                letterSpacing={0}
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
            <PaddingBottomArea padding={30} />
            <ViewHeaderHistory>
                <ItemsListComponent
                    title="HISTÓRICO"
                    fontSizeText={16}
                    color={'black'}
                    fontWeight={'400'}
                    letterSpacing={3}
                />
                <ButtonOrderBy>
                    <TextButtonOrderBy>Ordernar por data</TextButtonOrderBy>
                    <Icon
                        name={'menu-down'}
                        size={25}
                        style={{paddingLeft: 15}}
                    />
                    <Icon
                        name={'sort-ascending'}
                        size={25}
                        style={{paddingLeft: 15}}
                    />
                </ButtonOrderBy>
            </ViewHeaderHistory>
            <PaddingBottomArea padding={10} />
            {item.historicals.length > 0 &&
                item.historicals.map((historical: Historical) => {
                    return (
                        <HistoryComponent
                            description={historical.description}
                            year={'2021'}
                            month={'Abril'}
                        />
                    );
                })}
        </Container>
    );
};
export default detailsScreen;
