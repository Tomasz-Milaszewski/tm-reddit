export type Entry = {
    id: string;
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
        children: Array<Record<string, string>>
        before: string | null;
    }
}