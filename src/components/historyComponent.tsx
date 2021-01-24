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

export interface Props {
    description: string;
    year: string;
    month: string;
}

const HistoryComponent: React.FC<Props> = ({description, year, month}: any) => {
    return (
        <ViewHistory>
            <ItemsHistory>
                <NumberDay>
                    <TextNumberDay>8</TextNumberDay>
                </NumberDay>
                <PaineHistory>
                    <TextMonth>{month}</TextMonth>
                    <PaddingBottomArea padding={1} />
                    <TextYear>{year}</TextYear>
                    <PaddingBottomArea padding={2} />
                    <TextHistory>{description}</TextHistory>
                </PaineHistory>
            </ItemsHistory>
        </ViewHistory>
    );
};

export default HistoryComponent;
