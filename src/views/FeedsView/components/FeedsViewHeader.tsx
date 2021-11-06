import React from 'react';
import { FeedsViewStyledHeaderWrapper } from '../styled/FeedsViewStyledHeaderWrapper';
import { FeedsViewStyledHeaderPagination } from '../styled/FeedsViewStyledHeaderPagination';
import { PaginationOption } from '../../constants/constants';

type FeedsViewHeaderProps = {
    setLimit: (limit: number) => void;
}

export const FeedsViewHeader = (props: FeedsViewHeaderProps) => {
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
        <FeedsViewStyledHeaderWrapper>
            <span>Have a nice browsing ;-)</span>
            <FeedsViewStyledHeaderPagination>
                <span>Show: </span>
                <div>
                    {renderButtons(Object.keys(PaginationOption))}
                </div>
            </FeedsViewStyledHeaderPagination>
        </FeedsViewStyledHeaderWrapper>
    );
};
