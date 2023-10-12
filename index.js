import { addAFish, getAllFish,deleteAFish, updateOneFish } from "./src/fish.js";
import { closeClient } from "./src/connectDb.js";

await addAFish()
await getAllFish()
await deleteAFish()
await updateOneFish()

closeClient();
