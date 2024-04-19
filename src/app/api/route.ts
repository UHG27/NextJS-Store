import { getProducts } from "../service/shopify"


export async function GET(){
    const products = await getProducts()

    return Response.json({products})

}