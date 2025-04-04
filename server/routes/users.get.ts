import { db } from "~~/src/db";
import { usersTable } from "~~/src/db/schema";

export default defineEventHandler(async (event) => {
  const users = await db.select().from(usersTable);
  return users;
});
