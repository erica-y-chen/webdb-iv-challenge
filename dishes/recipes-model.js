const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findById,
    addRecipe, 
  };

function find() {
    return db('recipes');
}

function findById(id) {
    return db('dishes')
        .where({ id })
        .first();
}

function addRecipe(recipe) {
    return db('recipes')
        .insert(recipe, 'recipes')
        .then(([id]) => {
            return findbyId(id);
        });
}

function addRecipe(recipe) {
    return db('recipes')
        .insert(recipe, 'recipes')
        .then(([id]) => {
            return findbyId(id);
        });
}