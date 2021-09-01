//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//
// Paddler Database
//
// This is for development only.  The finished system will use MongoDB
//
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
'use strict';

import { Paddler } from './PaddlerClass.js';

const paddlerDB = [];

export const initPaddlerDB = function (numPaddlers = undefined) {
  if (numPaddlers !== undefined) {
    createRandomData(numPaddlers);
  } else {
    loadFixedData();
  }
};

export const paddlerDbLog = function () {
  console.log(paddlerDB);
};

const loadFixedData = function () {
  paddlerDB.push(
    new Paddler(
      '0001',
      'M',
      'FN 1',
      undefined,
      156,
      undefined,
      'T1',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0002',
      'M',
      'FN 2',
      undefined,
      143,
      undefined,
      'T2',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0003',
      'F',
      'FN 3',
      undefined,
      123,
      undefined,
      'T3',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0004',
      'M',
      'FN 4',
      undefined,
      172,
      undefined,
      'T4',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0005',
      'F',
      'FN 5',
      undefined,
      111,
      undefined,
      'T5',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0006',
      'F',
      'FN 6',
      undefined,
      139,
      undefined,
      'T6',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0007',
      'M',
      'FN 7',
      undefined,
      145,
      undefined,
      'T7',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0008',
      'M',
      'FN 8',
      undefined,
      162,
      undefined,
      'T8',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0009',
      'F',
      'FN 9',
      undefined,
      106,
      undefined,
      'T9',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0010',
      'F',
      'FN 10',
      undefined,
      106,
      undefined,
      'T10',
      undefined,
      'paddler'
    )
  );
  paddlerDB.push(
    new Paddler(
      '0011',
      'M',
      'FN 11',
      undefined,
      186,
      undefined,
      'T11',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0012',
      'M',
      'FN 12',
      undefined,
      166,
      undefined,
      'T12',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0013',
      'M',
      'FN 13',
      undefined,
      137,
      undefined,
      'T13',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0014',
      'F',
      'FN 14',
      undefined,
      159,
      undefined,
      'T14',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0015',
      'F',
      'FN 15',
      undefined,
      130,
      undefined,
      'T15',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0016',
      'F',
      'FN 16',
      undefined,
      141,
      undefined,
      'T16',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0017',
      'M',
      'FN 17',
      undefined,
      192,
      undefined,
      'T17',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0018',
      'M',
      'FN 18',
      undefined,
      210,
      undefined,
      'T18',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0019',
      'F',
      'FN 19',
      undefined,
      103,
      undefined,
      'T19',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0020',
      'M',
      'FN 20',
      undefined,
      163,
      undefined,
      'T20',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0021',
      'F',
      'FN 21',
      undefined,
      153,
      undefined,
      'T21',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0022',
      'M',
      'FN 22',
      undefined,
      191,
      undefined,
      'T22',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0023',
      'F',
      'FN 23',
      undefined,
      119,
      undefined,
      'T23',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0024',
      'M',
      'FN 24',
      undefined,
      183,
      undefined,
      'T24',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0025',
      'M',
      'FN 25',
      undefined,
      172,
      undefined,
      'T25',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0026',
      'M',
      'FN 26',
      undefined,
      155,
      undefined,
      'T26',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0027',
      'M',
      'FN 27',
      undefined,
      201,
      undefined,
      'T27',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0028',
      'M',
      'FN 28',
      undefined,
      133,
      undefined,
      'T28',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0029',
      'F',
      'FN 29',
      undefined,
      124,
      undefined,
      'T29',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0030',
      'F',
      'FN 30',
      undefined,
      135,
      undefined,
      'T30',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0031',
      'F',
      'FN 31',
      undefined,
      106,
      undefined,
      'T31',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0032',
      'M',
      'FN 32',
      undefined,
      154,
      undefined,
      'T32',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0033',
      'M',
      'FN 33',
      undefined,
      178,
      undefined,
      'T33',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0034',
      'F',
      'FN 34',
      undefined,
      133,
      undefined,
      'T34',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0035',
      'F',
      'FN 35',
      undefined,
      159,
      undefined,
      'T35',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0036',
      'M',
      'FN 36',
      undefined,
      196,
      undefined,
      'T36',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0037',
      'M',
      'FN 37',
      undefined,
      171,
      undefined,
      'T37',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0038',
      'M',
      'FN 38',
      undefined,
      156,
      undefined,
      'T38',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0039',
      'M',
      'FN 39',
      undefined,
      181,
      undefined,
      'T39',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0040',
      'F',
      'FN 40',
      undefined,
      119,
      undefined,
      'T40',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0041',
      'F',
      'FN 41',
      undefined,
      138,
      undefined,
      'T41',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0042',
      'M',
      'FN 42',
      undefined,
      191,
      undefined,
      'T42',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0043',
      'M',
      'FN 43',
      undefined,
      166,
      undefined,
      'T43',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0044',
      'M',
      'FN 44',
      undefined,
      180,
      undefined,
      'T44',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0045',
      'M',
      'FN 45',
      undefined,
      220,
      undefined,
      'T45',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0046',
      'F',
      'FN 46',
      undefined,
      139,
      undefined,
      'T46',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0047',
      'F',
      'FN 47',
      undefined,
      141,
      undefined,
      'T47',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0048',
      'F',
      'FN 48',
      undefined,
      133,
      undefined,
      'T48',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0049',
      'M',
      'FN 49',
      undefined,
      158,
      undefined,
      'T49',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0050',
      'M',
      'FN 50',
      undefined,
      177,
      undefined,
      'T50',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0051',
      'M',
      'FN 51',
      undefined,
      161,
      undefined,
      'T51',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0052',
      'M',
      'FN 52',
      undefined,
      187,
      undefined,
      'T52',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0053',
      'F',
      'FN 53',
      undefined,
      130,
      undefined,
      'T53',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0054',
      'M',
      'FN 54',
      undefined,
      170,
      undefined,
      'T54',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0055',
      'F',
      'FN 55',
      undefined,
      118,
      undefined,
      'T55',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0056',
      'M',
      'FN 56',
      undefined,
      160,
      undefined,
      'T56',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0057',
      'M',
      'FN 57',
      undefined,
      194,
      undefined,
      'T57',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0058',
      'M',
      'FN 58',
      undefined,
      185,
      undefined,
      'T58',
      undefined,
      'paddler'
    )
  );

  paddlerDB.push(
    new Paddler(
      '0059',
      'F',
      'FN 59',
      undefined,
      125,
      undefined,
      'T59',
      undefined,
      'paddler'
    )
  );
};

const createRandomData = function (numPaddlers) {
  for (let ii = 0; ii < numPaddlers; ii++) {
    const paddler = new Paddler(
      ii,
      'male',
      `${'pFName' + ii}`,
      `${'pLname' + ii}`,
      1970 + ii,
      'comp',
      'paddler'
    );

    paddler.setWeight(paddler.weight + randomValue(-10, 70));

    paddlerDB.push(paddler);
  }
};

const randomValue = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

export const getPaddlers = function (numPaddlers, type = 'mixed') {
  if (type === 'mixed') {
    return paddlerDB.slice(0, numPaddlers);
  } else if (type === 'open') {
    return paddlerDB
      .filter(function (paddler) {
        if (paddler.sex === 'm') return paddler;
      })
      .slice(0, numPaddlers);
  } else if (type === 'women') {
    return paddlerDB
      .filter(function (paddler) {
        if (paddler.sex === 'f') return paddler;
      })
      .slice(0, numPaddlers);
  }
};

paddlerDbLog(); // debugging
