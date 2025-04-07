import { eq } from "drizzle-orm";
import { db } from "../db";
import { usersTable } from "../db/schema";

export const userRepository = {
  async findMany() {
    const result = await db.select().from(usersTable);
    return result;
  },

  async findById(id: number) {
    const result = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.id, id));
    return result[0] ?? null;
  },
};
