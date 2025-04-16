import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AgentService } from './agent.service';
import { ReqPayloadDto } from './dto/req-payload.dto';

@Controller('agent')
export class AgentController {
  constructor(private readonly agentService: AgentService) {}

  @Post('generate')
  create(@Body() reqBody: ReqPayloadDto) {
    if (!reqBody.message) {
      throw new Error('Prompt is required');
    }

    // const channelId = reqBody.channel_id;
    return this.agentService.create(reqBody.message);
  }

  @Get('config-json')
  findOne(@Param('id') id: string) {
    return this.agentService.findOne(+id);
  }
}
