import IBook from "./book";

interface IBookDescription extends Pick<IBook, 'name' | 'shortDescription'> {};

export const bookDescription2: IBookDescription = {name: 'Life of Pablo', shortDescription: 'Pablo is cool'}