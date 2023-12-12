export interface DrinkType {
    id: number,
    name: string,
    photo: string,
    calories: number | string,
    available: boolean,
    ingredients: string[],
    tags: string[]
}

export interface TagType {
    name: string,
    photo: string
}

export interface BottleType {
    id: number,
    name: string,
    photo: string
}