import React, { useState, useEffect } from 'react';
import { FeedsViewNavigation } from './components/FeedsViewNavigation';
import { FeedsViewHeader } from './components/FeedsViewHeader';
import { FeedsViewStyledPageWrapper } from './styled/FeedsViewStyledPageWrapper';
import { FeedsViewStyledEntriesWrapper } from './styled/FeedsViewStyledEntriesWrapper';
import { filterEntriesData, getBorderEntries } from '../utils/utils';
import { Entry, BorderEntries, LimitParams } from '../types/types';
import { REDDIT_POLAND_JSON_URL, TARGET_KEYS } from '../constants/constants';

export const FeedsView: React.FC = () => {
    const [isFetched, setIsFetched] = useState<boolean>(false);
    const [entries, setEntries] = useState<Entry[]>([]);
    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(10);
    const [borderEntries, setBorderEntries] = useState<BorderEntries>({firstEntryName: '', lastEntryName: ''});
    const [limitParams, setLimitParams] = useState<LimitParams>({after: '', before: ''});

    useEffect(() => {
        disableButtons();
        fetch(`${REDDIT_POLAND_JSON_URL}?limit=${limit}&after=${limitParams.after}&before=${limitParams.before}`)
            .then(res => res.json())
            .then(
                (result) => {
                    const filteredEntries = filterEntriesData(result, TARGET_KEYS);
                    console.log(filterEntriesData(result, TARGET_KEYS));
                    setIsFetched(true);
                    enableButtons();
                    setEntries(filteredEntries);
                    setBorderEntries(getBorderEntries(filteredEntries))
                }
                // (error) => {handle error}
            )
    }, [page, limit])

    const renderEntries = (pageEntries: Entry[]) => {
        return pageEntries.map((entry) =>(
            <div key={entry.name}>
                <span>{entry.name}</span>
                <span> - - - </span>
                <span>{entry.author}</span>
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
            <FeedsViewNavigation
                page={page}
                setPage={setPage}
                borderEntries={borderEntries}
                setLimitParams={setLimitParams}
            />
        </FeedsViewStyledPageWrapper>
    );
};
