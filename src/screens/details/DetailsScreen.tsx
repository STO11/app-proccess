/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-native/no-inline-styles */
import React, {createRef, useEffect, useState} from 'react';
import ButtonComponent from '../../components/buttonComponent';
import ItemsListComponent from '../../components/itemsListComponent';
import {
    Container,
    ViewAnexo,
    ViewHeaderHistory,
    ButtonOrderBy,
    TextButtonOrderBy,
} from '../../styles/details';
import {
    PaddingBottomArea,
    StyleSheetTextItems,
    StyleSheetView,
    StyleSheetViewItems,
} from '../../styles/general';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HistoryComponent from '../../components/historyComponent';
import Historical from '../../models/Historical';
import {getDay, getMonth, getYear, OrderBy} from '../../utils/utils';
import {View} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import {colors} from '../../styles/colors';
import {Storage} from '../../services/storage';
import IconAttach from 'react-native-vector-icons/Ionicons';

//
// ─── DETAILS SCREEN RENDER ───────────────────────────────────────────────────────
//
const actionSheetRef: any = createRef();

export interface Props {
    fontSizeText?: number;
}

const detailsScreen: React.FC<Props> = ({Props, route}: any) => {
    const [history, setListHistory] = useState([]);
    const [orderByData, setOrderByData] = useState(true);
    const [orderByDescricao, setOrderByDescricao] = useState(false);
    const [orderByIncresDecres, setOrderByIncresDecres] = useState(true);
    const [attach, setAttach] = useState('');

    // const [orderByDescricaoCrescente, setOrderByDescricaoCrescente] = useState(
    //     false,
    // );
    const storage = Storage;

    let orderBy = new OrderBy();

    const {item} = route.params;
    useEffect(() => {
        setListHistory(item.historicals);
    }, []);

    const getAttach = async () => {
        let attach = await storage.getFakeAttach();
        //console.log(attach);
        setAttach(attach);
    };

    // useEffect(() => {
    //     console.log('entrou aqui');
    // }, [history]);

    const setOrderByDataFn = (check: boolean) => {
        setOrderByData(check);
        setOrderByDescricao(!check);
        if (orderByIncresDecres) {
            orderBy.sorteDate(history, 'increasing');
        } else {
            orderBy.sorteDate(history, 'decreasing');
        }
    };

    const setorderByDescricaoFn = (check: boolean) => {
        setOrderByDescricao(check);
        setOrderByData(!check);
        if (orderByIncresDecres) {
            orderBy.sorteDescription(history, 'increasing');
        } else {
            orderBy.sorteDescription(history, 'decreasing');
        }
    };

    const setOrderCrescenteDescrescenteFn = (check: boolean) => {
        setOrderByIncresDecres(check);
        if (check) {
            // crescente
            if (orderByData) {
                orderBy.sorteDate(history, 'increasing');
            }
            if (orderByDescricao) {
                orderBy.sorteDescription(history, 'increasing');
            }
        } else {
            // descrescente
            if (orderByData) {
                orderBy.sorteDate(history, 'decreasing');
            }
            if (orderByDescricao) {
                orderBy.sorteDescription(history, 'decreasing');
            }
        }
    };

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
                title={
                    item.amount !== undefined ? 'R$ ' + item.amount : 'R$ 0,00'
                }
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
            {attach != '' ? (
                <>
                    <ViewAnexo>
                        <ButtonComponent
                            width={'70%'}
                            height={'40px'}
                            fontsize={15}
                            paddingArea="5px"
                            children={attach}
                            onPress={() => null}
                        />
                        <Icon
                            name={'close'}
                            size={25}
                            style={{paddingLeft: 15}}
                            onPress={() => setAttach('')}
                        />
                    </ViewAnexo>
                </>
            ) : (
                <IconAttach
                    name={'attach'}
                    size={30}
                    color={colors.primaryColor}
                    onPress={async () => {
                        await storage.pickDoc();
                        getAttach();
                    }}
                />
            )}
            <PaddingBottomArea padding={30} />
            {/* {ActionSheetComponent()} */}
            <ViewHeaderHistory>
                <ItemsListComponent
                    title="HISTÓRICO"
                    fontSizeText={16}
                    color={'black'}
                    fontWeight={'400'}
                    letterSpacing={3}
                />
                <ButtonOrderBy
                    onPress={() => {
                        actionSheetRef.current?.setModalVisible();
                    }}>
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
            <ActionSheet ref={actionSheetRef}>
                <StyleSheetView>
                    {/* <Text>YOUR CUSTOM COMPONENT INSIDE THE ACTIONSHEET</Text> */}

                    <StyleSheetViewItems onPress={() => setOrderByDataFn(true)}>
                        {orderByData ? (
                            <Icon
                                name={'check'}
                                size={30}
                                color={colors.primaryColor}
                            />
                        ) : (
                            <Icon
                                name={'check'}
                                size={30}
                                color={colors.textColor}
                                style={{opacity: 0.2}}
                            />
                        )}
                        <StyleSheetTextItems>
                            Ordernar por data
                        </StyleSheetTextItems>
                    </StyleSheetViewItems>

                    <PaddingBottomArea padding={10} />

                    <StyleSheetViewItems
                        onPress={() => setorderByDescricaoFn(true)}>
                        {orderByDescricao ? (
                            <Icon
                                name={'check'}
                                size={30}
                                color={colors.primaryColor}
                            />
                        ) : (
                            <Icon
                                name={'check'}
                                size={30}
                                color={colors.textColor}
                                style={{opacity: 0.2}}
                            />
                        )}
                        <StyleSheetTextItems>
                            Ordernar por Descrição
                        </StyleSheetTextItems>
                    </StyleSheetViewItems>
                </StyleSheetView>
                <View
                    style={{
                        borderBottomColor: 'grey',
                        borderBottomWidth: 1,
                        height: 40,
                    }}
                />
                <StyleSheetView>
                    {/* <Text>YOUR CUSTOM COMPONENT INSIDE THE ACTIONSHEET</Text> */}
                    <StyleSheetViewItems
                        onPress={() => setOrderCrescenteDescrescenteFn(true)}>
                        {orderByIncresDecres === true ? (
                            <Icon
                                name={'check'}
                                size={30}
                                color={colors.primaryColor}
                            />
                        ) : (
                            <Icon
                                name={'check'}
                                size={30}
                                color={colors.textColor}
                                style={{opacity: 0.2}}
                            />
                        )}
                        <StyleSheetTextItems>Crescente</StyleSheetTextItems>
                    </StyleSheetViewItems>
                    <PaddingBottomArea padding={10} />
                    <StyleSheetViewItems
                        onPress={() => setOrderCrescenteDescrescenteFn(false)}>
                        {orderByIncresDecres === false ? (
                            <Icon
                                name={'check'}
                                size={30}
                                color={colors.primaryColor}
                            />
                        ) : (
                            <Icon
                                name={'check'}
                                size={30}
                                color={colors.textColor}
                                style={{opacity: 0.2}}
                            />
                        )}
                        <StyleSheetTextItems>Decrescente</StyleSheetTextItems>
                    </StyleSheetViewItems>
                </StyleSheetView>
                <PaddingBottomArea padding={20} />
            </ActionSheet>
            <PaddingBottomArea padding={10} />
            {history.length > 0 &&
                history.map((historical: Historical) => {
                    return (
                        <>
                            <HistoryComponent
                                key={
                                    getYear(historical.date) +
                                    getMonth(historical.date) +
                                    historical.description
                                }
                                day={getDay(historical.date)}
                                description={historical.description}
                                year={getYear(historical.date)}
                                month={getMonth(historical.date)}
                            />
                        </>
                    );
                })}
        </Container>
    );
};

export default detailsScreen;
