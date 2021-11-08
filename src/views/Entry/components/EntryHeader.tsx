import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { EntryStyledHeaderWrapper } from '../styled/EntryStyledHeaderWrapper';

type EntryHeaderProps = {
    entryTitle: string;
}

export const EntryHeader = (props: EntryHeaderProps) => {
    const navigate = useNavigate();
    const { entryTitle } = props;

    const handleCloseClick = useCallback(() => navigate(`/`), [navigate]);

    return (
        <EntryStyledHeaderWrapper>
            <span>{entryTitle}</span>
            <span className="entry-header-close" onClick={handleCloseClick}>Close</span>
        </EntryStyledHeaderWrapper>
    );
};
