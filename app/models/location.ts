import { DateTime } from 'luxon'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { column, BaseModel, hasMany } from '@adonisjs/lucid/orm'
import Outing from './outing.js'

export default class Location extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @hasMany(() => Outing)
  declare outing: HasMany<typeof Outing>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
