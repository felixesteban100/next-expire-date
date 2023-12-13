import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function DataTableToolbarLoading() {
    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-1 items-center space-x-2">
                <Input
                    placeholder="Loading..."
                    className="h-8 w-[150px] lg:w-[250px]"
                    disabled={true}
                />
            </div>
            <Button variant={"outline"} disabled={true}>Loading...</Button>
        </div>
    )
};