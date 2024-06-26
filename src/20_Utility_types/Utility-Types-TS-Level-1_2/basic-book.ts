import IBook from "./book";

type BasicBook = Omit<IBook, 'publishingYear' | 'shortDescription'>;

export const basicBook: BasicBook = {author: 'Pablo', name: 'Life of Pablo', numberOfPages: 1989};



