import { Product } from './product';

export class ProductData 
{
    productList : Product[] = [{productId:1001,name:'Mobile',brand:'MI',price:10000},
                               {productId:1002,name:'Laptop', brand:'Dell',price:15000},
                               {productId:1003,name:'TV',brand:'LG',price:20000},
                               {productId:1003,name:'TV',brand:'LG',price:20000}
                              ];

        getProductList():Product[]
        {
            return this.productList;
        }
}
