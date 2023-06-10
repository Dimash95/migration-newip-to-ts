export interface ISourсe {
    status: string;
    sources: ISourceItem[];
}

export interface ISourceItem {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}
