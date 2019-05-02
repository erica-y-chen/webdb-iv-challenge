
exports.up = function(knex, Promise) {
  
    return knex.schema
    .createTable('dishes', tbl => {
        tbl.increments();
        tbl
            .string('name', 128)
            .notNullable()
    })
    .createTable('recipes', tbl => {
        tbl.increments();
        tbl
            .string('name', 128)
            .notNullable()
        tbl 
            .integer('dishes_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('dishes')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
    })

    .createTable('dishes_recipes', tbl => {
        tbl.increments();
        tbl
            .integer('dishes_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('dishes')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')

        tbl
            .integer('recipes_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('dishes')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
    })
};

exports.down = function(knex, Promise) {
  
    return knex.schema
        .dropTableIfExists('dishes')
        .dropTableIfExists('recipes')
};
