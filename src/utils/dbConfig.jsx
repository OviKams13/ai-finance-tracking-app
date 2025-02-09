import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const sql = neon('postgresql://neondb_owner:npg_xSkTprmR06Vc@ep-young-salad-a84fqsmc-pooler.eastus2.azure.neon.tech/test%20database?sslmode=require');

export const db = drizzle(sql, { schema });
