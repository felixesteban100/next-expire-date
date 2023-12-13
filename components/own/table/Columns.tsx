"use client"

import { ColumnDef } from "@tanstack/react-table"

import { DataTableColumnHeader } from "./DataTableColumnHeader"
import { places } from "./data/data"
// import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTableRowActions } from "./DataTableRowActions"
import { Product } from "@/lib/types"
import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

function getColorForDate(inputDate: Date): string {
  const today = new Date();
  const timeDiff = inputDate.getTime() - today.getTime();
  const daysDifference = timeDiff / (1000 * 3600 * 24);

  if (daysDifference <= 3) {
      return 'text-red-500'; // Date is in the past
  } else if (daysDifference <= 10) {
      return 'text-yellow-400'; // Date is within a week
  } else {
      return 'text-green-400'; // Date is more than a week away
  }
}

export const columns: ColumnDef<Product>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  /* {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="id" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  }, */
  {
    accessorKey: "code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Code" />
    ),
    cell: ({ row }) => {
      // const label = labels.find((label) => label.value === row.original.label)

      return (
        <div className="flex space-x-2">
          {/* {label && <Badge variant="outline">{label.label}</Badge>} */}
          <span className="max-w-[500px] truncate font-medium">
            {/* {row.getValue("title")} */}
            {row.getValue("code")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => {
      // const label = labels.find((label) => label.value === row.original.label)

      return (
        <div className="flex space-x-2">
          {/* {label && <Badge variant="outline">{label.label}</Badge>} */}
          <span className="max-w-[500px] truncate font-medium">
            {/* {row.getValue("title")} */}
            {row.getValue("name")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "expire_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Expire Date" />
    ),
    cell: ({ row }) => {
      // const label = labels.find((label) => label.value === row.original.label)

      return (
        <div className="flex space-x-2">
          {/* {label && <Badge variant="outline">{label.label}</Badge>} */}
          <span className={`max-w-[500px] truncate font-medium ${getColorForDate(new Date(row.getValue("expire_date")))}`}>
            {new Date(`${row.getValue("expire_date")}`).toLocaleDateString()}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "place",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Place" />
    ),
    cell: ({ row }) => {
      const place = places.find(
        (place) => place.value === row.getValue("place")
      )

      if (!place) {
        return null
      }

      return (
        <div className="flex items-center">
          {place.icon && (
            <place.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{place.label}</span>
        </div>
      )
    },

    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "image",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Image" />
    ),
    cell: ({ row }) => {
      return (
        <Dialog>
          <DialogTrigger asChild>
            <Image
              width={50}
              height={50}
              src={row.getValue("image")}
              alt={row.getValue("name")}
            />
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>{row.getValue("name")}</DialogTitle>
              <DialogDescription>
                {row.getValue("code")}
              </DialogDescription>
            </DialogHeader>

            <Image
              width={500}
              height={500}
              src={row.getValue("image")}
              alt={row.getValue("name")}
              className="w-auto h-full"
            />

            <DialogFooter>
              Place: {row.getValue("place")}
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )
    },

    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },

  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions<Product> row={row.original} />,
  },
]


/* {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status")
      )

      if (!status) {
        return null
      }

      return (
        <div className="flex w-[100px] items-center">
          {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{status.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  }, */