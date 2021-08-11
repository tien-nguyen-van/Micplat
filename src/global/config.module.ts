import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import appConfig from '../configs/app.config'

@Module({
  imports: [ConfigModule.forRoot({
    load: [() => appConfig]
  })],
})

export class AppConfigModule { }