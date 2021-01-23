import React from 'react';
import {
    ItemsHistory,
    NumberDay,
    PaineHistory,
    TextHistory,
    TextMonth,
    TextNumberDay,
    TextYear,
    ViewHistory,
} from '../styles/details';
import {PaddingBottomArea} from '../styles/general';

// import { Container } from './styles';

const HistoryComponent: React.FC = () => {
    return (
        <ViewHistory>
            <ItemsHistory>
                <NumberDay>
                    <TextNumberDay>8</TextNumberDay>
                </NumberDay>
                <PaineHistory>
                    <TextMonth>Abril</TextMonth>
                    <PaddingBottomArea padding={1} />
                    <TextYear>2019</TextYear>
                    <PaddingBottomArea padding={2} />
                    <TextHistory>
                        Ola meu suelton de souza lima sou programador estou a
                        muitos anos no cargo com php e gostaria de migrar para o
                        mobile
                    </TextHistory>
                </PaineHistory>
            </ItemsHistory>
        </ViewHistory>
    );
};

export default HistoryComponent;
