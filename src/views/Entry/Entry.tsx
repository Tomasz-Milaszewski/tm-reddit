import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { EntryHeader } from './components/EntryHeader';
import { StyledLoader } from '../styled/StyledLoader';
import { EntryStyledWrapper } from './styled/EntryStyledWrapper';
import { EntryStyledItem } from './styled/EntryStyledItem';
import { filterEntriesData, getDateFromTimestamp } from '../utils/utils';
import { FilteredEntry } from '../types/types';
import { REDDIT_POLAND_ENTRY_JSON_URL, TARGET_KEYS } from '../constants/constants';

export const Entry = () => {
    const [isFetched, setIsFetched] = useState<boolean>(false);
    const [entry, setEntry] = useState<FilteredEntry>({} as FilteredEntry);
    const params = useParams();
    const readableDate = getDateFromTimestamp(entry.created);

    useEffect(() => {
        fetch(`${REDDIT_POLAND_ENTRY_JSON_URL}${params.entryId}.json`)
            .then(res => res.json())
            .then(
                (result) => {
                    const filteredEntry = filterEntriesData(result[0], TARGET_KEYS)[0];
                    setIsFetched(true);
                    setEntry(filteredEntry);
                }
            )
            .catch((error) => {
                console.error(error);
            })
    }, [params])

    return (
        isFetched ?
        <EntryStyledWrapper>
            <EntryHeader entryTitle={entry.title} />
            <EntryStyledItem>
                <span>{`Author: ${entry.author}`}</span>
                <span>{`Selftext: ${entry.selftext}`}</span>
                <span>{`Created: ${readableDate}`}</span>
                <span>{`Comments: ${entry.num_comments}`}</span>
                <span>{`Score: ${entry.score}`}</span>
                <img src={entry.thumbnail} alt=""/>
            </EntryStyledItem>
        </EntryStyledWrapper>
        : <StyledLoader/>
    );
};
