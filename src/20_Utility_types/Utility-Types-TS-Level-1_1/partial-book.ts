import IBook from "./book";

export type PartialBook = Partial<IBook>;

export const partialBook: PartialBook = {author: 'Pablo', name: 'Life of Pablo'}
