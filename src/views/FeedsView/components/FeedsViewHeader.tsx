import React, { useState } from 'react';
import { FeedsViewStyledHeaderWrapper } from '../styled/FeedsViewStyledHeaderWrapper';
import { FeedsViewStyledHeaderPagination } from '../styled/FeedsViewStyledHeaderPagination';

export const FeedsViewHeader: React.FC = () => {
    const [limit, setLimit] = useState<number>(10);

    const handleClick = () => {
        setLimit(10);
    }

    return (
        <FeedsViewStyledHeaderWrapper>
            <span>Have a nice browsing ;-)</span>
            <FeedsViewStyledHeaderPagination>
                <span>Show: </span>
                <div>
                    <button onClick={handleClick}> 5 </button>
                    <button onClick={handleClick}> 10 </button>
                    <button onClick={handleClick}> 25 </button>
                </div>
            </FeedsViewStyledHeaderPagination>
        </FeedsViewStyledHeaderWrapper>
    );
};
