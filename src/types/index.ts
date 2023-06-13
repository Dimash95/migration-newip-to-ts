export interface ISource {
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

export interface INews {
  articles: IArticles[];
  status: string;
  totalResults: number;
}

export interface IArticles {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface IOptions {
  [source: string]: string;
}
