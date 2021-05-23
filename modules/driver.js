'use strict';
const events = require('../events.js');
const storeName = process.env.storeName;
function readyForPick(payload) {
    console.log(`The ${payload.cusName} pick up ${payload.orderID}`);
    events.emit('in transit - driver', payload);
}

function inTransit(payload) {
    console.log(`${payload.cusName} Be Prepared the ${payload.productName} is on the way`);

    setTimeout(()=> {
        events.emit('delivered - driver', payload);
    }, 3000);
}
function delivered(payload) {
    console.log(`the ${payload.productName} of ID ${payload.orderID} is Delivered To ${payload.cusName} in ${payload.myAddress} city`)
    events.emit('delivered - vendor', payload)
}

events.on('ready for pickup - driver', readyForPick)
events.on('in transit - driver', inTransit)
events.on('delivered - driver', delivered)