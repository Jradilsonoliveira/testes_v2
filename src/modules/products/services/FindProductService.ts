import { inject, injectable } from 'tsyringe';

import IProductRepository from '@modules/products/infra/typeorm/repositories/ProductsRepository';
import ICustomersRepository from '@modules/customers/repositories/ICustomersRepository';
import Product from '../infra/typeorm/entities/Product';
import IProductsRepository from '../repositories/IProductsRepository';

interface IRequest {
  name: string;
}

@injectable()
class FindProductService {
  constructor(
    @inject('ProductsRepository')
    private ProductsRepository: IProductsRepository,
  ) {}

  public async execute({ name }: IRequest): Promise<Product | undefined> {
    const Product = await this.ProductsRepository.findByName(name);

    return Product;
  }
}

export default FindProductService;
