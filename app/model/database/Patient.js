/**
 * A User in the database.
 *
 * TODO: remove and just use Patient row from db directly
 */
export class Patient {
  constructor(patientId, firstName, lastName, age, weight) {
    this.patientId = patientId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.weight = weight;
  }
}
