import * as SQLite from 'expo-sqlite';
import { Patient } from './Patient';

export class PatientRepository {
  /**
   *
   * @param {SQLite.WebSQLDatabase} db
   */
  constructor(db) {
    this.db = db;
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

    let patient_id;
    console.log('in createPatient');
    return new Promise((resolve, reject) => {
      this.db.transaction(
        (tx) =>
          tx.executeSql(
            sql,
            [firstName, lastName],
            (txRs, rs) => (patient_id = rs.insertId),
            (txErr, err) => reject(err),
          ),
        (err) => reject(err),
        () => resolve(patient_id),
      );
    });
  }

  /**
   * Creates a user
   *
   * @returns {Promise<Patient>} a promise of the patientId
   * @throws {SQLError}
   */
  async getPatient(patientId) {
    console.log('getPatient');
    const sql = 'SELECT * FROM Patient WHERE patient_id = ?';

    return new Promise((resolve, reject) => {
      this.db.transaction(
        (tx) =>
          tx.executeSql(
            sql,
            [patientId],
            (_, rs) => {
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
            },
            (_, err) => reject(err),
          ),
        (err) => reject(err),
        () => resolve(null),
      );
    });
  }
}
