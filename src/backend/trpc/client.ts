import { createTRPCReact } from "@trpc/react-query";
import { type AppRouter } from "@/src/backend/routers";

export const trpc = createTRPCReact<AppRouter>({})