import React, { useState, useEffect, useRef } from 'react';
import { filterEntriesData } from '../utils/filterEntriesData';
import {Entry} from '../types/types';
import { REDDIT_POLAND_JSON_URL } from '../constants/constants';

export const FeedsView: React.FC = () => {
    const [isFetched, setIsFetched] = useState<boolean>(false);
    const [entries, setEntries] = useState<Entry[]>([]);
    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(10);
    const numberOfPages = useRef<number>(0);

    useEffect(() => {
        disableButtons();
        fetch(`${REDDIT_POLAND_JSON_URL}?limit=${limit}`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    const filteredEntries = filterEntriesData(result);
                    console.log(filterEntriesData(result));
                    setIsFetched(true);
                    enableButtons();
                    setEntries(filteredEntries);
                    numberOfPages.current = (Math.ceil(result.data.dist/limit));
                }
                // (error) => {handle error}
            )
    }, [page])

    const renderEntries = (pageEntries: Entry[]) => {
        return pageEntries.map((entry) =>(
            <div>
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
        <div>
            {renderEntries(entries)}
            <section>
                <button onClick={handleFirstClick}>first</button>
                <button onClick={handlePrevClick}>previous</button>
                <button onClick={handleNextClick}>next</button>
                <button onClick={handleLastClick}>last</button>
            </section>
        </div>
    );
};
