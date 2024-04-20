import { ProductsWrapper } from "../ProductsWrapper/ProductWrapper"
import { getProducts } from "app/app/service/shopify/products"

interface CategoryProps {
    params: {
        categories: string[]

        searchParams: string
    }
}

export default async function Category(props: CategoryProps){
    
    const products = await getProducts()

    const { categories } = props.params

    // throw new Error('Error: Boom!')
    
    return(
        <ProductsWrapper products={products} />
    )
}