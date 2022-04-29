const mongoose = require('mongoose');

// Initialisation de Mongoose:
const dbConnect = async () => await mongoose.connect(
  "mongodb+srv://Nux007:sssBHEXjzt3RyTfk@cluster0.zp1ku.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

dbConnect()
  .catch(err => {
    console.error("Erreur de connexion à la db: " + err);
    process.exit(1);
  })
;

module.exports = mongoose;
