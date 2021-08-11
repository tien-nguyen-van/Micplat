import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import appConfig from '../configs/app.config'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: appConfig.DATABASE.HOST,
      port: appConfig.DATABASE.PORT,
    })
  ]
})

export class DatabaseModule { }