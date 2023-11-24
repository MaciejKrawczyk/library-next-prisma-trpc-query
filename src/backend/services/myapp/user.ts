import {db} from "@/src/backend/model/db";
import bcrypt from 'bcrypt'


export async function createUser(data: {username: string, password: string }) {
  
  const hashedPassword = await bcrypt.hash(data.password, 10)
  
  return db.user.create({
    data: {
      username: data.username,
      password: hashedPassword
    }
  })
}


export function verifyPassword(password: string, hash: string) {
  return true
}


export function getUsers() {
  return db.user.findMany()
}

export function getUserById(id: number) {
  return db.user.findUnique({
    where: {id: id}
  }).catch(() => undefined);
}

export function getUserByUsername(username: string) {
  return db.user.findUnique({
    where: {username: username}
  }).catch(() => undefined);
}