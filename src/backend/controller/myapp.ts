import {router} from "@/src/backend/routers/trpc";
import {bookRouter} from "@/src/backend/controller/myapp/book";
import {userRouter} from "@/src/backend/controller/myapp/user";


export const myappRouter = router({
  
  book: bookRouter,
  user: userRouter
  
})


export type MyappRouter = typeof myappRouter