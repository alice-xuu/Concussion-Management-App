/**
 * A User in the database.
 *
 * TODO: remove and just use Patient row from db directly
 */
export class Patient {
  constructor(patientId, firstName, lastName) {
    this.patientId = patientId;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
