export type Entry = {
    name: string;
    thumbnail: string;
    created: number;
    num_comments: number;
    author: string;
    score: number;
    title: string;
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
    after: string;
    before: string;
}