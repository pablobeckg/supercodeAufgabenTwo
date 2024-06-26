import IBook from "./book";

type ReadOnlyBook = Readonly<IBook>;

const readonlyBook: ReadOnlyBook = {author: 'Pablo', name: 'Life of Pablo', publishingYear: '1989', shortDescription: 'Pablo is super', numberOfPages: 1989};
// readonlyBook.author = 'hola'
export default readonlyBook