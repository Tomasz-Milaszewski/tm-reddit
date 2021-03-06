export type FilteredEntry = {
    name: string;
    thumbnail: string;
    created: number;
    num_comments: number;
    author: string;
    score: number;
    title: string;
    id: string;
    selftext: string;
}

export type ParsedResponse = {
    kind: string;
    data: {
        after: string | null;
        dist: number;
        modhash: string;
        geo_filter: string | null;
        children: Array<Record<string, any>>
        before: string | null;
    }
}

export type BorderEntries = {
    firstEntryName: string;
    lastEntryName: string;
}

export type LimitParams = {
    limit: string;
    after: string;
    before: string;
}