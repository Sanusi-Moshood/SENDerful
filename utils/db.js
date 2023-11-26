import mongoose from "mongoose";

 

export const connectToDB = async () => {
    // check if isconnected is true 
    if (mongoose.connection.readyState === 1) {
        // If already connected, return the existing connection
        return mongoose.connection.db;
      }
    

    //if not try to connect to mongodb database 

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
        });
    
        return db.connection.db;
      } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        throw error;
      }
    };

 