// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

import { z } from "zod";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `visionary_vault_${name}`);

export const images = createTable(
  "image",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }).notNull(),
    url: varchar("url", { length: 1024 }).notNull(),
    userId: varchar("userId", { length: 256 }).notNull(),

    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt"),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  }),
);

export type SelectImage = typeof images.$inferSelect;

export const imageSchema: z.ZodType<SelectImage> = z.object({
  id: z.coerce.number(),
  name: z.string(),
  url: z.string().url(),
  userId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.nullable(z.coerce.date()),
});

export function isImage(data: unknown): data is SelectImage {
  const hasId =
    (data as SelectImage).id !== undefined &&
    typeof (data as SelectImage).id === "number";

  const hasName =
    (data as SelectImage).name !== undefined &&
    typeof (data as SelectImage).name === "string";

  const hasUrl =
    (data as SelectImage).url !== undefined &&
    typeof (data as SelectImage).url === "string";

  const hasCreatedAt = (data as SelectImage).createdAt !== undefined;

  const hasUserId =
    (data as SelectImage).userId !== undefined &&
    typeof (data as SelectImage).userId === "string";

  const hasUpdatedAt = typeof (data as SelectImage).updatedAt !== "undefined";

  return (
    hasId && hasName && hasUrl && hasCreatedAt && hasUserId && hasUpdatedAt
  );
}
