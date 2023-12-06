// product.service.ts
import { Injectable } from '@nestjs/common';
import { ProductDto } from './product.dto';
import { PrismaService } from 'chemin/vers/prisma.service'; 

@Injectable()
export class ProductService {
    constructor(private readonly prisma: PrismaService) {}

    async createProduct(productDto: ProductDto): Promise<any> {
        // Logique pour créer un nouveau produit
        const newProduct = await this.prisma.product.create({
            data: productDto,
        });
        return newProduct;
    }

    
}
