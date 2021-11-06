import { ParsedResponse, Entry, BorderEntries } from '../types/types';

export function filterEntriesData(entriesObject: ParsedResponse, targetKeys: string[]): Entry[] {
    const rawEntriesArray = entriesObject.data.children;
    const result: Entry[] = [];

    rawEntriesArray.forEach((entry: Record<string, string>) => {
        const filteredEntry: { [index: string]: string|number } = {};
        targetKeys.forEach((targetKey: string) => {
            filteredEntry[targetKey] = entry.data[targetKey as any];
        });
        result.push(filteredEntry as Entry);
    });
    return result;
}

export function getBorderEntries(filteredEntries: Entry[]): BorderEntries {
    return {
        firstEntryName: filteredEntries[0].name,
        lastEntryName: filteredEntries[filteredEntries.length - 1].name,
    }
}