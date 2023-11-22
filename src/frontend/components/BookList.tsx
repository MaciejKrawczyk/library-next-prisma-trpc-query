import {trpc} from "@/src/backend/trpc/client";

const BookList = () => {
  
  const data = trpc.myapp.book.getBooks.useQuery();
  
  return (
    <>

    </>
  )
}

export default BookList