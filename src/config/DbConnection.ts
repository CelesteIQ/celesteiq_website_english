import mongoose from "mongoose";

export async function DBconnection() {
    try {
        await mongoose.connect(process.env.MONGODB_URI!)

        const connection = mongoose.connection;

        if (connection.readyState === 1) {
            console.log("Connected to the database!!");
        }

        connection.on("error", () => {
            console.log("Error connecting to the database!!");
            process.exit(1);
        })

    } catch (error) {
        console.error("Error connecting to the database!!");
        process.exit(1);
    }
}