import { eq } from "drizzle-orm";
import { db } from "../db";
import { usersTable } from "../db/schema";

export class UserRepository {
  async findMany() {
    const users = await db.select().from(usersTable);
    return users;
  }

  async findById(id: number) {
    const result = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.id, id));
    return result[0] ?? null;
  }
}
