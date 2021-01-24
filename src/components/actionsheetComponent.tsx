/* eslint-disable react-native/no-inline-styles */
import ActionSheet from 'react-native-actions-sheet';
import React, {createRef} from 'react';
import {
    ButtonOrderBy,
    TextButtonOrderBy,
    ViewHeaderHistory,
} from '../styles/details';
import ItemsListComponent from './itemsListComponent';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    PaddingBottomArea,
    StyleSheetTextItems,
    StyleSheetView,
    StyleSheetViewItems,
} from '../styles/general';
import {colors} from '../styles/colors';
import {View} from 'react-native';

const actionSheetRef: any = createRef();

const ActionSheetComponent = () => {
    return (
        <>
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
                    <StyleSheetViewItems>
                        <Icon
                            name={'check'}
                            size={30}
                            color={colors.primaryColor}
                        />
                        <StyleSheetTextItems>
                            Ordernar por data
                        </StyleSheetTextItems>
                    </StyleSheetViewItems>
                    <PaddingBottomArea padding={10} />
                    <StyleSheetViewItems>
                        <Icon
                            name={'check'}
                            size={30}
                            color={colors.primaryColor}
                        />
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
                    <StyleSheetViewItems>
                        <Icon
                            name={'check'}
                            size={30}
                            color={colors.primaryColor}
                        />
                        <StyleSheetTextItems>Cresceste</StyleSheetTextItems>
                    </StyleSheetViewItems>
                    <PaddingBottomArea padding={10} />
                    <StyleSheetViewItems>
                        <Icon
                            name={'check'}
                            size={30}
                            color={colors.primaryColor}
                        />
                        <StyleSheetTextItems>Decrescente</StyleSheetTextItems>
                    </StyleSheetViewItems>
                </StyleSheetView>
                <PaddingBottomArea padding={20} />
            </ActionSheet>
        </>
    );
};

export default ActionSheetComponent;
