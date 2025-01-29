import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'outings'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('organizer_id').unsigned().references('users.id')
      table.integer('state_id').unsigned().references('states.id')
      table.integer('location_id').unsigned().references('locations.id')
      table.integer('campus_id').unsigned().references('campuses.id')
      table.string('name').notNullable()
      table.dateTime('startDate').notNullable()
      table.integer('duration').notNullable()
      table.dateTime('registrationMaxDate').notNullable()
      table.integer('maxInscriptions').notNullable()
      table.string('outingInfo').nullable()
      table.string('reason').nullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
