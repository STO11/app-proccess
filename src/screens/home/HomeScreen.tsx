import React from 'react';
//import {SafeAreaView} from 'react-native-safe-area-context';
import {Container, TextTitle, TitleView} from '../../styles/home';
// import { Container } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../styles/colors';
import ItemsListComponent from '../../components/itemsListComponent';
import {ItemList, PaddingBottomArea} from '../../styles/general';
import {ScrollView} from 'react-native';
import {Routes} from '../../navigation/routes';
//import {Text} from 'react-native';

export interface Props {
    fontSizeText?: number;
}

//
// ─── SCREEN HOME RENDER ─────────────────────────────────────────────────────────
//
const homeScreen: React.FC<Props> = ({Props, navigation}: any) => {
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
            <ScrollView>
                <PaddingBottomArea padding={40} />
                <ItemList>
                    <ItemsListComponent
                        title="Cristiane Marcal de Arruda Candido x Aparedido Donizeti Rodrigues"
                        fontSizeText={20}
                        color={'black'}
                        fontWeight={'400'}
                        onPress={() => {
                            navigation.navigate(Routes.TABS2.name);
                        }}
                    />
                    <PaddingBottomArea padding={5} />
                    <ItemsListComponent
                        title="Número"
                        fontSizeText={15}
                        color={'grey'}
                        fontWeight={'100'}
                    />
                    <ItemsListComponent
                        title="475786869-34.2016.8.26.0650"
                        fontSizeText={15}
                        color={'black'}
                        fontWeight={'300'}
                    />
                </ItemList>
                <PaddingBottomArea padding={20} />
                <ItemList>
                    <ItemsListComponent
                        title="Cristiane Marcal de Arruda Candido x Aparedido Donizeti Rodrigues"
                        fontSizeText={20}
                        color={'black'}
                        fontWeight={'400'}
                    />
                    <PaddingBottomArea padding={5} />
                    <ItemsListComponent
                        title="Número"
                        fontSizeText={15}
                        color={'grey'}
                        fontWeight={'100'}
                    />
                    <ItemsListComponent
                        title="475786869-34.2016.8.26.0650"
                        fontSizeText={15}
                        color={'black'}
                        fontWeight={'300'}
                    />
                </ItemList>

                <PaddingBottomArea padding={20} />
                <ItemList>
                    <ItemsListComponent
                        title="Cristiane Marcal de Arruda Candido x Aparedido Donizeti Rodrigues"
                        fontSizeText={20}
                        color={'black'}
                        fontWeight={'400'}
                    />
                    <PaddingBottomArea padding={5} />
                    <ItemsListComponent
                        title="Número"
                        fontSizeText={15}
                        color={'grey'}
                        fontWeight={'100'}
                    />
                    <ItemsListComponent
                        title="475786869-34.2016.8.26.0650"
                        fontSizeText={15}
                        color={'black'}
                        fontWeight={'300'}
                    />
                </ItemList>

                <PaddingBottomArea padding={20} />
                <ItemList>
                    <ItemsListComponent
                        title="Cristiane Marcal de Arruda Candido x Aparedido Donizeti Rodrigues"
                        fontSizeText={20}
                        color={'black'}
                        fontWeight={'400'}
                    />
                    <PaddingBottomArea padding={5} />
                    <ItemsListComponent
                        title="Número"
                        fontSizeText={15}
                        color={'grey'}
                        fontWeight={'100'}
                    />
                    <ItemsListComponent
                        title="475786869-34.2016.8.26.0650"
                        fontSizeText={15}
                        color={'black'}
                        fontWeight={'300'}
                    />
                </ItemList>

                <PaddingBottomArea padding={20} />
                <ItemList>
                    <ItemsListComponent
                        title="Cristiane Marcal de Arruda Candido x Aparedido Donizeti Rodrigues"
                        fontSizeText={20}
                        color={'black'}
                        fontWeight={'400'}
                    />
                    <PaddingBottomArea padding={5} />
                    <ItemsListComponent
                        title="Número"
                        fontSizeText={15}
                        color={'grey'}
                        fontWeight={'100'}
                    />
                    <ItemsListComponent
                        title="475786869-34.2016.8.26.0650"
                        fontSizeText={15}
                        color={'black'}
                        fontWeight={'300'}
                    />
                </ItemList>

                <PaddingBottomArea padding={20} />
                <ItemList>
                    <ItemsListComponent
                        title="Cristiane Marcal de Arruda Candido x Aparedido Donizeti Rodrigues"
                        fontSizeText={20}
                        color={'black'}
                        fontWeight={'400'}
                    />
                    <PaddingBottomArea padding={5} />
                    <ItemsListComponent
                        title="Número"
                        fontSizeText={15}
                        color={'grey'}
                        fontWeight={'100'}
                    />
                    <ItemsListComponent
                        title="475786869-34.2016.8.26.0650"
                        fontSizeText={15}
                        color={'black'}
                        fontWeight={'300'}
                    />
                </ItemList>

                <PaddingBottomArea padding={20} />
                <ItemList>
                    <ItemsListComponent
                        title="Cristiane Marcal de Arruda Candido x Aparedido Donizeti Rodrigues"
                        fontSizeText={20}
                        color={'black'}
                        fontWeight={'400'}
                    />
                    <PaddingBottomArea padding={5} />
                    <ItemsListComponent
                        title="Número"
                        fontSizeText={15}
                        color={'grey'}
                        fontWeight={'100'}
                    />
                    <ItemsListComponent
                        title="475786869-34.2016.8.26.0650"
                        fontSizeText={15}
                        color={'black'}
                        fontWeight={'300'}
                    />
                </ItemList>

                <PaddingBottomArea padding={20} />
                <ItemList>
                    <ItemsListComponent
                        title="Cristiane Marcal de Arruda Candido x Aparedido Donizeti Rodrigues"
                        fontSizeText={20}
                        color={'black'}
                        fontWeight={'400'}
                    />
                    <PaddingBottomArea padding={5} />
                    <ItemsListComponent
                        title="Número"
                        fontSizeText={15}
                        color={'grey'}
                        fontWeight={'100'}
                    />
                    <ItemsListComponent
                        title="475786869-34.2016.8.26.0650"
                        fontSizeText={15}
                        color={'black'}
                        fontWeight={'300'}
                    />
                </ItemList>
            </ScrollView>
        </Container>
    );
};

export default homeScreen;
