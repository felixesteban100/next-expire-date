import { MongoClient } from "mongodb"; 
import { Product, ProductForSendData, User } from "../types";


export function connectToClusterForSendData() {
    let mongoClient;

    try {
        mongoClient = new MongoClient(process.env.MONGO_URL!);
        // console.log('Connecting to MongoDB Atlas cluster...');
        /* await */ mongoClient.connect();
        // console.log('Successfully connected to MongoDB Atlas!');

        const db = mongoClient.db('next-date-products');
        const collection = db.collection<ProductForSendData>('products');
        // return mongoClient;
        return collection
    } catch (error) {
        console.error('Connection to MongoDB Atlas failed!', error);
        throw new Error(`Connection to MongoDB Atlas failed! ${error}`)
    }
}

export function connectToCluster() {
    let mongoClient;

    try {
        mongoClient = new MongoClient(process.env.MONGO_URL!);
        // console.log('Connecting to MongoDB Atlas cluster...');
        /* await */ mongoClient.connect();
        // console.log('Successfully connected to MongoDB Atlas!');

        const db = mongoClient.db('next-date-products');
        const collection = db.collection<Product>('products');
        // return mongoClient;
        return collection
    } catch (error) {
        console.error('Connection to MongoDB Atlas failed!', error);
        throw new Error(`Connection to MongoDB Atlas failed! ${error}`)
    }
}

export function connectToClusterUser() {
    let mongoClient;

    try {
        mongoClient = new MongoClient(process.env.MONGO_URL!);
        // console.log('Connecting to MongoDB Atlas cluster...');
        /* await */ mongoClient.connect();
        // console.log('Successfully connected to MongoDB Atlas!');

        const db = mongoClient.db('next-date-products');
        const collection = db.collection<User>('users');
        // return mongoClient;
        return collection
    } catch (error) {
        console.error('Connection to MongoDB Atlas failed!', error);
        throw new Error(`Connection to MongoDB Atlas failed! ${error}`)
    }
}


export const collectionProducts = connectToCluster()
export const collectionProductsForSendData = connectToClusterForSendData()
export const collectionUsers = connectToClusterUser()