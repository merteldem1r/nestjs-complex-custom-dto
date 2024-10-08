import { ApiProperty } from "@nestjs/swagger";
import {
  ArrayNotEmpty,
  IsArray,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
} from "class-validator";
import mongoose from "mongoose";
import { DocumentExistsOrNew } from "src/validators/document-exists-new.validator";

export class CreateDocumentGroupDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  @ArrayNotEmpty()
  @DocumentExistsOrNew()
  documents: mongoose.Types.ObjectId[] | object[];
}
