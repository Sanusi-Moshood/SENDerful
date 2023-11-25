import mongoose from "mongoose";

// set isconnected to false 
let isConnected = false

export const connectToDB = async () => {
    // check if isconnected is true 
    if(isConnected){
        console.log('Mongo db is connected');
        return
    }

    //if not try to connect to mongodb database 
    try {
        await mongoose.connect()
    } catch (error) {
        
    }


}