'use strict';

import { getPaddlers } from './PaddlerDB.js';
import { Paddler } from './PaddlerClass.js';
import {
  LEFT,
  RIGHT,
  TEN_MAN_BOAT,
  TWENTY_MAN_BOAT,
  BENCH_1,
  BENCH_2,
  BENCH_3,
  BENCH_4,
  BENCH_5,
  BENCH_6,
  BENCH_7,
  BENCH_8,
  BENCH_9,
  BENCH_10,
  SIDE_LIMIT,
  FRONT_BACK_10_MAN_LIMIT,
  FRONT_BACK_20_MAN_LIMIT,
} from './BoatConstants.js';

export class Boat {
  #boatName;
  #type; // Open, Women, Mixed
  #numBenches; // 5, 10
  #numPaddlers;

  #roster;

  #lineup = []; // Left, Right

  //----------------------------------------------------------------------------------
  //
  // constructor()
  //
  //----------------------------------------------------------------------------------
  constructor(boatName, type, numBenches, numPaddlers) {
    this.#boatName = boatName;
    this.#type = type.toLowerCase();
    this.#numBenches = numBenches;
    this.#numPaddlers = numPaddlers;

    this.#roster = getPaddlers(numPaddlers, this.#type)
      .slice()
      .sort((a, b) => (a.weight > b.weight ? 1 : -1)); // sort by acsending weight

    this.#lineup[LEFT] = this.#getSidePaddlers(LEFT);
    this.#lineup[RIGHT] = this.#getSidePaddlers(RIGHT);

    this.#balanceSide2Side();
    this.showSeating(numBenches); // debugging

    this.#balanceFront2Back();
    this.showSeating(numBenches); // debugging
  }

  //----------------------------------------------------------------------------------
  //
  // Helpers
  //
  //----------------------------------------------------------------------------------
  #left2Right = () =>
    this.#getSideWeight(LEFT) > this.#getSideWeight(RIGHT) ? LEFT : RIGHT;

  #sideDiff = () =>
    Math.abs(this.#getSideWeight(LEFT) - this.#getSideWeight(RIGHT));

  #getSideWeight = side =>
    this.#lineup[side].reduce((acc, paddler) => acc + paddler.weight, 0);

  #getTotalFrontWeight = () =>
    this.#getFrontWeight(LEFT) + this.#getFrontWeight(RIGHT);

  #getTotalBackWeight = () =>
    this.#getBackWeight(LEFT) + this.#getBackWeight(RIGHT);

  #frontBackDiff = () =>
    Math.abs(this.#getTotalFrontWeight() - this.#getTotalBackWeight());

  #getBenchWeight = (side, index) =>
    side === LEFT
      ? this.#lineup[LEFT][index].weight - this.#lineup[RIGHT][index].weight
      : this.#lineup[RIGHT][index].weight - this.#lineup[LEFT][index].weight;

  //----------------------------------------------------------------------------------
  //
  // getSidePaddlers()
  //
  //----------------------------------------------------------------------------------
  #getSidePaddlers = function (side) {
    let front = [];
    let back = [];

    const temp =
      side === RIGHT
        ? this.#roster.filter((paddler, index) => index % 2)
        : this.#roster.filter((paddler, index) => index % 2 === 0);

    if (this.#numBenches === TEN_MAN_BOAT) {
      front = temp.slice(BENCH_1, BENCH_3);
      back = temp.slice(BENCH_3).reverse();
    } else if (this.#numBenches === TWENTY_MAN_BOAT) {
      front = temp.slice(BENCH_1, BENCH_5);
      back = temp.slice(BENCH_5).reverse();
    }

    return [...front, ...back];
  };

  //----------------------------------------------------------------------------------
  //
  // getFrontWeight()
  //
  //----------------------------------------------------------------------------------
  #getFrontWeight = function (side) {
    if (this.#numBenches === TEN_MAN_BOAT) {
      return this.#lineup[side]
        .slice(0, BENCH_3)
        .reduce((acc, paddler) => acc + paddler.weight, 0);
    } else if (this.#numBenches === TWENTY_MAN_BOAT) {
      return this.#lineup[side]
        .slice(0, BENCH_6)
        .reduce((acc, paddler) => acc + paddler.weight, 0);
    }
  };

