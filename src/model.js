import mongoose from "mongoose";

const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/graphql-template-server";

mongoose.connect(uri, (err) => console.log(err ? err.message : `Succesfully Connected: ${uri}`));
