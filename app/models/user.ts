import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import type { BelongsTo, HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import {
  column,
  BaseModel,
  belongsTo,
  hasMany,
  manyToMany,
  beforeCreate,
} from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import Outing from './outing.js'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare email: string

  @column({ serializeAs: null })
  declare password: string

  @column()
  declare firstName: string | null

  @column()
  declare lastName: string | null

  @column()
  declare active: boolean

  @column()
  declare phone: string

  @manyToMany(() => Outing, {
    pivotTimestamps: true,
  })
  declare outings: ManyToMany<typeof Outing>

  @hasMany(() => Outing)
  declare outing: HasMany<typeof Outing>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}
