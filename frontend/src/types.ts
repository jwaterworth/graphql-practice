
export type ItemType =
    | "urgentAndImportant"
    | "urgentAndNotImportant"
    | "notUrgentAndImportant"
    | "notUrgentAndNotImportant";

export interface Item {
    id: number;
    name: string;
    type: ItemType;
    done: boolean;
}