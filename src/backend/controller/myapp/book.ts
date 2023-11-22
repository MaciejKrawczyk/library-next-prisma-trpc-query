import {publicProcedure, router} from "@/src/backend/routers/trpc";
import {addBook, deleteBook, getBook, getBooks,
  // updateBook
} from "@/src/backend/services/myapp/book";

export const bookRouter = router({
  
  getBooks: publicProcedure.query(async () => { return getBooks() }),
  
  addBook: publicProcedure.mutation(async (book) => { return addBook(book) }),
  
  getBook: publicProcedure.query(async (id) => { return getBook(id) }),
  
  // updateBook: publicProcedure.mutation(async (book) => { return updateBook(book) }),
  
  deleteBook: publicProcedure.mutation(async (id) => { return deleteBook(id) }),
  
})


export type BooksRouter = typeof bookRouter