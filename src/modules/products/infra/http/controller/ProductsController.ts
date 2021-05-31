import { Request, Response } from 'express';

import { container } from 'tsyringe';
import CreateProductService from '@modules/products/services/CreateProductService';

import FindProductService from '@modules/products/services/FindProductService';

export default class ProductsController {

  public async show(request: Request, response: Response): Promise<Response> {
    const { name } = request.params;

    const FindProducts = container.resolve(FindProductService);

    const product = await FindProducts.execute({ name });

    return response.json(product);
  }


  public async create(request: Request, response: Response): Promise<Response> {
    const { name, price, quantity } = request.body;

    const createProduct = container.resolve(CreateProductService);

    const product = await createProduct.execute({ name, price, quantity });

    return response.json(product);
  }
}
