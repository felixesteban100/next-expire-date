import { getProductByIdMongo } from "@/lib/data";
import { notFound } from 'next/navigation';
import EditProductForm from "./EditProductForm";

type EditProductFormFetchProps = {
    _id: string;
}

export default async function EditProductFormFetch({_id}: EditProductFormFetchProps) {
    const product = await getProductByIdMongo(_id)

    if(!product){
        notFound()
    }

    return (
        <EditProductForm product={JSON.parse(JSON.stringify(product))}/>
    )
}