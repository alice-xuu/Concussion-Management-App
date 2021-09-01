import * as React from 'react';

import { useContext, useState } from 'react';
import { Button, Text, View } from 'react-native';
import {
  IncidentReportRepoContext,
  PatientContext,
  PatientRepoContext,
  ReportIdContext,
} from '../components/GlobalContextProvider';

/**
 * Temporary screen to show/test database functionality.
 */
export default function SampleDatabaseScreen() {
  // Context variables
  const [patient, setPatient] = useContext(PatientContext);
  const [reportId, setReportId] = useContext(ReportIdContext);
  const patientRepoContext = useContext(PatientRepoContext);
  const incidentRepoContext = useContext(IncidentReportRepoContext);

  // Local state
  const [responses, setResponses] = useState(null);

  // TODO: remove
  const onCreatePatient = () => {
    if (patientRepoContext !== null) {
      const fname = Math.random().toString();

      patientRepoContext.createPatient(fname, 'Smith').then(
        (patientId) => {
          patientRepoContext.getPatient(patientId).then((patientRet) => {
            setPatient(patientRet);
          });
        },
        (err) => console.log('Error: ' + err),
      );
    } else {
      console.log('null patientRepo');
    }
  };

  // TODO: remove
  const handleCreateReport = () => {
    incidentRepoContext
      .createReport(patient.patientId)
      .then((id) => setReportId(id));
  };

  // TODO: remove
  const handleCreateSResponse = () => {
    const desc = 'test-response';
    const res = Math.random().toString();
    incidentRepoContext.addSingleResponse(reportId, desc, res).then(() => {
      incidentRepoContext
        .getSingleResponses(reportId)
        .then((sr) => setResponses(JSON.stringify(sr)));
    });
  };

  // TODO: remove
  const handleCreateMultiResponse = () => {
    const desc = 'test-multi-response';
    incidentRepoContext
      .addMultiResponse(reportId, desc, [
        Math.random().toString(),
        Math.random().toString(),
        Math.random().toString(),
      ])
      .then(
        () => {
          incidentRepoContext
            .getMultiResponses(reportId)
            .then((mrs) => setResponses(JSON.stringify(mrs)));
        },
        (err) => console.log(err),
      );
  };

  return (
    <View>
      <Button title="Create Patient" onPress={onCreatePatient} />

      <Text>{patient.firstName + ' ' + patient.lastName}</Text>

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
