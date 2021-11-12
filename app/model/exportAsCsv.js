import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

/**
 *
 * @param fileName local file to write map contents to
 * @param mapping mapping of column headings to values
 * @param shareDialog dialog is share prompt on Android
 * @return {Promise<void>}
 */
const exportMapAsCsv = async (fileName, mapping, shareDialog) => {
  if (!(await Sharing.isAvailableAsync())) {
    // eslint-disable-next-line no-alert
    alert(`Sharing files isn't available on your platform`);
    return;
  }

  // Write csv file using object
  const filePath = `${FileSystem.cacheDirectory}/${fileName}.csv`;

  let attributes = '';
  let values = '';
  let first = true;
  mapping.forEach((v, k) => {
    let sep = ',';
    if (first) {
      sep = '';
      first = false;
    }
    attributes = attributes.concat(sep, k);
    values = values.concat(sep, v);
  });

  const contents = ''.concat(attributes, '\n', values);

  await FileSystem.writeAsStringAsync(filePath, contents);

  // Share file
  await Sharing.shareAsync(filePath, { dialogTitle: shareDialog });
};

export { exportMapAsCsv };
