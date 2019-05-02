
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'recipe 1', dishes_id: 1},
        {id: 2, name: 'recipe 2 ', dishes_id: 2},
        {id: 3, name: 'recipe 3', dishes_id: 3}
      ]);
    });
};
