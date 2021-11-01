import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, ValidateNested } from 'class-validator';
import { LocationDto } from './location.dto';

export class CreatePatientDto {
  @IsNotEmpty()
  gender: string;

  @IsNotEmpty()
  age: number;

  @IsNotEmpty()
  occupation: string;

  @IsArray()
  @ValidateNested()
  @Type(() => LocationDto)
  locations: LocationDto[];
}
