"use server"

import { z } from "zod";
import { ObjectId } from "mongodb";

export const productSchema = z.object({
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

const objectIdType = z.object({
    _id: z.instanceof(ObjectId),
})

export const productSchemaWithId = productSchema.merge(objectIdType)

export type Product = z.infer<typeof productSchemaWithId>
export type ProductForSendData = z.infer<typeof productSchema>
// export type ProductMongoDb = Omit<z.infer<typeof productSchema>, "_id"> & { _id: z.infer<typeof objectIdType> }

export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
};