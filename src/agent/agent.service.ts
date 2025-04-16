import { Injectable } from '@nestjs/common';

@Injectable()
export class AgentService {
  create(prompt: string) {
    return prompt;
  }

  findOne(id: number) {
    return `This action returns a #${id} agent`;
  }
}
