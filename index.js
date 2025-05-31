const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
//const json = require('./db.json')
//const images = require('./images.json')
const config = require('./utils/config')
const Advertiser = require('./models/advertiser')

//console.log(json)

app.use(cors())
app.use(express.static('dist'))
app.use(express.json())
app.use('/images', express.static('public/images'))

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    console.log('connected to Mongo DB')
  })
  .catch((error) => {
    console.error(error)
  })


app.listen(config.PORT, () => {
  console.log(`Server listening on port ${config.PORT}`)
})

let blankPage = `<h1>Server for LOOK4 online</h1>`

app.get('/', (request, response) => {
  response.send(blankPage).end()
})

/*
app.get('/advertisers', (request, response) => {
  response.json(json["advertisers"])
})*/

app.get('/categories', (request, response) => {
  Advertiser.Category.find({})
    .then(result => {
      if (result) {
        response.json(result).end()
      }
    })
    .catch(error => response.send(error).end())
})

app.get('/subcategories',(request, response)=>{
  Advertiser.Subcategory.find({})
  .then(result=>{
    if (result) {
      response.json(result).end()
    }
  })
  .catch(error=>response.send(error).end())
})

app.get('/companies',(request, response)=>{
  Advertiser.Company.find({})
  .then(result=>{
    if (result) {
      response.json(result).end()
    }
  })
  .catch(error=>response.send(error).end())
})

app.get('/reviews',(request, response)=>{
  Advertiser.Review.find({})
  .then(result=>{
    if (result) {
      response.json(result).end()
    }
  })
  .catch(error=>response.send(error).end())
})
