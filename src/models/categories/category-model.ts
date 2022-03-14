export interface ICategory {
    id: number;
    group?: ICategoryGroupe;
    wording: string;
    description: string;
}

export interface ICategoryGroupe {
    id: number;
    name: string;
    color: string;
}

export interface IVisibleResponse {
    id: number;
}

