import * as SQLite from 'expo-sqlite';
import { TABLES_SQL } from './DatabaseConfig';

const DB_FILE = 'measurements.db';

export class DatabaseAdapter {
  /**
   *
   * @param {SQLite.WebSQLDatabase} db
   */
  constructor(db) {
    this.db = db;
  }

  /**
   *
   * @param {string} sql
   * @param {any[]} args
   * @return {Promise<SQLResultSet>}
   */
  async runSql(sql, args = []) {
    let ret;
    return new Promise((resolve, reject) => {
      this.db.transaction(
        (tx) => {
          tx.executeSql(
            sql,
            args,
            (_, rs) => (ret = rs),
            (_, err) => reject(err),
          );
        },
        (err) => reject(err),
        () => resolve(ret),
      );
    });
  }

  /**
   *
   * @return {Promise<DatabaseAdapter>}
   */
  static async initDatabase() {
    return new Promise((resolve, reject) => {
      let da = new DatabaseAdapter(SQLite.openDatabase(DB_FILE));
      da.runSql(TABLES_SQL).then(() => {
        da.db.exec(
          [{ sql: 'PRAGMA foreign_keys = ON;', args: [] }],
          false,
          (err, rs) => {
            if (err !== null) {
              reject(err);
            }

            if (rs !== null) {
              resolve(da);
            }
          },
        );
      });
    });
  }
}
