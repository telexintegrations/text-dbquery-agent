import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MastraModule } from './integrations/mastra/mastra.module';
import { ConfigModule } from '@nestjs/config';
import { AgentModule } from './agent/agent.module';

@Module({
  imports: [MastraModule, ConfigModule.forRoot({ isGlobal: true }), AgentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
