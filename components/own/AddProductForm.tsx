"use client"

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { toast } from "../ui/use-toast"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { cn } from "@/lib/utils"
import { CalendarIcon, CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { Calendar } from "../ui/calendar"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "../ui/command"
import { addProduct } from "@/lib/data"
import { places } from "./table/data/data"
import * as z from "zod"

/* the problem is that I have to declare the schema in the same file... :`| */
const productSchemaToUse = z.object({
    code: z.number({
        required_error: "A code is required.",
    }),
    name: z.string({
        required_error: "A name is required.",
    }),
    expire_date: z.date({
        required_error: "A expiring date is required.",
    }),
    place: z.string({
        required_error: "A place is required.",
    }),
    image: z.string({
        required_error: "An image is required"
    })
})

export default function AddProductForm() {
    const form = useForm<z.infer<typeof productSchemaToUse>>({
        resolver: zodResolver(productSchemaToUse),
    })

    function onSubmit(values: z.infer<typeof productSchemaToUse>) {
        addProduct(values)

        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="rounded-md p-4">
                    <code className="">{JSON.stringify(values, null, 2)}</code>
                </pre>
            ),
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="code"
                    render={({ field }) => (
                        <FormItem className="w-[100%] mx-auto">
                            <FormLabel>Code</FormLabel>
                            <FormControl>
                                <Input type="number" placeholder={"000000"} {...field} onChange={(e) => field.onChange(parseInt(e.target.value))} />
                            </FormControl>
                            <FormDescription>
                                Insert code
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem className="w-[100%] mx-auto">
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder={"[name]"} {...field} />
                            </FormControl>
                            <FormDescription>
                                Insert name
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="expire_date"
                    render={({ field }) => (
                        <FormItem className="flex flex-col w-full">
                            <FormLabel>Expire date </FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "pl-3 text-left font-normal",
                                                !field.value && "text-muted-foreground"
                                            )}
                                        >
                                            {field.value ? (
                                                format(field.value, "PPP")
                                            ) : (
                                                <span>Pick a date</span>
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        disabled={(date) =>
                                                /* date > new Date("1900-01-01") || */ date < new Date()
                                        }
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormDescription>
                                Your date of birth is used to calculate your age.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="place"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>Place</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            className={cn(
                                                "justify-between",
                                                !field.value && "text-muted-foreground"
                                            )}
                                        >
                                            {field.value
                                                ? places.find(
                                                    (place) => place.value === field.value
                                                )?.label
                                                : "Select place"}
                                            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Command>
                                        <CommandInput placeholder="Search place..." />
                                        <CommandEmpty>No place found.</CommandEmpty>
                                        <CommandGroup>
                                            {places.map((place) => (
                                                <CommandItem
                                                    value={place.label}
                                                    key={place.value}
                                                    onSelect={() => {
                                                        form.setValue("place", place.value)
                                                    }}
                                                >
                                                    <CheckIcon
                                                        className={cn(
                                                            "mr-2 h-4 w-4",
                                                            place.value === field.value
                                                                ? "opacity-100"
                                                                : "opacity-0"
                                                        )}
                                                    />
                                                    <div className="flex gap-2">
                                                        {place.label}
                                                        <place.icon />
                                                    </div>
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                            <FormDescription>
                                This is where the product is placed.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                        <FormItem className="w-[100%] mx-auto">
                            <FormLabel>Image</FormLabel>
                            <FormControl>
                                <Input placeholder={"[image_url]"} {...field} />
                            </FormControl>
                            <FormDescription>
                                Insert image
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="w-full flex justify-end">
                    <Button type="submit">Add product</Button>
                </div>
            </form>
        </Form>

    )
}
