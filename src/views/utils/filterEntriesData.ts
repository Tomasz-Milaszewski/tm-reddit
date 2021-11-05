import { ParsedResponse, Entry } from '../types/types';
import { TARGET_KEYS } from '../constants/constants';

export function filterEntriesData(entriesObject: ParsedResponse): Entry[] {
    const rawEntriesArray = entriesObject.data.children;
    const result: Entry[] = [];

    rawEntriesArray.forEach((entry: Record<string, string>) => {
        const filteredEntry: { [index: string]: string|number } = {};
        TARGET_KEYS.forEach((targetKey: string) => {
            filteredEntry[targetKey] = entry.data[targetKey as any];
        });
        result.push(filteredEntry as Entry);
    });
    return result;
}