import { PartialType } from '@nestjs/mapped-types';
import { CreateDemonesttDto } from './create-demonestt.dto';

export class UpdateDemonesttDto extends PartialType(CreateDemonesttDto) {}
