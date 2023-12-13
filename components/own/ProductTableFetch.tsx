import { getProducts } from "@/lib/data";
import ProductTable from "./ProductTable";
import { columns } from "./table/Columns";

export default async function ProductTableFetch() {
    const data = await getProducts()

    return (
        <ProductTable data={JSON.parse(JSON.stringify(data))} columns={columns} />
    )
}