import fs from 'fs';
import path from 'path';

export default fs.readdirSync(__dirname).reduce((modules, file) => {
  if (file !== 'index.js') {
    const pathFile = path.join(__dirname, file);

    try {
      console.log('Importing:', pathFile);
      const importedFile = require(pathFile);
      modules[file] = importedFile && importedFile.default ? importedFile.default : importedFile
    } catch (e) {
      console.log('Import error:', JSON.stringify({
        path: pathFile,
        message: e.toString(),
      }, null, 1));
    }
  }

  return modules;
}, {});
