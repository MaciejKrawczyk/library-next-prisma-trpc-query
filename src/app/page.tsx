'use client'
import {trpc} from "@/src/backend/trpc/client";


export default function Home() {
  const { data, isLoading } = trpc.myapp.book.getBooks.useQuery();
  
  if (isLoading) {
    return <div>Loading...</div>; // or any other loading state representation
  }
  
  console.log("monted");
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data?.map((book) => (
        <div key={book.title} className={'block'}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
        </div>
      ))}
    </main>
  );
}