import React from 'react';
import { useEffect, useState } from 'react';
import { Patient } from '../model/database/Patient';
import { DatabaseAdapter } from '../model/database/DatabaseAdapter';
import { PatientRepo } from '../model/database/PatientRepo';
import { IncidentReportRepo } from '../model/database/IncidentReportRepo';

// Contexts
/**
 *
 * @type {React.Context<[Patient, (newPatient: Patient) => void]>}
 */
export const PatientContext = React.createContext(null);

/**
 *
 * @type {React.Context<[number, (newPatient: number) => void]>}
 */
export const ReportIdContext = React.createContext(null);

/**
 *
 * @type {React.Context<PatientRepo>}
 */
export const PatientRepoContext = React.createContext(null);

/**
 *
 * @type {React.Context<IncidentReportRepo>}
 */
export const IncidentReportRepoContext = React.createContext(null);

/**
 *
 * @type {React.Context<DatabaseAdapter>}
 */
export const DaContext = React.createContext(null);

/**
 * Provider component
 */
export function GlobalContextProvider(props) {
  // Global patient
  const [patient, setPatient] = useState(new Patient(null, 'John', null));

  // Global report id
  const [reportId, setReportId] = useState(null);

  // Global Repositories
  const [patientRepoContext, setPatientRepoContext] = useState(null);
  const [daContext, setDaContext] = useState(null);
  const [incidentRepoContext, setIncidentRepoContext] = useState(null);

  useEffect(() => {
    DatabaseAdapter.initDatabase().then((daNew) => {
      setDaContext(daNew);
      setPatientRepoContext(new PatientRepo(daNew));
      setIncidentRepoContext(new IncidentReportRepo(daNew));
    });
  }, []);

  // useEffect(() => {
  //   console.log(`setPatient: ${patientContext.setPatient}`);
  //   // console.log(`context: ${JSON.stringify(patientContext)}`);
  // }, [patientContext]);

  return (
    <ReportIdContext.Provider value={[reportId, setReportId]}>
      <PatientContext.Provider value={[patient, setPatient]}>
        <PatientRepoContext.Provider value={patientRepoContext}>
          <IncidentReportRepoContext.Provider value={incidentRepoContext}>
            <DaContext.Provider value={daContext}>
              {props.children}
            </DaContext.Provider>
          </IncidentReportRepoContext.Provider>
        </PatientRepoContext.Provider>
      </PatientContext.Provider>
    </ReportIdContext.Provider>
  );
}
