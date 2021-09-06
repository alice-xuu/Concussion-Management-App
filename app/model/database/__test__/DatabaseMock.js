import {
  SQLTransactionCallback,
  SQLTransactionErrorCallback,
  SQLVoidCallback,
} from 'expo-sqlite/src/SQLite.types';

export class DbMock {
  transaction(callback, errorCallback, successCallback) {}
}
