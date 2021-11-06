import React, { useState, useEffect } from 'react';
import { FeedsViewNavigation } from './components/FeedsViewNavigation';
import { FeedsViewHeader } from './components/FeedsViewHeader';
import { FeedsViewStyledPageWrapper } from './styled/FeedsViewStyledPageWrapper';
import { FeedsViewStyledEntriesWrapper } from './styled/FeedsViewStyledEntriesWrapper';
import { filterEntriesData } from '../utils/filterEntriesData';
import { Entry } from '../types/types';
import { REDDIT_POLAND_JSON_URL } from '../constants/constants';

export const FeedsView: React.FC = () => {
    const [isFetched, setIsFetched] = useState<boolean>(false);
    const [entries, setEntries] = useState<Entry[]>([]);
    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(10);

    useEffect(() => {
        disableButtons();
        fetch(`${REDDIT_POLAND_JSON_URL}?limit=${limit}`)
            .then(res => res.json())
            .then(
                (result) => {
                    const filteredEntries = filterEntriesData(result);
                    console.log(filterEntriesData(result));
                    setIsFetched(true);
                    enableButtons();
                    setEntries(filteredEntries);
                }
                // (error) => {handle error}
            )
    }, [page, limit])

    const renderEntries = (pageEntries: Entry[]) => {
        return pageEntries.map((entry) =>(
            <div key={entry.id}>
                <p>{entry.name}</p>
            </div>
        ));
    }

    const enableButtons = () => {
        const buttons = document.querySelectorAll('button');
        buttons.forEach((button) => button.disabled = false);
    }

    const disableButtons = () => {
        const buttons = document.querySelectorAll('button');
        buttons.forEach((button) => button.disabled = true);
    }

    return (
        <FeedsViewStyledPageWrapper>
            <FeedsViewHeader setLimit={setLimit} />
            <FeedsViewStyledEntriesWrapper>
                {renderEntries(entries)}
            </FeedsViewStyledEntriesWrapper>
            <FeedsViewNavigation setPage={setPage} page={page} />
        </FeedsViewStyledPageWrapper>
    );
};
