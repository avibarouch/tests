/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, name: 'david', email: 'david@gmail.com', password: 'david123', phone: '972543216498', job_title: 'CTO' },
  ]);
};
