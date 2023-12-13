"use server";

import { collectionProducts, collectionProductsForSendData } from "./mongodb/connect";
import { ProductForSendData, Product } from "./types";
import { revalidateTag } from 'next/cache'
import { ObjectId } from "mongodb";
import { signIn } from "@/auth";
import { AuthError } from 'next-auth';

export async function addProduct(values: ProductForSendData) {
    try {
        // await new Promise((resolve) => setTimeout(resolve, 7000));
        await collectionProductsForSendData.insertOne(values);
        revalidateTag('collection')
    } catch (error) {
        console.error(error);
        throw Error(`MongoDB Connection Error: ${error}`);
    }
}

export async function getProducts() {
    try {
        // await new Promise((resolve) => setTimeout(resolve, 7000));
        const allProducts = await collectionProducts.find({}).toArray();
        return allProducts
    } catch (error) {
        console.error(error);
        throw Error(`MongoDB Connection Error: ${error}`);
    }
}

export async function getProductByIdMongo(_id: string) {
    try {
        // await new Promise((resolve) => setTimeout(resolve, 7000));
        const product = await collectionProducts.findOne({ _id: new ObjectId(_id)});
        return product
    } catch (error) {
        console.error(error);
        throw Error(`MongoDB Connection Error: ${error}`);
    }
}
 
export async function updateProduct(_id: string, product: ProductForSendData) {
    try {
        // await new Promise((resolve) => setTimeout(resolve, 7000));
        await collectionProductsForSendData.replaceOne({ _id: new ObjectId(_id) }, {...product/* , _id: new Object(_id) */})
        revalidateTag('collection')
        return product
    } catch (error) {
        console.error(error);
        throw Error(`MongoDB Connection Error: ${error}`);
    }
}

export async function deleteProduct(product: Product) {
    try {
        await collectionProductsForSendData.deleteOne({ name: product.name })
        revalidateTag('collection')
    } catch (error) {
        console.error(error);
        throw Error(`MongoDB Connection Error: ${error}`);
    }
}

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
  ) {
    try {
        await signIn('credentials', formData);
      } catch (error) {
        if (error instanceof AuthError) {
          switch (error.type) {
            case 'CredentialsSignin':
              return 'Invalid credentials.';
            default:
              return 'Something went wrong.';
          }
        }
        throw error;
      }

    // try {
    //   await signIn('credentials', Object.fromEntries(formData));
    // } catch (error) {
    //   if ((error as Error).message.includes('CredentialsSignin')) {
    //     return 'CredentialSignin';
    //   }
    //   throw error;
    // }
  }