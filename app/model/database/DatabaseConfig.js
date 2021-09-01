export const TABLES_SQL = [
  `
CREATE TABLE IF NOT EXISTS Patient (
    patient_id INTEGER PRIMARY KEY,
    first_name VARCHAR(200),
    last_name VARCHAR(200)
);`,
  //Instance of an incident report
  `
CREATE TABLE IF NOT EXISTS IncidentReport (
    report_id INTEGER PRIMARY KEY,
    patient_id INTEGER REFERENCES Patient(patient_id)
);`,
  //Instance of a multiple part response
  `
CREATE TABLE IF NOT EXISTS MultiResponse (
    mr_id INTEGER PRIMARY KEY,
    report_id INTEGER REFERENCES IncidentReport(report_id),
    description VARCHAR(100)
);`,
  //A part of a multi response
  `
CREATE TABLE IF NOT EXISTS MultiResponsePart (
    mrp_id INTEGER PRIMARY KEY,
    mr_id INTEGER REFERENCES MultiResponse(mr_id),
    response VARCHAR(50)                              
);`,
  // Instance of a single response
  `
CREATE TABLE IF NOT EXISTS SingleResponse (
    sr_id INTEGER PRIMARY KEY,
    report_id INTEGER REFERENCES IncidentReport(report_id),
    response VARCHAR(500),
    description VARCHAR(100)
);
`,
];