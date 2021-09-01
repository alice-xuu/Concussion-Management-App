import { Patient } from './Patient';

export class PatientRepo {
  /**
   *
   * @param {DatabaseAdapter} da
   */
  constructor(da) {
    this.da = da;
  }

  /**
   * Creates a user
   *
   * @param firstName
   * @param lastName
   * @returns {Promise<number>} a promise of the patientId
   * @throws {SQLError}
   */
  async createPatient(firstName, lastName) {
    const sql = 'INSERT INTO Patient (first_name, last_name) VALUES (?, ?)';

    return new Promise((resolve, reject) => {
      this.da.runSqlStmt(sql, [firstName, lastName]).then((rs) => {
        resolve(rs.insertId);
      }, reject);
    });
  }

  /**
   * Returns the patient with given id.
   *
   * @returns {Promise<Patient>} a promise of the patientId
   * @throws {SQLError}
   */
  async getPatient(patientId) {
    const sql = 'SELECT * FROM Patient WHERE patient_id = ?';

    return new Promise((resolve, reject) => {
      this.da.runSqlStmt(sql, [patientId]).then((rs) => {
        if (rs.rows.length < 1) {
          reject(new Error('No patient with id ' + patientId));
          return;
        }
        const patient = rs.rows.item(0);
        if (
          'patient_id' in patient &&
          'first_name' in patient &&
          'last_name' in patient
        ) {
          resolve(
            new Patient(
              patient.patient_id,
              patient.first_name,
              patient.last_name,
            ),
          );
        } else {
          reject(
            new Error(
              'Patient table does not contain all Patient class attributes',
            ),
          );
        }
      });
    });
  }
}