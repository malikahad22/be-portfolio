// strapi-api/config/database.js
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: "localhost",
      port: 5432,
      database: "portfolio",
      user: "postgres",
      password: "12345678",
    },
    debug: false,
  },
});
