//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//
// The class contains all of the data for a dragonboat paddler.
//
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
'use strict';

import { PersonBaseClass } from './PersonBaseClass.js';

export class Paddler extends PersonBaseClass {
  // private to the PaddlerClass
  #id;
  #experience; // reecreational, competitive
  #team;
  #role; // paddler, caller, steerer

  constructor(
    id = '0000',
    sex = 'M',
    firstName = 'firstName',
    lastName = '',
    weight = 120,
    birthYear = '0',
    team = 'none',
    experience = 'rec',
    role = 'paddler'
  ) {
    super(sex, firstName, lastName, weight, birthYear); // Instantiate the PersonBaseClass
    this.#id = id;
    this.#team = team;
    this.#experience = experience; // recreation vs. competitive  - rec/comp
    this.#role = role;
  }

  get team() {
    return this.#team;
  }

  setTeam(team) {
    this.#team = team;
  }

  get id() {
    return this.#id;
  }

  setId(id) {
    this.#id = id;
  }

  get experience() {
    return this.#experience;
  }

  setExperience(e) {
    this.#experience = e;
  }

  get role() {
    return this.#role;
  }

  setRole(role) {
    this.#role = role;
  }

  info = function () {
    return `${this.#id}, ${this.firstName}, ${this.weight} lbs, team: ${
      this.team
    }, sex: ${this.sex} `;
  };
}
