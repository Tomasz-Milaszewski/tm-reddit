import React from 'react';
import { FeedsViewStyledNavigationWrapper } from '../styled/FeedsViewStyledNavigationWrapper';
import { BorderEntries, LimitParams } from '../../types/types';

type FeedsViewNavigationProps = {
    page: number;
    setPage: (page: number) => void;
    borderEntries: BorderEntries;
    setLimitParams: (limitParams: LimitParams) => void;
}

export const FeedsViewNavigation = (props: FeedsViewNavigationProps) => {
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
        <FeedsViewStyledNavigationWrapper>
            <button onClick={handlePrevClick}>previous</button>
            <button onClick={handleNextClick}>next</button>
        </FeedsViewStyledNavigationWrapper>
    );
};
