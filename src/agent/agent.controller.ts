import { Controller, Get, Post, Body} from '@nestjs/common';
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
  genrateConfigJson() {
    return {
      data: {
        date: {
          created_at: '2025-04-17',
          updated_at: '2025-04-17',
        },
        descriptions: {
          app_name: 'DBQuery_Agent',
          app_description:
            'An agent that initiates database query operations using plain texts',
          app_logo: 'https://cdn-icons-png.flaticon.com/512/7286/7286142.png',
          app_url: 'https://dbquery-agent.onrender.com',
          background_color: '#fff',
        },
        is_active: true,
        integration_type: 'modifier',
        integration_category: 'Task Automation',
        key_features: ['Plain test database queries'],
        author: 'Diligwe',
        settings: [
          {
            label: 'Language',
            type: 'text',
            required: true,
            default: 'English',
          },
        ],
        target_url: 'https://dbquery-agent.onrender.com',
        tick_url: 'https://dbquery-agent.onrender.com',
      },
    };
  }
}
