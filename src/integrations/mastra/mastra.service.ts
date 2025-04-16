import { createGroq } from '@ai-sdk/groq';
import { Agent, Mastra } from '@mastra/core';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { z } from 'zod';

@Injectable()
export class MastraService {
  private groq = createGroq({
    apiKey: this.configService.getOrThrow('GROQ_AI_API_KEY'),
  });

  private DBAgent = new Agent({
    name: 'db-agent',
    instructions: 'You are a helpful assistant.',
    model: this.groq('deepseek-r1-distill-qwen-32b'),
  });

  private mastra = new Mastra({
    agents: { DBAgent: this.DBAgent },
  });

  private schema = z.object({});

  constructor(private configService: ConfigService) {}

  async generateDBQuery(prompt: string) {
    try {
      const agent = this.mastra.getAgent('DBAgent');
      const response = await agent.generate(
        [{ role: 'user', content: prompt }],
        { output: this.schema },
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
