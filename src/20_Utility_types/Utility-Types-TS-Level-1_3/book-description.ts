import IBook from "./book";

type BookDescription = Pick<IBook, 'name' | 'shortDescription'>;

export const bookDescription: BookDescription = {name: 'Pablo', shortDescription: 'Pablo is super nice'}