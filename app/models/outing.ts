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
import User from './user.js'
import State from './state.js'
import Location from './location.js'
import Campus from './campus.js'

export default class Outing extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare startDate: DateTime

  @column()
  declare duration: number

  @column()
  declare registrationMaxDate: DateTime

  @column()
  declare maxInscriptions: number

  @column()
  declare outingInfo: string

  @column()
  declare reason: string

  @manyToMany(() => User, {
    pivotTimestamps: true,
  })
  declare users: ManyToMany<typeof User>

  @belongsTo(() => User)
  declare organizer: BelongsTo<typeof User>

  @belongsTo(() => State)
  declare state: BelongsTo<typeof State>

  @belongsTo(() => Location)
  declare location: BelongsTo<typeof Location>

  @belongsTo(() => Campus)
  declare campus: BelongsTo<typeof Campus>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
