export default {
  dialect: "postgresql",
  schema: "./utils/schema.jsx",
  out: "./drizzle",
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_xSkTprmR06Vc@ep-young-salad-a84fqsmc-pooler.eastus2.azure.neon.tech/test%20database?sslmode=require',
    connectionString:process.env.NEXT_PUBLIC_DATABASE_URL,
  },
};
