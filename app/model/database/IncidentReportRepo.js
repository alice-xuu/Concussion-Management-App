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
   * @param {number} reportId
   * @param {string} description description of response
   * @param {string} response value of response
   * @return {Promise<number>} promise of single response id
   */
  async addSingleResponse(reportId, description, response) {
    const sql =
      'INSERT INTO SingleResponse (report_id, description, response) VALUES (?, ?, ?)';
    const args = [reportId, description, response];

    return new Promise((resolve, reject) => {
      this.da.runSqlStmt(sql, args).then(
        (rs) => resolve(rs.insertId),
        (err) => reject(err),
      );
    });
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
   * @return {Promise<Promise<unknown> | Promise.Promise>}
   */
  async addMultiResponse(reportId, description, responses) {
    let mrId = null;
    let err = null;
    await this.da
      .runSqlStmt(
        'INSERT INTO MultiResponse (report_id, description) VALUES (?, ?);',
        [reportId, description],
      )
      .then(
        (rs) => (mrId = rs.insertId),
        (er) => (err = er),
      );
    if (err != null) {
      // Error with creating MultiResponse
      return new Promise((resolve, reject) => reject(err));
    }

    // Add each part of the response
    for (let res of responses) {
      await this.da
        .runSqlStmt(
          'INSERT INTO MultiResponsePart (mr_id, response) VALUES (?, ?);',
          [mrId, res],
        )
        .then(
          () => {},
          (er) => (err = er),
        );

      if (err != null) {
        // Error with creating MultiResponse
        return new Promise((resolve, reject) => reject(err));
      }
    }

    return new Promise((resolve) => {
      resolve(mrId);
    });
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
}
