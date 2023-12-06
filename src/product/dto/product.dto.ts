// product.dto.ts
import { IsString, IsUUID, IsNumber, IsNotEmpty, IsOptional } from 'class-validator';

export class ProductDto {
    @IsUUID(4)
    readonly UUID: string;

    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsOptional()
    readonly description?: string;

    @IsNumber()
    @IsNotEmpty()
    readonly price: number;

    @IsNumber()
    @IsNotEmpty()
    readonly quantity: number;
    
    
}
