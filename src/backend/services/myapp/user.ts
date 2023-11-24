import {db} from "@/src/backend/model/db";

export function getUsers() {
  return db.user.findMany()
}

export function addUser(user: { email: string, name: string, password: string }) {
  return db.user.create({
    data: {
      email: user.email,
      name: user.name,
      password: user.password,
    }
  });
}

export function getUser(id: number) {
  return db.book.findUnique({
    where: {id: id}
  });
}
