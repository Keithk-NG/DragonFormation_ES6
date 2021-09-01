//-------------------------------------------------------------------------------
// PersonBaseClass
//
// Do not instantiate.   This is the parent to the Paddler class.
//
//-------------------------------------------------------------------------------
'use strict';

export class PersonBaseClass {
  #sex;
  #firstName;
  #lastName;
  #birthYear;
  #weight;

  constructor(sex, firstName, lastName, weight, birthYear) {
    this.#sex = sex.toLowerCase(); // male / female
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#weight = weight;
    this.#birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.#birthYear);
  }

  get sex() {
    return this.#sex;
  }

  setSex(sex) {
    this.#sex = sex;
  }

  get firstName() {
    return this.#firstName;
  }

  setFirstName(name) {
    this.#firstName = name;
  }

  get lastName() {
    return this.#lastName;
  }

  setLastName(name) {
    this.#lastName = name;
  }

  get weight() {
    return this.#weight;
  }

  setWeight(w) {
    this.#weight = w;
  }
}
