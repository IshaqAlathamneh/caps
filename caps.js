'use strict';
require('dotenv').config();
const express = require('express')
const app = express();
const faker = require('faker');
const { async } = require('rsvp');
// Event Hub
const events = require('./events');

console.log('faker name ---->', faker.name.findName());
console.log('faker ---->', faker.random.uuid());
console.log('faker ---->', faker.commerce.product());
console.log('faker ---->', faker.address.city());

// Require the body parts
require('./modules/vendor')
require('./modules/driver')


// events.emit('food');

const myInterval = setInterval(()=> {
    let cusName = faker.name.findName();
    let orderID = faker.random.uuid();
    let productName = faker.commerce.product();
    let myAddress = faker.address.city();
    let obj = {
        cusName,
        orderID,
        productName,
        myAddress
    }
    events.emit('ready for pickup - vendor', obj);
    // events.emit('in transit - driver', obj);
    // events.emit('delivered - driver', obj);
}, 5000)

setTimeout(()=> {
    clearInterval(myInterval);
}, 12000);

function start() {
    app.listen(3000, async ()=> {
        await console.log(`my port ${3000}`);
    })
}
module.exports= {
    app,
    start
}