import {publicProcedure, router} from "@/src/backend/routers/trpc";
import {getUser, getUsers} from "@/src/backend/services/myapp/user";

export const bookRouter = router({
  
  getUsers: publicProcedure.query(async () => { return getUsers() }),
  
  getUser: publicProcedure.query(async (id) => { return getUser(id) }),
  
  addUser: publicProcedure.mutation(async (user) => { return getUser(user) }),
  
})


export type BooksRouter = typeof bookRouter