import {router} from "@/src/backend/routers/trpc";
import {myappRouter} from "@/src/backend/controller/myapp/myapp";


export const appRouter = router({
  
  myapp: myappRouter
  
})


export type AppRouter = typeof appRouter