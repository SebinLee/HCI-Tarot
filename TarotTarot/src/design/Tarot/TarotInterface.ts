export interface TarotBase {
    index: number;
}

export interface TarotKeyword extends TarotBase {
    topic?: string;
    keywords: string;
}

export interface TarotKeywordProps {
    tarot: TarotKeyword;
}

export interface TarotKeywordsProps {
    tarots: TarotKeyword[];
}
