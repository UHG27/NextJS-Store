import { ProductsWrapper } from "../ProductsWrapper/ProductWrapper"
import { getCollections, getCollectionsProducts } from "app/app/service/shopify/collections"
import { getProducts } from "app/app/service/shopify/products"

interface CategoryProps {
    params: {
        categories: string[]

        searchParams: string
    }
}

export default async function Category(props: CategoryProps){
    

    const { categories } = props.params

    let products = []
    const collections = await getCollections()
    if(categories?.length > 0) {
        const selectedCollectionId = collections.find((collection) => collection.handle === categories[0]).id
        products = await getCollectionsProducts(selectedCollectionId)
    }else{
        products = await getProducts()
    }
    console.log(products)

    return(
        <ProductsWrapper products={products} />
    );
}