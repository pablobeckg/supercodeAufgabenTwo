import { Fiction, NonFiction, ScienceFiction } from "./module/books";

Fiction.addBook('To Kill a Mockingbird');
Fiction.addBook('1984');
Fiction.displayAllBooks();

NonFiction.addBook('Sapiens');
NonFiction.addBook('Educated');
NonFiction.displayAllBooks();

ScienceFiction.addBook('Dune');
ScienceFiction.addBook('Neuromancer');
ScienceFiction.displayAllBooks();

Fiction.removeBook('1984');
Fiction.displayAllBooks();

NonFiction.removeBook('Educated');
NonFiction.displayAllBooks();

ScienceFiction.removeBook('Dune');
ScienceFiction.displayAllBooks();

Fiction.addBook('The Great Gatsby');
Fiction.addBook('Moby Dick');
Fiction.displayAllBooks();

NonFiction.addBook('The Immortal Life of Henrietta Lacks');
NonFiction.addBook('Becoming');
NonFiction.displayAllBooks();

ScienceFiction.addBook('Foundation');
ScienceFiction.addBook('The Left Hand of Darkness');
ScienceFiction.displayAllBooks();
