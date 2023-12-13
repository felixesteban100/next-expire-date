import ProductTableFetch from "@/components/own/ProductTableFetch";
import ProductTableLoading from "@/components/own/loading/ProductTableLoading";
import { Separator } from "@/components/ui/separator";
import { Suspense } from "react";

export default function Page() {
    return (
        <div className="space-y-6 w-full">
            <div>
                <h3 className="text-lg font-medium">List</h3>
                <p className="text-sm text-muted-foreground">
                    Watch all the products
                </p>
            </div>
            <Separator />
            {/* MAKE THE COMPONENT LIKE THIS ONE https://ui.shadcn.com/examples/tasks */}
            <Suspense fallback={<ProductTableLoading/>}>
                <ProductTableFetch />
            </Suspense>
        </div>
    )
}