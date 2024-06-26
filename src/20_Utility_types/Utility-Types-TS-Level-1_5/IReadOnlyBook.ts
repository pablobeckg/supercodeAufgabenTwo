import IBook from "./book";

interface IReadOnlyBook extends Readonly<IBook>{};

export const readonlyBook2: IReadOnlyBook = {author: 'Pablo', name: 'Life of Pablo', publishingYear: '1989', shortDescription: 'Pablo is super', numberOfPages: 1989};
// readonlyBook2.numberOfPages = 1923;