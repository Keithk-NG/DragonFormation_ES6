'use strict';

import { initPaddlerDB } from './PaddlerDB.js';
import { Boat } from './BoatClass.js';

console.log('Starting Dragon Formation');

initPaddlerDB();

let boatName = 'boat1 - Mixed';
let type = 'Mixed';
let numBenches = 5;
let numPaddlers = 10;
const boat1 = new Boat(boatName, type, numBenches, numPaddlers);

boatName = 'boat2 - Open';
type = 'Open';
numBenches = 10;
numPaddlers = 20;
const boat2 = new Boat(boatName, type, numBenches, numPaddlers);

boatName = 'boat3 - Women';
type = 'Women';
numBenches = 10;
numPaddlers = 20;
const boat3 = new Boat(boatName, type, numBenches, numPaddlers);
