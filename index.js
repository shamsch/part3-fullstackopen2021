require("dotenv").config();
const Person = require("./models/person");
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const person = require("./models/person");
const mongoose = require('mongoose')

app.use(cors());
app.use(express.static("build"));
morgan.token("content", (req) => JSON.stringify(req.body));
app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms :content"
  )
);
app.use(express.json());

// let persons = [
//   {
//     name: "Arto Hellas",
//     number: "040-123456",
//     id: 1,
//   },
//   {
//     name: "Ada Lovelace",
//     number: "39-44-5323523",
//     id: 2,
//   },
//   {
//     name: "Dan Abramov",
//     number: "12-43-234345",
//     id: 3,
//   },
//   {
//     name: "Mary Poppendieck",
//     number: "39-23-6423122",
//     id: 4,
//   },
// ];

// const generateId = () => {
//   return Math.random() * (1000000 - 4) + 4;
// };

app.get("/api/persons", (request, response) => {
  Person.find({}).then((person) => {
    response.json(person);
  });
});

app.get("/info", (request, response) => {
  let numberOfPerson = persons.length;
  let date = new Date();
  response.send(`Phonebook has info for ${numberOfPerson} persons ${date}`);
});

app.get("/api/persons/:id", (request, response) => {
  Person.findById(request.params.id).then((person) => {
    response.json(person);
  });

  // const id = Number(request.params.id);
  // const person = persons.find((person) => person.id === id);
  // if (person) {
  //   response.json(person);
  // } else {
  //   response.status(404).end();
  // }
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);

  response.status(204).end();
});

app.post("/api/persons", (request, response) => {
  const body = request.body;

  // console.log(request.body);
  // let allNames= persons.map((person)=>person.name)
  // console.log(allNames)

  console.log(body.name);
  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "name must be unique",
    });
  }

  const newPerson = new Person ({
    name: body.name,
    number: body.number || "N/A",
    id: generateId(),
  });

  newPerson.save().then((savedPerson) => {
    response.json(savedPerson);
  });

  response.json(newPerson);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
