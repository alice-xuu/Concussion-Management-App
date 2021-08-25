CREATE TABLE Patient (
    patient_id INTEGER PRIMARY KEY,
    first_name VARCHAR(200),
    last_name VARCHAR(200)
);

-- Enforce foreign keys, which are disabled by default
PRAGMA foreign_keys = ON;
