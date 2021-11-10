import React from 'react';
import { FeedStyledHeaderWrapper } from '../styled/FeedStyledHeaderWrapper';
import { FeedStyledHeaderPagination } from '../styled/FeedStyledHeaderPagination';
import { PaginationOption } from '../../constants/constants';
import { LimitParams } from '../../types/types';

type FeedHeaderProps = {
    limitParams: LimitParams;
    setLimitParams: (limitParams: LimitParams) => void;
}

export const FeedHeader = (props: FeedHeaderProps) => {
    const { limitParams, setLimitParams } = props;

    const handleClick = (e: React.SyntheticEvent) => {
        setLimitParams({
            ...limitParams,
            limit: (e.target as HTMLButtonElement).value,
        });
    }

    const renderButtons = (options: string[]) => {
        return options.map((option) => {
            const active = limitParams.limit === PaginationOption[option] ? 'active' : '';
            return (
                <button
                    value={PaginationOption[option]}
                    onClick={handleClick}
                    key={option}
                    className={`feed-pagination-button ${active}`}
                >
                    {PaginationOption[option]}
                </button>
            )
        });
    }

    return (
        <FeedStyledHeaderWrapper>
            <span className="feed-header-title">Have a nice browsing ;-)</span>
            <FeedStyledHeaderPagination>
                <span>Show per page: </span>
                <div>
                    {renderButtons(Object.keys(PaginationOption))}
                </div>
            </FeedStyledHeaderPagination>
        </FeedStyledHeaderWrapper>
    );
};
