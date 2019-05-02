
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {id: 1, name: 'dish 1'},
        {id: 2, name: 'dish 2 '},
        {id: 3, name: 'dish 3'}
      ]);
    });
};
