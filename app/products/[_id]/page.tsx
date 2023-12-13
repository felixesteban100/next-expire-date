import EditProductFormFetch from "@/components/own/EditProductFormFetch";
import { Separator } from "@/components/ui/separator";
import { Suspense } from "react";

export default function Page({ params }: { params: { _id: string }}) {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Edit</h3>
                <p className="text-sm text-muted-foreground">
                    Update the products features.
                </p>
            </div>
            <Separator />
            <Suspense fallback={<>Loading...</>}>
                <EditProductFormFetch _id={params._id} />
            </Suspense>
        </div>
    )
}