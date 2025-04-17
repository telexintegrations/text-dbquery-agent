import { Injectable } from '@nestjs/common';

@Injectable()
export class AgentService {
  create(prompt: string) {
    return prompt;
  }
}
