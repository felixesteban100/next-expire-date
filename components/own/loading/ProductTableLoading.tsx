import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import DataTablePaginationLoading from "./DataTablePaginationLoading"
import DataTableToolbarLoading from "./DataTableToolbarLoading"

export default function ProductTableLoading() {
    return (
        <div className="space-y-4 animate-pulse">
            <DataTableToolbarLoading />
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead colSpan={1} className="py-2">
                                0
                            </TableHead>
                            <TableHead colSpan={1} className="py-2">
                                Name
                            </TableHead>
                            <TableHead colSpan={1} className="py-2">
                                Expire Date
                            </TableHead>
                            <TableHead colSpan={1} className="py-2">
                                Place
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {new Array(5).fill(undefined).map((_, indexrow) => (
                            <TableRow key={indexrow}>
                                <TableCell key={`${indexrow}-in`} className="py-5">
                                    0
                                </TableCell>
                                {new Array(4).fill(undefined).map((_, indexcell) => (
                                    <TableCell key={`${indexrow}-${indexcell}`} className="py-5">
                                        Loading cell...
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <DataTablePaginationLoading />
        </div>
    )
};
