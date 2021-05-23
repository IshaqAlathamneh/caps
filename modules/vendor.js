'use strict';
const events = require('../events.js');
const storeName = process.env.storeName;
function readyForPick(payload) {
    console.log(`In ${storeName}: the ${payload.productName} of ID ${payload.orderID} is ready To Go To ${payload.myAddress} city`);
    setTimeout(()=> {
        events.emit('ready for pickup - driver', payload)
    }, 1000);
}

// function inTransit(payload) {
//     console.log('pick up the food ...')
// }
function delivered(payload) {
    console.log(`Thank You!!!`)
}

events.on('ready for pickup - vendor', readyForPick)
// events.on('in transit', inTransit)
events.on('delivered - vendor', delivered)