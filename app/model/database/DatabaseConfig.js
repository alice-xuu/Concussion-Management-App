export const TABLES_SQL = `
CREATE TABLE IF NOT EXISTS Patient (
    patient_id INTEGER PRIMARY KEY,
    first_name VARCHAR(200),
    last_name VARCHAR(200)
);

-- Instance of an incident report
CREATE TABLE IF NOT EXISTS IncidentReport (
    report_id INTEGER PRIMARY KEY,
    patient_id INTEGER FOREIGN KEY REFERENCES Patient(patient_id)
);

-- An abstract response.
CREATE TABLE IF NOT EXISTS Response (
    response_id INTEGER PRIMARY KEY,
    response VARCHAR(500)
);

-- A prompt for a choice.
CREATE TABLE IF NOT EXISTS Prompt (
    prompt_id INTEGER PRIMARY KEY
);

-- Instance of a multiple part response
CREATE TABLE IF NOT EXISTS MultiResponse (
    mr_id INTEGER PRIMARY KEY,
    prompt_id INTEGER FOREIGN KEY REFERENCES Prompt(prompt_id)
);

-- A part of a multi response
CREATE TABLE IF NOT EXISTS MultiResponsePart (
    response_id INTEGER FOREIGN KEY REFERENCES Response(response_id),
    mr_id INTEGER FOREIGN KEY REFERENCES MultiResponse(mr_id)
);

-- Instance of a single response
CREATE TABLE IF NOT EXISTS SingleResponse (
    sr_id INTEGER PRIMARY KEY,
    response_id INTEGER FOREIGN KEY REFERENCES Response(response_id),
    prompt_id INTEGER FOREIGN KEY REFERENCES Prompt(prompt_id)
);
`;
