import { Module } from '@nestjs/common';
import { ConfigCoreModule } from './config/config.module';
import { LoggerModule } from './logger';
import packageJson from '../../package.json';
@Module({
  imports: [
    LoggerModule.forRoot({
      console: process.env.LOG_CONSOLE,
      appName: packageJson.name,
      level: process.env.LOG_LEVEL,
      fileParams: process.env.LOG_PATH
        ? {
            path: process.env.LOG_PATH,
            size: process.env.LOG_SIZE,
            rotateInterval: process.env.LOG_INTERVAL,
          }
        : undefined,
      lokiParams: process.env.LOG_LOKI_URL
        ? {
            url: process.env.LOG_LOKI_URL,
            username: process.env.LOG_LOKI_USERNAME,
            password: process.env.LOG_LOKI_PASSWORD,
            batching: process.env.LOG_LOKI_BATCHING,
            batchInterval: process.env.LOG_LOKI_BATCH_INTERVAL,
          }
        : undefined,
      auditParams: {
        context: process.env.LOG_AUDIT,
      },
    }),
    ConfigCoreModule,
  ],
  exports: [],
})
export class CoreModule {}
