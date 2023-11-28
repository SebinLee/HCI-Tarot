export interface ChipInterface {
    text: string;
    route: string;
}

export interface ServerMessage {
    chips: ChipInterface[];
    messages: string[];
}

export type ServerMessages = Record<string, ServerMessage>;
