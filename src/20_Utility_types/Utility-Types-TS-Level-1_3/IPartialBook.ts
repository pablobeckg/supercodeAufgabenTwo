import IBook from "./book";

interface IPartialBook extends Partial<IBook> {

}

export const partialBook2: IPartialBook = {name: 'Life of Pablo'}

