import { ObjectId } from "mongodb";
import { db } from "./connectDb.js";

const typeCar = {
    type: 'sedan',
    color: 'red',
    size: 'large',



};

export async function addACAR() {

    const carAdded = await db.collection('cars').insertOne(typeCar)
    console.log('carAdded->', carAdded)
}

export async function readTheCar() {
    const carRead = await db.collection('cars').find({}).toArray();
    console.table(carRead)

}