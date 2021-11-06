import React, { useState, useRef } from 'react';
import { FeedsViewStyledNavigationWrapper } from '../styled/FeedsViewStyledNavigationWrapper';

export const FeedsViewNavigation: React.FC = () => {
    const [isFetched, setIsFetched] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const numberOfPages = useRef<number>(0);

    const handleFirstClick = () => {
        setPage(1);
    }
    const handlePrevClick = () => {
        if (page === 1) {
            return;
        }
        setPage(page - 1);
    }
    const handleNextClick = () => {
        if (page === numberOfPages.current) {
            return;
        }
        setPage(page + 1);
    }
    const handleLastClick = () => {
        setPage(numberOfPages.current);
    }

    return (
        <FeedsViewStyledNavigationWrapper>
            <button onClick={handleFirstClick}>first</button>
            <button onClick={handlePrevClick}>previous</button>
            <button onClick={handleNextClick}>next</button>
            <button onClick={handleLastClick}>last</button>
        </FeedsViewStyledNavigationWrapper>
    );
};
