//import { addAFish, getAllFish,deleteAFish, updateOneFish } from "./src/fish.js";
import { closeClient } from "./src/connectDb.js";
import { addACAR, readTheCar } from "./src/cars.js";


//await addAFish()
//await getAllFish()
//await deleteAFish()
//await updateOneFish()

await readTheCar()
await addACAR()
closeClient();


