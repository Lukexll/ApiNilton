const mongoose = require("mongoose")

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      "mongodb+srv://niltondinz11:2btw3zkpWyH7bTkU@cluster0.undqx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );

      console.log("Conectado ao banco!");
    } catch (error) { 
        console.log(`erro: ${error}`)
    }

}

module.exports = main