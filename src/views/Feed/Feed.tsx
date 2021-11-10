import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledLoader } from '../styled/StyledLoader';
import { FeedNavigation } from './components/FeedNavigation';
import { FeedHeader } from './components/FeedHeader';
import { FeedStyledPageWrapper } from './styled/FeedStyledPageWrapper';
import { FeedStyledEntriesWrapper } from './styled/FeedStyledEntriesWrapper';
import { FeedStyledEntry } from './styled/FeedStyledEntry';
import { filterEntriesData, getBorderEntries, getDateFromTimestamp } from '../utils/utils';
import { FilteredEntry, BorderEntries, LimitParams } from '../types/types';
import { REDDIT_POLAND_FEED_JSON_URL, TARGET_KEYS } from '../constants/constants';

export const Feed = () => {
    const [isFetched, setIsFetched] = useState<boolean>(false);
    const [entries, setEntries] = useState<FilteredEntry[]>([]);
    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(10);
    const [borderEntries, setBorderEntries] = useState<BorderEntries>({firstEntryName: '', lastEntryName: ''});
    const [limitParams, setLimitParams] = useState<LimitParams>({after: '', before: ''});
    const navigate = useNavigate();

    useEffect(() => {
        disableButtons();
        fetch(`${REDDIT_POLAND_FEED_JSON_URL}?limit=${limit}&after=${limitParams.after}&before=${limitParams.before}`)
            .then(res => res.json())
            .then(
                (result) => {
                    const filteredEntries = filterEntriesData(result, TARGET_KEYS);
                    setIsFetched(true);
                    enableButtons();
                    setEntries(filteredEntries);
                    setBorderEntries(getBorderEntries(filteredEntries))
                }
            )
            .catch((error) => {
                console.error(error);
            })
    }, [page, limit, limitParams])

    const renderEntries = (pageEntries: FilteredEntry[]) => {
        return pageEntries.map((entry) =>(
            <FeedStyledEntry key={entry.name} onClick={() => handleEntryClick(entry.id)}>
                <span>{`Title: ${entry.title}`}</span>
                <span>{`Author: ${entry.author}`}</span>
                <span>{`Created: ${getDateFromTimestamp(entry.created)}`}</span>
                <span>{`Comments: ${entry.num_comments}`}</span>
                <span>{`Score: ${entry.score}`}</span>
                <img src={entry.thumbnail} alt=""/>
            </FeedStyledEntry>
        ));
    }

    const handleEntryClick = useCallback((entryId: string) => navigate(`/entry/${entryId}`), [navigate]);

    const enableButtons = () => {
        const buttons = document.querySelectorAll('.feed-navigation-button, .feed-pagination-button');
        buttons.forEach((button) => (button as HTMLButtonElement).disabled = false);
    }

    const disableButtons = () => {
        const buttons = document.querySelectorAll('.feed-navigation-button, .feed-pagination-button');
        buttons.forEach((button) => (button as HTMLButtonElement).disabled = true);
    }

    return (
        isFetched ?
        <FeedStyledPageWrapper>
            <React.Fragment>
                <FeedHeader setLimit={setLimit} />
                <FeedStyledEntriesWrapper>
                    {renderEntries(entries)}
                </FeedStyledEntriesWrapper>
                <FeedNavigation
                    page={page}
                    setPage={setPage}
                    borderEntries={borderEntries}
                    setLimitParams={setLimitParams}
                />
            </React.Fragment>
        </FeedStyledPageWrapper>
        : <StyledLoader/>
    );
};
