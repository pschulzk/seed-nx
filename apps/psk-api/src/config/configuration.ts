export default () => ({
  isProduction: process.env.NODE_ENV === 'production',
  port: parseInt(process.env.PORT, 10),
  database: {
    url: process.env.DATABASE_URL,
  },
})
