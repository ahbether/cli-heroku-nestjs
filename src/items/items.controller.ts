import { Get,UseGuards } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('items')
export class ItemsController {

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async findAll(): Promise<any> {
      return {test:'TEST'};
    }

    
}