  //----------------------------------------------------------------------------------
  //
  // getBackWeight()
  //
  //----------------------------------------------------------------------------------
  #getBackWeight = function (side) {
    if (this.#numBenches === TEN_MAN_BOAT) {
      return this.#lineup[side]
        .slice(BENCH_4)
        .reduce((acc, paddler) => acc + paddler.weight, 0);
    } else if (this.#numBenches === TWENTY_MAN_BOAT) {
      return this.#lineup[side]
        .slice(BENCH_6)
        .reduce((acc, paddler) => acc + paddler.weight, 0);
    }
  };

  //----------------------------------------------------------------------------------
  //
  // swapSides()
  //
  //----------------------------------------------------------------------------------
  #getMaxIndex = function (side) {
    let maxIndex = -1;
    let maxWeight = SIDE_LIMIT;

    for (let ii = 0; ii < this.#numBenches; ii++) {
      if (this.#getBenchWeight(side, ii) > maxWeight) {
        maxWeight = this.#getBenchWeight(side, ii);
        maxIndex = ii;
      }
    }
    return maxIndex;
  };

  #swapSides = function (side) {
    const maxIndex = this.#getMaxIndex(side);

    if (side === LEFT) {
      const temp = this.#lineup[RIGHT][maxIndex];
      this.#lineup[RIGHT][maxIndex] = this.#lineup[LEFT][maxIndex];
      this.#lineup[LEFT][maxIndex] = temp;
    } else {
      const temp = this.#lineup[LEFT][maxIndex];
      this.#lineup[LEFT][maxIndex] = this.#lineup[RIGHT][maxIndex];
      this.#lineup[RIGHT][maxIndex] = temp;
    }
  };

  //---------------------------------------------------------------------------------
  //
  // balanceSide2Side()
  //
  //----------------------------------------------------------------------------------
  #balanceSide2Side = function () {
    // There might not be a solution.  Stop at the number of benches.
    for (let ii = 0; ii < this.#numBenches; ii++) {
      if (this.#sideDiff() > SIDE_LIMIT) {
        this.#swapSides(this.#left2Right());
      }
    }
  };

  #swapBack2Front = function (backBench, frontBench) {
    const leftTemp = this.#lineup[LEFT][frontBench];
    this.#lineup[LEFT][frontBench] = this.#lineup[LEFT][backBench];
    this.#lineup[LEFT][backBench] = leftTemp;

    const rightTemp = this.#lineup[RIGHT][frontBench];
    this.#lineup[RIGHT][frontBench] = this.#lineup[RIGHT][backBench];
    this.#lineup[RIGHT][backBench] = rightTemp;
  };

  #balanceFront2Back = function () {
    const limit =
      this.#numBenches === TEN_MAN_BOAT
        ? FRONT_BACK_10_MAN_LIMIT
        : FRONT_BACK_20_MAN_LIMIT;

    if (this.#frontBackDiff() > limit) {
      if (this.#numBenches === TEN_MAN_BOAT) {
        this.#swapBack2Front(BENCH_5, BENCH_2);
      } else {
        this.#swapBack2Front(BENCH_10, BENCH_3);
      }
    }

    if (this.#frontBackDiff() > limit) {
      if (this.#numBenches === TWENTY_MAN_BOAT) {
        this.#swapBack2Front(BENCH_9, BENCH_4);
      }
    }
  };

  //----------------------------------------------------------------------------------
  //
  // Used for debugging only
  //
  //----------------------------------------------------------------------------------
  showSeating = function (numBenches) {
    console.log(`\n\nBoat Name: ${this.#boatName} - Using 2D array\n\n`);

    for (let index = 0; index < numBenches; index++) {
      console.log(
        `Bench ${index + 1}: ${this.#lineup[LEFT][
          index
        ].info()} - ${this.#lineup[RIGHT][index].info()}`
      );
    }

    console.log(
      `Side to Side:  ${this.#getSideWeight(
        LEFT
      )} lbs           -      ${this.#getSideWeight(
        RIGHT
      )} lbs               diff = ${this.#sideDiff()}`
    );

    console.log(
      `Front to Back:  ${this.#getTotalFrontWeight()} lbs          -      ${this.#getTotalBackWeight()} lbs               diff = ${this.#frontBackDiff()}`
    );
  };
}
