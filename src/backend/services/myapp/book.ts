import {db} from "@/src/backend/model/db";

export function getBooks() {
  return db.book.findMany();
}

export function addBook(book: { title: string; author: string; }) {
  return db.book.create({
    data: {
      title: book.title,
      author: book.author,
    }
  });
}

export function getBook(id: number) {
  return db.book.findUnique({
    where: {id: id}
  });
}

// export function updateBook(id: number, book: { title: string; author: string; }) {
//   return db.book.update({
//     where: {id: id},
//     data: {
//       title: book.title,
//       author: book.author,
//     }
//   })
// }

export function deleteBook(id: number) {
  return db.book.delete({
    where: {id: id}
  });
}