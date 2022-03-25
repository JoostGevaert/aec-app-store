export interface IArticle {
    name: string;
    title: string;
    content: string[];
}

export type IArticleUndefined = {
    name: string;
    title: string;
    content: string[];
} | undefined
