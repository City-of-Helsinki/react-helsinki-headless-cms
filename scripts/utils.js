/* eslint-disable @typescript-eslint/no-var-requires */

const { exec } = require('child_process');

function execShellCommand(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve([stdout, stderr]);
      }
    });
  });
}

async function prepareToPublish() {
  try {
    // Move into dist
    process.chdir('./dist');
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    process.exit(1);
  }
}

exports.execShellCommand = execShellCommand;
exports.prepareToPublish = prepareToPublish;
