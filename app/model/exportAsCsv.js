import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

/**
 *
 * @param {string} fileName
 * @param {Object} obj
 * @param {string} shareDialog dialog to display in share prompt (android only)
 * @return {Promise<void>}
 */
const exportAsCsv = async (fileName, obj, shareDialog) => {
  if (!(await Sharing.isAvailableAsync())) {
    // eslint-disable-next-line no-alert
    alert(`Sharing files isn't available on your platform`);
    return;
  }

  // Write csv file using object
  const filePath = `${FileSystem.cacheDirectory}/${fileName}.csv`;

  let keys = Object.keys(obj).map((k, i) => {
    let s = '';
    if (i > 0) {
      s = ',';
    }
    s += k;
    return s;
  });

  let values = Object.values(obj).map((v, i) => {
    let s = '';
    if (i > 0) {
      s = ',';
    }
    s += v;
    return s;
  });

  const contents = ''.concat(...keys, '\n', ...values);
  await FileSystem.writeAsStringAsync(filePath, contents);

  // Share file
  await Sharing.shareAsync(filePath, { dialogTitle: shareDialog });
};

export default exportAsCsv;
