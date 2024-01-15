import { ApiProperty } from "@nestjs/swagger";

export class CreateTodoDto {
  @ApiProperty()
  nameTask: string;

  @ApiProperty()
  description: string;
  }