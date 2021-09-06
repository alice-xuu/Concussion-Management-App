import { PatientRepo } from '../PatientRepo';
import { Patient } from '../Patient';

describe('PatientRepo', () => {
  const TEST_PATIENT = {
    patient_id: 1234,
    first_name: 'john',
    last_name: 'smith',
    age: 45,
    weight: 67,
  };

  let mockDa;
  let pr;

  beforeEach(() => {
    mockDa = {
      runSqlStmt: jest.fn(() => Promise.resolve('')),
    };
    pr = new PatientRepo(mockDa);
  });

  describe('constructor', () => {
    it('runs without error', () => {
      pr = new PatientRepo(mockDa);
    });
  });

  describe('createPatient', () => {
    it('calls runSqlStmt with correct args', async () => {
      const fN = 'john';
      const lN = 'smith';
      const age = 34;
      const weight = 69;

      await pr.createPatient(fN, lN, age, weight);

      expect(mockDa.runSqlStmt.mock.calls.length).toBe(1);
      expect(mockDa.runSqlStmt.mock.calls[0][1]).toEqual([fN, lN, age, weight]);
    });

    it('returns insert id', async () => {
      const id = 1234;
      mockDa.runSqlStmt = jest.fn(() => Promise.resolve({ insertId: id }));

      const sucCb = jest.fn(() => {});

      await pr.createPatient('', '', 1, 1).then(sucCb);

      expect(sucCb.mock.calls.length).toBe(1);
      expect(sucCb.mock.calls[0][0]).toBe(id);
    });
  });

  describe('getPatient', () => {
    it('returns existing patient', async () => {
      const mockRs = {
        rows: {
          length: 1,
          item: jest.fn(() => TEST_PATIENT),
        },
      };

      mockDa.runSqlStmt = jest.fn(() => Promise.resolve(mockRs));

      let p = await pr.getPatient(TEST_PATIENT.patient_id);

      expect(p).toBeInstanceOf(Patient);
      expect(p.patientId).toBe(TEST_PATIENT.patient_id);
      expect(p.firstName).toBe(TEST_PATIENT.first_name);
      expect(p.lastName).toBe(TEST_PATIENT.last_name);
      expect(p.age).toBe(TEST_PATIENT.age);
      expect(p.weight).toBe(TEST_PATIENT.weight);

      expect(mockRs.rows.item.mock.calls.length).toBe(1);
      expect(mockRs.rows.item.mock.calls[0][0]).toBe(0);
    });
  });
});
