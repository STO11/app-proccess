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
import {FlatList} from 'react-native';

export interface Props {
    fontSizeText?: number;
}

//
// ─── SCREEN HOME RENDER ─────────────────────────────────────────────────────────
//
const homeScreen: React.FC<Props> = ({Props, navigation}: any) => {
    const [listCases, setListCases] = useState([]);
    useEffect(() => {
        const api = async () => {
            let cases = await HomeController.getCases();
            if (cases != null) {
                setListCases(cases);
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

    return (
        <Container>
            <TitleView>
                <TextTitle {...Props} fontSizeText={40}>
                    Processos
                </TextTitle>
                <Ionicons
                    name={'search'}
                    size={30}
                    color={colors.primaryColor}
                    onPress={() => null}
                />
            </TitleView>
            <PaddingBottomArea padding={20} />
            <FlatList
                data={listCases}
                renderItem={renderItem}
                keyExtractor={(item: any) => item.id}
            />
            <PaddingBottomArea padding={0} />
        </Container>
    );
};

export default homeScreen;
