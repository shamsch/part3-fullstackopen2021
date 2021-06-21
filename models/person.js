const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

// commented out code was used before connecting the database with backend 
// if (process.argv.length < 3) {
//   console.log(
//     "Please provide the password as an argument: node mongo.js <password>"
//   );
//   process.exit(1);
// }

// const password = process.argv[2];

const url = process.env.MONGODB_URL;

console.log("connecting to MongoDB");

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((result) => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

const personSchema = new mongoose.Schema({
  name: {type: String, required: true, unique: true, minLength: 3},
  number: {type: String, required: true, unique: true, minLength: 8},
});

personSchema.plugin(uniqueValidator);
//modifying the object returned by mongoose to json format
personSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports= mongoose.model("Person", personSchema);

// if (process.argv.length === 3) {
//   Person.find({}).then((result) => {
//     result.forEach((person) => {
//       console.log(person.name, person.number);
//     });
//     mongoose.connection.close();
//   });
// } else if (process.argv.length > 3 && process.argv.length < 6) {
//   const person = new Person({
//     name: process.argv[3],
//     number: process.argv[4],
//   });

//   person.save().then((result) => {
//     console.log("person saved to the database!");
//     mongoose.connection.close();
//   });
// }
