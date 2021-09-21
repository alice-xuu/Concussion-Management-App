import { PatientRepo } from '../PatientRepo';
import { IncidentReportRepo } from '../IncidentReportRepo';

describe('ReactionTest', () => {
  const TEST_REACTION_RESULTS = {
    rt_id: 1234,
    time_attempt_1: 300,
    time_attempt_2: 100,
    time_attempt_3: 200,
    time_average: 200,
    grade: 'pass',
  };

  const MOCK_RS = {
    rows: {
      length: 2,
      _array: [{}, {}],
      item: () => ({}),
    },
  };

  let mockDa;
  let rt;

  beforeEach(() => {
    mockDa = {
      runSqlStmt: jest.fn(() => Promise.resolve(MOCK_RS)),
    };
    rt = new IncidentReportRepo(mockDa);
  });

  describe('createReactionTestResult', () => {
    it('calls runSqlStmt with correct args', async () => {
      const id = 1234;
      const ta1 = 100;
      const ta2 = 100;
      const ta3 = 100;
      const avg = 100;
      const grade = 'pass';

      await rt.addReactionTest(id, [ta1, ta2, ta3], avg, grade);

      expect(mockDa.runSqlStmt.mock.calls.length).toBe(1);
      expect(mockDa.runSqlStmt.mock.calls[0][1]).toEqual([
        id,
        ta1,
        ta2,
        ta3,
        avg,
        grade,
      ]);
    });

    it('returns insert id', async () => {
      const id = 1234;
      mockDa.runSqlStmt = jest.fn(() => Promise.resolve({ insertId: id }));

      const sucCb = jest.fn(() => {});

      await rt.addReactionTest(1234, [100, 100, 100], 'pass').then(sucCb);

      expect(sucCb.mock.calls.length).toBe(1);
      expect(sucCb.mock.calls[0][0]).toBe(id);
    });
  });
});
