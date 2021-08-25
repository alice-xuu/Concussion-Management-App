/**
 * A User in the database
 */
export class Patient {
  constructor(patientId, firstName, lastName) {
    this.patientId = patientId;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
