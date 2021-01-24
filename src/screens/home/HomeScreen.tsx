/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect} from 'react';
import {Container, TextTitle, TitleView} from '../../styles/home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../styles/colors';
import ItemsListComponent from '../../components/itemsListComponent';
import {PaddingBottomArea} from '../../styles/general';
import {Routes} from '../../navigation/routes';
import {HomeController} from '../../controllers/HomeController';
import {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import InputComponent from '../../components/inputComponent';
import Case from '../../models/Case';

export interface Props {
    fontSizeText?: number;
}

//
// ─── SCREEN HOME RENDER ─────────────────────────────────────────────────────────
//
const homeScreen: React.FC<Props> = ({Props, navigation}: any) => {
    const [listCases, setListCases] = useState([]);
    const [listCasesOriginal, setListCasesOriginal] = useState([]);
    const [search, setSearch] = useState(false);
    useEffect(() => {
        const api = async () => {
            let cases = await HomeController.getCases();
            if (cases != null) {
                setListCases(cases);
                setListCasesOriginal(cases);
            }
        };
        api();
    }, []);

    const renderItem = (data: any) => {
        return (
            <>
                <ItemsListComponent
                    letterSpacing={0}
                    title={data.item.title}
                    fontSizeText={20}
                    color={'black'}
                    fontWeight={'400'}
                    onPress={() => {
                        navigation.navigate(Routes.DETAILS.name, {
                            item: data.item,
                        });
                    }}
                />
                <PaddingBottomArea padding={5} />
                <ItemsListComponent
                    letterSpacing={0}
                    title="Número"
                    fontSizeText={15}
                    color={'grey'}
                    fontWeight={'100'}
                    onPress={() => {
                        navigation.navigate(Routes.DETAILS.name, {
                            item: data.item,
                        });
                    }}
                />
                <ItemsListComponent
                    letterSpacing={0}
                    title={data.item.number}
                    fontSizeText={15}
                    color={'black'}
                    fontWeight={'300'}
                    onPress={() => {
                        navigation.navigate(Routes.DETAILS.name, {
                            item: data.item,
                        });
                    }}
                />
                <PaddingBottomArea padding={20} />
            </>
        );
    };

    const searchText = (search: string) => {
        let text = search.toLowerCase();
        let list = listCases;
        setListCases(listCasesOriginal);
        if (!search || search === '') {
            return false;
        }
        let filter = list.filter((item: Case) => {
            return (
                item.title.toLowerCase().match(text) ||
                item.number.toLowerCase().match(text)
            );
        });
        setListCases(filter);
    };

    return (
        <Container>
            <TitleView>
                {!search && (
                    <TextTitle {...Props} fontSizeText={40}>
                        Processos
                    </TextTitle>
                )}
                {!search && (
                    <Ionicons
                        name={'search'}
                        size={35}
                        color={colors.primaryColor}
                        onPress={() => setSearch(true)}
                    />
                )}
                {search && (
                    <InputComponent
                        autoCapitalize="none"
                        placeholder="Pesquisar"
                        bgColor={'white'}
                        width="90%"
                        onChangeText={(v: any) => searchText(v)}
                    />
                )}
                {search && (
                    <Ionicons
                        name={'close-outline'}
                        size={50}
                        color={colors.primaryColor}
                        onPress={() => setSearch(false)}
                    />
                )}
            </TitleView>
            <PaddingBottomArea padding={20} />
            {listCases.length > 0 ? (
                <FlatList
                    data={listCases}
                    renderItem={renderItem}
                    keyExtractor={(item: any) => item.id}
                />
            ) : (
                <View style={{flex: 1}}>
                    <Text>Sem registros</Text>
                </View>
            )}
            <PaddingBottomArea padding={0} />
        </Container>
    );
};

export default homeScreen;
