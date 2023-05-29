// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: "mysql",
    connection: {
      database: "avitest",
      user: "root",
      password: "rootpassword"
    },
    seeds: {
      directory: __dirname + '/seeds',
  },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },


};
