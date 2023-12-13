import AddProductForm from "@/components/own/AddProductForm";
import { Separator } from "@/components/ui/separator";

export default function Page(){
    return(
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Add</h3>
                <p className="text-sm text-muted-foreground">
                    Add the products
                </p>
            </div>
            <Separator />
            <AddProductForm />
        </div>
    )
}