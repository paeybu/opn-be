import { IsNotEmpty, IsDateString, IsIn } from 'class-validator';

export class LocationDto {
  @IsNotEmpty()
  @IsDateString()
  timefrom: string;

  @IsDateString()
  @IsNotEmpty()
  timeto: number;

  @IsNotEmpty()
  detail: string;

  @IsNotEmpty()
  @IsIn(['INDOOR', 'OUTDOOR', 'HOME', 'TRAVELLING'])
  locationType: string;

  @IsNotEmpty()
  location: string;
}
