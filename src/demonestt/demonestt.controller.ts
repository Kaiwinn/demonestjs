import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateDemonesttDto } from './dto/create-demonestt.dto';
import { UpdateDemonesttDto } from './dto/update-demonestt.dto';
import { DemonesttService } from './demonestt.service';

@Controller('demonestt')
export class DemonesttController {
  constructor(private readonly demonesttService: DemonesttService) {}

  @Get()
  getOneDemotest(@Query('weapon') weapon: 'stars' | 'numchucks') {
    return this.demonesttService.getKaiii(weapon);
  }

  @Get()
  getOneDemotest2(@Query('type') type: string) {
    console.log(type);
    return [
      {
        type,
      },
    ];
  }
  @Get(':id')
  getOneKaiii(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.demonesttService.getKaiii2(id);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  @Post()
  createDemotest(@Body() createDemotest: CreateDemonesttDto) {
    return this.demonesttService.createKaiii(createDemotest);
  }

  @Put(':id')
  updateDemotest(
    @Param('id') id: string,
    @Body() updateDemotest: UpdateDemonesttDto,
  ) {
    return this.demonesttService.updateKaiii(+id, updateDemotest);
  }

  @Delete(':id')
  removeDemotest(@Param('id') id: string) {
    return this.demonesttService.removeKaiii(+id);
  }
}
