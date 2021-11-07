import { ParsedResponse, FilteredEntry, BorderEntries } from '../types/types';

export function filterEntriesData(entriesObject: ParsedResponse, targetKeys: string[]): FilteredEntry[] {
    const rawEntriesArray = entriesObject.data.children;
    const result: FilteredEntry[] = [];

    rawEntriesArray.forEach((entry: Record<string, string>) => {
        const filteredEntry: { [index: string]: string|number } = {};
        targetKeys.forEach((targetKey: string) => {
            filteredEntry[targetKey] = entry.data[targetKey as any];
        });
        result.push(filteredEntry as FilteredEntry);
    });
    return result;
}

export function getBorderEntries(filteredEntries: FilteredEntry[]): BorderEntries {
    return {
        firstEntryName: filteredEntries[0].name,
        lastEntryName: filteredEntries[filteredEntries.length - 1].name,
    }
}