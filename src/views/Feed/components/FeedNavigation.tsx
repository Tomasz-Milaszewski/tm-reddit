import React from 'react';
import { FeedStyledNavigationWrapper } from '../styled/FeedStyledNavigationWrapper';
import { BorderEntries, LimitParams } from '../../types/types';

type FeedNavigationProps = {
    borderEntries: BorderEntries;
    limitParams: LimitParams;
    setLimitParams: (limitParams: LimitParams) => void;
}

export const FeedNavigation = (props: FeedNavigationProps) => {
    const { borderEntries, limitParams, setLimitParams } = props;

    const handlePrevClick = () => {
        setLimitParams({
            ...limitParams,
            after: '',
            before: borderEntries.firstEntryName,
        })
    }
    const handleNextClick = () => {
        setLimitParams({
            ...limitParams,
            after: borderEntries.lastEntryName,
            before: '',
        })
    }

    return (
        <FeedStyledNavigationWrapper>
            <button className="feed-navigation-button" onClick={handlePrevClick}><i className="arrow-left"/> previous</button>
            <button className="feed-navigation-button" onClick={handleNextClick}>next <i className="arrow-right"/></button>
        </FeedStyledNavigationWrapper>
    );
};
