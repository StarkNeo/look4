const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const config = require('./utils/config')
const Advertiser = require('./models/advertiser')

const app = express()
app.use(cors())
app.use(express.json())


mongoose
    .connect(config.MONGODB_URI)
    .then(() => {
        console.log('connected to Mongo DB')
    })
    .catch((error) => {
        console.error(error)
    })


app.get('/categories', (request, response) => {
    Advertiser.Category.find({})
        .then(result => {
            if (result) {
                response.json(result).end()
            }
        })
        .catch(error => response.send(error).end())
})

/*
Advertisers.Review.find({})
    .then(result => console.log(result))
    .catch(error => console.error(error))

Advertisers.Category.find({})
    .then(result => console.log(result))
    .catch(error => console.error(error))
    */