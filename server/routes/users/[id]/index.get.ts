import { eq } from "drizzle-orm";
import { db } from "~~/src/db";
import { usersTable } from "~~/src/db/schema";

export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, "id"));

  const result = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.id, id));

  if (result.length === 0) {
    return sendError(event, createError({ status: 404 }));
  }
  return result[0];
});
