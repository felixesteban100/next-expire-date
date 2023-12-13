"use client"

// import { Row } from "@tanstack/react-table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { deleteProduct } from "@/lib/data"
import { Product } from "@/lib/types"
import Link from "next/link"
import { MoreHorizontal } from "lucide-react"
// import { productSchema } from "./AddProductForm"

interface DataTableRowActionsProps<TData> {
  // row: Row<TData>
  row: Product
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  // const currentProduct = productSchema.parse(row)
  // const currentProduct: Product = {
  //   _id: row.original._id,
  //   code: row.getValue("code"),
  //   name: row.getValue('name'),
  //   expire_date: row.getValue('expire_date'),
  //   place: row.getValue('place'),
  // }

  // const currentProduct: Product = {
  //   _id: row._id,
  //   code: row.code,
  //   name: row.name,
  //   expire_date: row.expire_date,
  //   place: row.place,
  // }

  function copyText(entryText: string) {
    navigator.clipboard.writeText(entryText);
    toast({
      title: "copied values:",
      description: (
        <pre className="rounded-md  p-4">
          <code className="">{entryText}</code>
        </pre>
      ),
    })
  }

  function forDelete(productInfo: Product) {
    deleteProduct(productInfo)

    toast({
      title: "product deleted",
      description: (
        <pre className="rounded-md  p-4">
          <code className="">{JSON.stringify(productInfo, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem asChild className="cursor-pointer hover:bg-secondary">
          <Link
            href={`/products/${row._id}`}
          >
            Edit
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer hover:bg-secondary"
          onClick={() => copyText(JSON.stringify(row, null, 2))}
        >
          Make a copy
        </DropdownMenuItem>
        {/* <DropdownMenuItem>Favorite</DropdownMenuItem> */}
        {/* <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Labels</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuRadioGroup value={product.name}>
              {labels.map((label) => (
                <DropdownMenuRadioItem key={label.value} value={label.value}>
                  {label.label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub> */}

        {/* <DropdownMenuSeparator /> */}

        {/* ADD A MODAL HERE TO CONFIRM THE DELETION */}

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <div className="cursor-pointer relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 w-full p-0 text-start text-destructive-foreground bg-destructive hover:bg-destructive/50 ">Delete</div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the product and remove your it from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => forDelete(row)}>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}