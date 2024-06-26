import IBook from "./book";

interface IBasicBook extends Omit<IBook, 'publishingYear' | 'shortDescription'>{}

export const basicBook2: IBasicBook = {author: 'Pablo', name: 'Life of Pablo', numberOfPages: 1989}