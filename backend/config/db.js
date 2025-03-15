const mongoose = require("mongoose");

async function ConnectDB() {
    try {
        await mongoose.connect("mongodb://localhost:27017/Agence", {
              useNewUrlParser: true,
              useUnifiedTopology: true});
            console.log("Connecté à MongoDB");
          } catch (error) {
            console.error("Erreur de connexion à MongoDB :", error);
            process.exit(1);
    }
}

module.exports = ConnectDB;