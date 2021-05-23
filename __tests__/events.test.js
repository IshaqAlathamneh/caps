'use strict';
// const { it, expect } = require('@jest/globals');
const faker = require('faker');
// const { describe } = require('yargs');
// Event Hub
const mockServer = require('../caps');
const events = require('../events');
mockServer.start();
describe('Test the events', () => {
    it('Is they working?', () => {
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
    // events.emit('ready for pickup - vendor', obj);
    // console.log(events.emit('ready for pickup - vendor', obj));
    expect(events.emit('delivered - driver', obj)).toEqual(true)
    expect(events.emit('ready for pickup - vendor', obj)).toEqual(true)
    expect(events.emit('in transit - driver', obj)).toEqual(true)
        expect(events.emit('delivered - vendor')).toEqual(true)
    })
})