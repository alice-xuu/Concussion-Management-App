/**
 * @module
 */

export class IncidentReportRepo {
  /**
   *
   * @param {DatabaseAdapter} da
   */
  constructor(da) {
    this.da = da;
  }

  /**
   *
   * @param {number} patientId patient to create report for
   * @return {Promise<number>} promise of the inserted report id
   */
  async createReport(patientId) {
    const sql = 'INSERT INTO IncidentReport (patient_id) VALUES (?);';
    const args = [patientId];

    return new Promise((resolve, reject) => {
      this.da.runSqlStmt(sql, args).then((rs) => resolve(rs.insertId), reject);
    });
  }

  /**
   *
   * @param {number} patientId patient to update report for
   * @param {number} reportId report to be updated
   * @return {Promise<number>} promise of the affected rows
   */
  async updateReport(patientId, reportId) {
    const sql =
      'UPDATE IncidentReport SET patient_id = ? WHERE report_id == ?;';
    const args = [patientId, reportId];

    return new Promise((resolve, reject) => {
      this.da.runSqlStmt(sql, args).then(
        (rs) => resolve(rs.rowsAffected),
        (err) => reject(err),
      );
    });
  }

  /**
   *
   * @param {number} patientId patient to update report for
   * @return {Promise<any[]>} promise of the reportIds
   */
  async getReports(patientId) {
    const sql = 'SELECT * FROM IncidentReport WHERE patient_id == ?;';
    const args = [patientId];

    return new Promise((resolve, reject) => {
      this.da.runSqlStmt(sql, args).then(
        (rs) => resolve(rs.rows._array),
        (err) => reject(err),
      );
    });
  }

  /**
   *
   * @param {number} reportId
   * @param {string} description description of response
   * @param {string} response value of response
   * @return {Promise<number>} promise of single response id
   */
  async setSingleResponse(reportId, description, response) {
    await this.da.runSqlStmt(
      `DELETE FROM SingleResponse WHERE report_id = ? AND description = ?;`,
      [reportId, description],
    );

    const rs = await this.da.runSqlStmt(
      `INSERT INTO SingleResponse (report_id, description, response) VALUES (?, ?, ?);`,
      [reportId, description, response],
    );
    return rs.insertId;
  }

  /**
   *
   * @param {number} reportId report id
   * @return {Promise<any[]>} array of SingleResponse rows
   */
  async getSingleResponses(reportId) {
    const sql = 'SELECT * FROM SingleResponse WHERE report_id == ?;';
    const args = [reportId];

    return new Promise((resolve, reject) => {
      this.da.runSqlStmt(sql, args).then((rs) => {
        if (rs.rows.length < 1) {
          reject(new Error(`No single response in report ${reportId}`));
          return;
        }
        resolve(rs.rows._array);
      });
    });
  }
  // async changeSingleResponse(ID, text) {
  //   const sql = 'UPDATE SingleResponse SET response = ? WHERE report_id == ?; ';
  //   const args = [text, ID];
  //
  //   return new Promise((resolve, reject) => {
  //     this.da.runSqlStmt(sql, args).then(
  //       (rs) => resolve(rs.insertId),
  //       (err) => reject(err),
  //     );
  //   });
  // }

  /**
   * Store multi response in db
   * @param {number}reportId report id
   * @param {string}description description of response
   * @param {string[]}responses values of responses
   * @return {Promise<number>} resolves with the MultiResponse id
   */
  async addMultiResponse(reportId, description, responses) {
    await this.da.runSqlStmt(
      'DELETE FROM MultiResponse WHERE report_id = ? AND description = ?;',
      [reportId, description],
    );

    const rs = await this.da.runSqlStmt(
      'INSERT INTO MultiResponse (report_id, description) VALUES (?, ?);',
      [reportId, description],
    );
    const mrId = rs.insertId;

    // Add each part of the response
    for (let res of responses) {
      await this.da.runSqlStmt(
        'INSERT INTO MultiResponsePart (mr_id, response) VALUES (?, ?);',
        [mrId, res],
      );
    }

    return mrId;
  }

  /**
   *
   * @param reportId report id
   * @return {Promise<any[]>} array of MultiResponses rows, parts of the multi
   * response are store in .MultiResponsePart
   */
  async getMultiResponses(reportId) {
    let error = null;
    let mrs = null; // multi responses
    await this.da
      .runSqlStmt('SELECT * FROM MultiResponse WHERE report_id == ?;', [
        reportId,
      ])
      .then(
        (rs) => (mrs = rs.rows._array),
        (err) => (error = err),
      );

    if (error != null) {
      return new Promise((resolve, reject) => reject(error));
    }

    for (let mr of mrs) {
      // Add each of the response parts
      await this.da
        .runSqlStmt('SELECT * FROM MultiResponsePart WHERE mr_id = ?', [
          mr.mr_id,
        ])
        .then(
          (rs) => {
            mr.MultiResponsePart = rs.rows._array;
          },
          (err) => (error = err),
        );

      if (error != null) {
        return new Promise((resolve, reject) => reject(error));
      }
    }

    return new Promise((resolve) => {
      resolve(mrs);
    });
  }

  /**
   * Stores the reaction test results.
   *
   * @param {number} reportId
   * @param {number[]} attempts 3 attempt results
   * @param {number} average
   * @param {string} grade
   * @return {Promise<number>}
   */
  async addReactionTest(reportId, attempts, average, grade) {
    if (attempts.length !== 3) {
      throw `given attempts has length ${attempts.length}, not 3`;
    }

    const sql = `INSERT INTO ReactionTest (report_id, time_attempt_1, time_attempt_2, time_attempt_3, time_average, grade)
        VALUES (?, ?, ?, ?, ?, ?)`;
    const args = [reportId, ...attempts, average, grade];

    const rs = await this.da.runSqlStmt(sql, args);
    return rs.insertId;
  }

  /**
   * Returns the reaction test for the report
   * @param reportId
   * @return {Promise<any>}
   */
  async getReactionTest(reportId) {
    if (reportId === undefined || reportId === null) {
      throw 'Invalid reportId';
    }

    const sql = `SELECT time_attempt_1, time_attempt_2, time_attempt_3, time_average, grade FROM ReactionTest WHERE report_id = ?;`;
    const args = [reportId];

    const rs = await this.da.runSqlStmt(sql, args);
    return rs.rows.item(0);
  }
}
