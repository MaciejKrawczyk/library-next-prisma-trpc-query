import {router} from "@/src/backend/routers/trpc";
import {bookRouter} from "@/src/backend/controller/myapp/book";


export const myappRouter = router({
  
  book: bookRouter
  
})


export type MyappRouter = typeof myappRouter