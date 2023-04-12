// import modules

import express from 'express'
import { todos } from './data/todo-data.js'
import { pokemon } from './data/pokemon-data.js'

// create Express app

const app = express()

// configure the app (app.set)
app.set('view engine', 'ejs')


// mount Middleware (app.use)



// mount routes
app.get('/', function(req, res) {
  res.redirect('/todos')
})

app.get('/todos', function(req, res) {
  res.render('todos/index', {
    // nameOfDataToPass: dataToPass
    todos: todos
  })
})

app.get('/lotion', function(req, res) {
  res.send('<p>It puts the lotion on its skin or else it get the hose again</p>')
})

app.get('/home', function(req, res) {
  res.render('home')
})

app.get('/pokemon', function(req, res){
  res.render('pokemon', {
    pokemon: pokemon
  })
})

// tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})