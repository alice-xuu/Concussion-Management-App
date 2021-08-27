import * as React from 'react';

import { DatabaseAdapter } from '../model/database/DatabaseAdapter';
import { PatientRepo } from '../model/database/PatientRepo';
import { IncidentReportRepo } from '../model/database/IncidentReportRepo';
import { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';

/**
 * Temporary screen to show/test database functionality.
 */
export default function SampleDatabaseScreen() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  // TODO: move this to a context that is globally accessible
  const [patientRepo, setPatientRepo] = useState(null);
  const [, setDa] = useState(null);
  const [incidentRepo, setIncidientRepo] = useState(null);

  // TODO: remove or move to a context
  const [responses, setResponses] = useState(null);
  const [patientIdState, setPatientId] = useState(null);
  const [reportId, setReportId] = useState(null);

  // TODO: move to context
  useEffect(() => {
    DatabaseAdapter.initDatabase().then((da) => {
      setDa(da);
      setPatientRepo(new PatientRepo(da));
      setIncidientRepo(new IncidentReportRepo(da));
    });
  }, []);

  // TODO: remove
  const onCreatePatient = () => {
    if (patientRepo != null) {
      const fname = Math.random().toString();

      patientRepo.createPatient(fname, 'Smith').then(
        (patientId) => {
          patientRepo.getPatient(patientId).then((patient) => {
            setFirstName(patient.firstName);
            setLastName(patient.lastName);
          });
          setPatientId(patientId);
        },
        (err) => console.log('Error: ' + err),
      );
    } else {
      console.log('null patientRepo');
    }
  };

  // TODO: remove
  const handleCreateReport = () => {
    incidentRepo.createReport(patientIdState).then((id) => setReportId(id));
  };

  // TODO: remove
  const handleCreateSResponse = () => {
    const desc = 'test-response';
    const res = Math.random().toString();
    incidentRepo.addSingleResponse(reportId, desc, res).then(() => {
      incidentRepo
        .getSingleResponses(reportId)
        .then((sr) => setResponses(JSON.stringify(sr)));
    });
  };

  // TODO: remove
  const handleCreateMultiResponse = () => {
    const desc = 'test-multi-response';
    incidentRepo
      .addMultiResponse(reportId, desc, [
        Math.random().toString(),
        Math.random().toString(),
        Math.random().toString(),
      ])
      .then(
        () => {
          incidentRepo
            .getMultiResponses(reportId)
            .then((mrs) => setResponses(JSON.stringify(mrs)));
        },
        (err) => console.log(err),
      );
  };

  return (
    <View>
      <Button title="Create Patient" onPress={onCreatePatient} />

      <Text>{firstName + ' ' + lastName}</Text>

      <Button title="Create Report" onPress={handleCreateReport} />

      <Text>{reportId}</Text>

      <Button title="Create Single response" onPress={handleCreateSResponse} />

      <Button
        title="Create Multi response"
        onPress={handleCreateMultiResponse}
      />

      <Text>{responses}</Text>
    </View>
  );
}
