import React from 'react';
import { FeedStyledNavigationWrapper } from '../styled/FeedStyledNavigationWrapper';
import { BorderEntries, LimitParams } from '../../types/types';

type FeedNavigationProps = {
    page: number;
    setPage: (page: number) => void;
    borderEntries: BorderEntries;
    setLimitParams: (limitParams: LimitParams) => void;
}

export const FeedNavigation = (props: FeedNavigationProps) => {
    const { page, setPage, borderEntries, setLimitParams } = props;

    const handlePrevClick = () => {
        if (page === 1) {
            return;
        }
        setPage(page - 1);
        setLimitParams({
            after: '',
            before: borderEntries.firstEntryName,
        })
    }
    const handleNextClick = () => {
        setPage(page + 1);
        setLimitParams({
            after: borderEntries.lastEntryName,
            before: '',
        })
    }

    return (
        <FeedStyledNavigationWrapper>
            <button className="feed-navigation-button" onClick={handlePrevClick}>previous</button>
            <button className="feed-navigation-button" onClick={handleNextClick}>next</button>
        </FeedStyledNavigationWrapper>
    );
};
