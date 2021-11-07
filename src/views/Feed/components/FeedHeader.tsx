import React from 'react';
import { FeedStyledHeaderWrapper } from '../styled/FeedStyledHeaderWrapper';
import { FeedStyledHeaderPagination } from '../styled/FeedStyledHeaderPagination';
import { PaginationOption } from '../../constants/constants';

type FeedHeaderProps = {
    setLimit: (limit: number) => void;
}

export const FeedHeader = (props: FeedHeaderProps) => {
    const { setLimit } = props;

    const handleClick = (e: React.SyntheticEvent) => {
        setLimit(Number((e.target as HTMLButtonElement).value));
    }

    const renderButtons = (options: string[]) => {
        return options.map((option) => {
            return (
                <button
                    value={PaginationOption[option]}
                    onClick={handleClick}
                    key={option}
                >
                    {PaginationOption[option]}
                </button>
            )
        });
    }

    return (
        <FeedStyledHeaderWrapper>
            <span>Have a nice browsing ;-)</span>
            <FeedStyledHeaderPagination>
                <span>Show: </span>
                <div>
                    {renderButtons(Object.keys(PaginationOption))}
                </div>
            </FeedStyledHeaderPagination>
        </FeedStyledHeaderWrapper>
    );
};
