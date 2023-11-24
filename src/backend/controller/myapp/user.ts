import { publicProcedure, router } from "@/src/backend/routers/trpc";
import {createUser, getUserById, getUserByUsername, getUsers} from "@/src/backend/services/myapp/user";
import { z } from "zod";

const UserInput = z.object({
  username: z.string(),
  password: z.string(),
})

const UserIdInput = z.object({
  id: z.number(),
})

export const userRouter = router({
  
  getUsers: publicProcedure.query(async () => {
    return getUsers()
  }),
  
  getUserById: publicProcedure
    .input(UserIdInput)
    .query(async ({ input }) => {
      return getUserById(input.id)
    }),
  
  getUserByUsername: publicProcedure
    .input(z.string())
    .query(async ({ input }) => {
      return getUserByUsername(input)
    }),
  
  createUser: publicProcedure
    .input(UserInput)
    .mutation(async ({ input }) => {
      return createUser(input)
    }),
})

export type UserRouter = typeof userRouter