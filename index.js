require("dotenv").config();
const Person = require("./models/person");
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const person = require("./models/person");
const mongoose = require("mongoose");

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
  Person.find({})
    .then((person) => {
      if (person) {
        response.json(person);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

app.get("/info", (request, response) => {
  Person.countDocuments({}, (error, count) => {
    if (error) {
      next(error);
    }
    response.send(
      `<div>Phonebook has info for ${count} persons</div> <div>${new Date()}</div>`
    );
  });
});

app.get("/api/persons/:id", (request, response, next) => {
  Person.findById(request.params.id)
    .then((person) => {
      response.json(person);
    })
    .catch((error) => next(error));

  // const id = Number(request.params.id);
  // const person = persons.find((person) => person.id === id);
  // if (person) {
  //   response.json(person);
  // } else {
  //   response.status(404).end();
  // }
});

app.delete("/api/persons/:id", (request, response, next) => {
  Person.findByIdAndDelete(request.params.id)
    .then((result) => {
      response.json(person);
    })
    .catch((error) => next(error));
});

app.post("/api/persons", (request, response, next) => {
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

  const newPerson = new Person({
    name: body.name,
    number: body.number,
  });

  newPerson
    .save()
    .then((savedPerson) => {
      response.json(savedPerson);
    })
    .catch((error) => next(error));

  // response.json(newPerson);
});

app.put("/api/persons/:id", (request, response) => {
  const person = {
    name: request.body.name,
    number: request.body.number,
  };
  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then((updatedPerson) => {
      response.json(updatedPerson);
    })
    .catch((error) => next(error));
});

//error handling middleware

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === 'CastError') {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message });
  }

  next(error);
};

// this has to be the last loaded middleware.
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
