import { IncidentReportRepo } from '../IncidentReportRepo';

describe('IncidentReportRepo', () => {
  const REP_ID = 1231244;

  let mockDa;
  let iRR;
  beforeEach(() => {
    mockDa = {
      runSqlStmt: jest.fn(() => Promise.resolve('')),
    };

    iRR = new IncidentReportRepo(mockDa);
  });

  describe('createReport', () => {
    it('returns insertId', async () => {
      const insertId = 12345;

      const mockRs = {
        insertId: insertId,
      };

      mockDa.runSqlStmt = () => Promise.resolve(mockRs);

      let ret = await iRR.createReport(111);
      expect(ret).toBe(insertId);
    });

    it('calls with patientId ', async () => {
      const patientId = 123445;
      await iRR.createReport(patientId);

      expect(mockDa.runSqlStmt.mock.calls.length).toBe(1);
      expect(mockDa.runSqlStmt.mock.calls[0][1]).toEqual([patientId]);
    });
  });

  describe('addSingleResponse', () => {
    it('returns insertId', async () => {
      const args = [REP_ID, 'knock knock', 'whos there?'];
      const insertId = 1111111;

      const mockRs = {
        insertId: insertId,
      };

      mockDa.runSqlStmt = () => Promise.resolve(mockRs);

      let ret = await iRR.addSingleResponse(...args);
      expect(ret).toBe(insertId);
    });

    it('calls with patientId ', async () => {
      const args = [12345, 'knock knock', 'whos there?'];

      await iRR.addSingleResponse(...args);

      expect(mockDa.runSqlStmt.mock.calls.length).toBe(1);
      expect(mockDa.runSqlStmt.mock.calls[0][1]).toEqual(args);
    });
  });

  describe('getSingleResponses', () => {
    it('returns row array', async () => {
      const mockRs = {
        rows: {
          length: 2,
          _array: [{ name: 'row0' }, { name: 'row1' }],
        },
      };

      mockDa.runSqlStmt = () => Promise.resolve(mockRs);

      const ret = await iRR.getSingleResponses(REP_ID);
      expect(ret).toEqual(mockRs.rows._array);
    });
  });
});
