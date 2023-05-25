/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    if (!await knex.schema.hasTable('users')) {
        await knex.schema.createTable('users', (t) => {
            t.increments('id');
            t.string('name', 255).notNullable();
            t.string('email', 255).notNullable();
            t.string('password', 255).notNullable();
            t.string('phone', 12).nullable;
            t.string('job_title', 255).nullable();
            
            t.timestamp('created_at',true);

            t.index('id');
        });
    }    
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    knex.schema.dropTable('users');  
};
