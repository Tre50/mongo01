import { ObjectId } from "mongodb";
import { db } from "./connectDb.js";


const theFish = {
    species: 'tetra',
    origin: 'Amazon',
    color: "silver",
    size: '1"',
    family: { dad: '🐠',
        sister:'🐡',
        mom: { cool: true, special: undefined },
        
},
};
// add a fish
export async function addAFish() {
    const fishAdded = await db.collection('fish').insertOne(theFish)
    console.log('fishAdded ->', fishAdded)


}
//get all fish
export async function getAllFish() {
    const fishList = await db.collection('fish').find({}).toArray();
    console.table(fishList);
}



export async function deleteAFish() {
    const fishDelete = await db.collection('fish').findOneAndDelete({species: 'tetra'})

const myCleanId = ObjectId('652821360693d034a1999ca1')

    // delete by id
    const fishDelete = db.collection('fish').findOneAndDelete({_id:myCleanId})

   console.log('fishDelete -> ', fishDelete)
    //find the fish i want delete
} 

// update Fish
export async function updateOneFish(){
    
    const updateOneFish = await fishdb.findOneAndUpdate({_id: myCleanId }, { $set: updateOneFish })
    console.log('updateOneFish ->', updateOneFish)

    //define the fish
    //define what to update
    //udpate which fish
    //then update
}
    

