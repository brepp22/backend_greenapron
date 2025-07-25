/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
// seeds/20230427000000_users_seed.js

const bcrypt = require('bcryptjs');

exports.seed = async function(knex) {
  await knex('users').del();

  const users = [
    {
      name: 'John Doe',
      partner_number: '3344556',
      role: 'Barista',
      password: await bcrypt.hash('starbucks123', 8),
      photo: 'https://tchibo.us/cdn/shop/articles/barista.jpg?crop=center&height=1200&v=1689929314&width=1200'
    },
    {
      name: 'Jane Smith',
      partner_number: '9988776',
      role: 'Shift Supervisor',
      password: await bcrypt.hash('password456', 8)
    }
  ];

  return knex('users').insert(users);
};

