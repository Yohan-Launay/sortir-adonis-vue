import { DateTime } from 'luxon'
import type { BelongsTo, HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import {
  column,
  BaseModel,
  belongsTo,
  hasMany,
  manyToMany,
  beforeCreate,
} from '@adonisjs/lucid/orm'
import Outing from './outing.js'

export default class State extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @hasMany(() => Outing)
  declare outing: HasMany<typeof Outing>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
