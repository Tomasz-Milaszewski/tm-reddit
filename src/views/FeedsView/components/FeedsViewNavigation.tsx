import React from 'react';
import { FeedsViewStyledNavigationWrapper } from '../styled/FeedsViewStyledNavigationWrapper';

type FeedsViewNavigationProps = {
    setPage: (page: number) => void;
    page: number;
}

export const FeedsViewNavigation = (props: FeedsViewNavigationProps) => {
    const { page, setPage } = props;

    const handlePrevClick = () => {
        if (page === 1) {
            return;
        }
        setPage(page - 1);
    }
    const handleNextClick = () => {
        setPage(page + 1);
    }

    return (
        <FeedsViewStyledNavigationWrapper>
            <button onClick={handlePrevClick}>previous</button>
            <button onClick={handleNextClick}>next</button>
        </FeedsViewStyledNavigationWrapper>
    );
};
